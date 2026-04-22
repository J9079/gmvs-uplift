import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import gmvsLogo from "@/assets/gmvs-logo.jpg";

type NavChild = { label: string; path: string; desc?: string };
type NavGroup = { label: string; path?: string; children?: NavChild[] };

const navGroups: NavGroup[] = [
  { label: "Home", path: "/" },
  {
    label: "Who We Are",
    children: [
      { label: "About GMVS", path: "/about", desc: "Vision, mission and objectives" },
      { label: "Awards & Honours", path: "/awards", desc: "Recognition and milestones" },
      { label: "Annual Reports", path: "/annual-reports", desc: "1997 – present" },
    ],
  },
  {
    label: "What We Do",
    children: [
      { label: "Programs", path: "/programs", desc: "Our six thrust areas" },
      { label: "Impact", path: "/impact", desc: "Lives and villages reached" },
      { label: "Stories from the Field", path: "/stories", desc: "Voices of change" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Gallery", path: "/gallery", desc: "Photos from the field" },
      { label: "Events", path: "/events", desc: "Past and upcoming" },
      { label: "Annual Reports", path: "/annual-reports", desc: "Download PDFs" },
    ],
  },
  {
    label: "Work With Us",
    children: [
      { label: "Contact", path: "/contact", desc: "Get in touch" },
      { label: "Partner / CSR", path: "/contact", desc: "Collaborate with GMVS" },
      { label: "Volunteer", path: "/contact", desc: "Join our mission" },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path?: string, group?: NavGroup) => {
    if (path && location.pathname === path) return true;
    if (group?.children?.some((c) => c.path === location.pathname)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow section-padding !py-0 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={gmvsLogo} alt="GMVS Logo" className="w-10 h-10 rounded-full object-cover" />
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-foreground text-sm md:text-base">GMVS</span>
            <span className="text-[10px] md:text-xs text-muted-foreground">Gramin Mahila Vikas Sansthan</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1" onMouseLeave={() => setHoverIdx(null)}>
          {navGroups.map((group, idx) => {
            const active = isActive(group.path, group);
            const hasChildren = !!group.children?.length;
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setHoverIdx(hasChildren ? idx : null)}
              >
                {group.path && !hasChildren ? (
                  <Link
                    to={group.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                      active ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {group.label}
                  </Link>
                ) : (
                  <button
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                      active ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {group.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                )}

                <AnimatePresence>
                  {hoverIdx === idx && hasChildren && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full pt-3 w-72"
                    >
                      <div className="bg-popover border border-border rounded-xl shadow-warm overflow-hidden">
                        {group.children!.map((c) => (
                          <Link
                            key={c.label + c.path}
                            to={c.path}
                            className="block px-4 py-3 hover:bg-muted transition-colors group"
                          >
                            <div className="font-medium text-sm text-foreground group-hover:text-primary">
                              {c.label}
                            </div>
                            {c.desc && (
                              <div className="text-xs text-muted-foreground mt-0.5">{c.desc}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <Button className="ml-3 gradient-warm border-0 text-primary-foreground shadow-warm hover:opacity-90 gap-2">
            <Heart className="w-4 h-4" /> Donate Now
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-narrow px-4 py-4 flex flex-col gap-1">
              {navGroups.map((group) => {
                const hasChildren = !!group.children?.length;
                if (!hasChildren) {
                  return (
                    <Link
                      key={group.label}
                      to={group.path!}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-md text-sm font-medium ${
                        location.pathname === group.path
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:bg-muted"
                      }`}
                    >
                      {group.label}
                    </Link>
                  );
                }
                const open = mobileGroup === group.label;
                return (
                  <div key={group.label}>
                    <button
                      onClick={() => setMobileGroup(open ? null : group.label)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium text-foreground/80 hover:bg-muted"
                    >
                      {group.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && (
                      <div className="ml-4 border-l border-border pl-3 flex flex-col">
                        {group.children!.map((c) => (
                          <Link
                            key={c.label + c.path}
                            to={c.path}
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <Button className="mt-2 gradient-warm border-0 text-primary-foreground gap-2">
                <Heart className="w-4 h-4" /> Donate Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
