import { Target, Eye, Award, Users, Phone, User, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import officeTeamImg from "@/assets/office-team.jpg";
import teamShankarImg from "@/assets/team-shankar.jpg";
import teamShambhuImg from "@/assets/team-shambhu.jpg";
import teamShivrajImg from "@/assets/team-shivraj.jpg";
import teamdharaImg from "@/assets/team-dhara.jpg.jpeg";
import teamanilImg from "@/assets/team-anilji.jpg.jpeg";
import teamunImg from "@/assets/team-unknown.jpeg";

interface TeamMember {
  name: string;
  role: string;
  phone: string;
  image?: string;
  category: "leadership" | "management" | "staff";
}

const team: TeamMember[] = [
  { name: "Anil Kumar Mathur", role: "President", phone: "9672979032", image: teamanilImg, category: "leadership" },
  { name: "Shankar Singh Rawat", role: "Director", phone: "9672979032", image: teamShankarImg, category: "leadership" },
  { name: "Shambhu Singh Rawat", role: "Board of directory & Treasure", phone: "9672979033", image: teamShambhuImg, category: "leadership" },
  { name: "Shivraj Singh Rawat", role: "Accountant", phone: "7426996002", image: teamShivrajImg, category: "management" },
  { name: "Dhara Singh Rawat", role: "ICICI Loan Distributor", phone: "9876543210",image: teamdharaImg, category: "management" },
  { name: "Ramesh Kumar", role: "Manager", phone: "9876543210",image: teamunImg,  category: "management" },
  { name: "Ranjit Singh", role: "Manager", phone: "9876543210",image: teamunImg, category: "management" },
  { name: "Sunita Devi", role: "Treasurer", phone: "9876543211",image: teamunImg, category: "management" },
  { name: "Kavita Sharma", role: "Field Coordinator", phone: "9876543212",image: teamunImg, category: "staff" },
  { name: "Rajendra Meena", role: "Program Officer", phone: "9876543213",image: teamunImg, category: "staff" },
  { name: "Geeta Rawat", role: "Community Worker", phone: "9876543214",image: teamunImg, category: "staff" },
  { name: "Mohan Lal", role: "Office Assistant", phone: "9876543215",image: teamunImg, category: "staff" },
  { name: "Priya Kumari", role: "Data Entry Operator", phone: "9876543216",image: teamunImg, category: "staff" },
];

const categoryLabels: Record<string, string> = {
  leadership: "Directors & Leadership",
  management: "Management & Accounts",
  staff: "Staff & Field Workers",
};

const objectives = [
  "To assist the villagers to arrange clean drinking water in problem villages",
  "To help the villagers in maintaining good health by creating awareness about health and reach mother-child welfare programme to villages",
  "To inculcate the interest of rural women in their development and to make women self-reliant by imparting them training in self-employment",
  "To reach knowledge of modern technology to farmers and motivate them for agriculture",
  "To create awareness among youth for computer education",
  "To link rural women with insurance and reduce risk",
  "To create awareness among people to prevent child labour",
  "To create awareness among people by making information available on MNREGA",
  "To motivate people for animal husbandry",
  "To create awareness among people about importance of vegetation for environment conservation",
  "To impart knowledge to villagers for soil conservation and use new techniques",
  "To run women and child development programmes and organise meetings for creating awareness among people",
  "To establish schools and libraries for better education",
  "To cooperate in promoting rural handicraft and arrange loan as per rules for promoting activities related to khadi and village industries to create opportunities in rural areas",
  "To carry out extension activities related to the organisation's objectives, publish and print books and establish libraries",
];

const thrustAreas = [
  "Child Rights",
  "Health Concerns",
  "Women Empowerment",
  "Community Development",
  "Natural Resource Management",
];

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">About Us</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Who We Are</h1>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <img src={officeTeamImg} alt="GMVS Team" className="rounded-xl shadow-soft w-full" loading="lazy" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Gramin Mahila Vikas Sansthan</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GMVS promotes education, health, women's development, child welfare, sustainable agriculture and employment generation. It advocates for local solutions, gender equality, and decentralised participation of people in development processes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the years, GMVS has worked with thousands of rural women through Self Help Groups, skill training programs like stitching, and community health initiatives across multiple districts of Rajasthan.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Vision, Mission */}
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Vision, Mission & Objectives</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <AnimatedSection>
            <div className="bg-card rounded-xl p-6 shadow-soft hover-lift h-full">
              <div className="w-12 h-12 rounded-lg gradient-warm flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To make available alternatives of education, health, environment, drinking water and employment in rural social life.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-card rounded-xl p-6 shadow-soft hover-lift h-full">
              <div className="w-12 h-12 rounded-lg gradient-warm flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To carry out women empowerment through self-help groups, construct schools for education, ensure better health through immunisation and health information, awareness about the plantation and conserve the environment.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Objectives */}
        <AnimatedSection>
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg gradient-nature flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">Objectives</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-3">
              {objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Thrust Areas */}
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Thrust Areas</h2>
        </AnimatedSection>
        <div className="flex flex-wrap justify-center gap-4">
          {thrustAreas.map((area, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl px-6 py-4 shadow-soft hover-lift text-center">
                <span className="font-heading font-semibold text-foreground">{area}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Our Team</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Meet the People Behind GMVS</h2>
        </AnimatedSection>
        {(["leadership", "management", "staff"] as const).map((cat) => {
          const members = team.filter((m) => m.category === cat);
          return (
            <div key={cat} className="mb-10 last:mb-0">
              <AnimatedSection>
                <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">{categoryLabels[cat]}</h3>
              </AnimatedSection>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member, i) => (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <div className="bg-card rounded-xl p-6 shadow-soft hover-lift text-center h-full flex flex-col items-center">
                      {member.image ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="
                              w-[250px]
                              h-[250px]
                              min-w-[180px]
                              min-h-[180px]
                              object-cover
                              object-center
                              rounded-xl
                              overflow-hidden
                            "
                          />
                      ) : (
                        <div className="w-20 h-20 rounded-full gradient-warm flex items-center justify-center mb-4 shadow-soft">
                          <User className="w-8 h-8 text-primary-foreground" />
                        </div>
                      )}
                      <h3 className="font-heading font-semibold text-lg text-foreground">{member.name}</h3>
                      <span className="text-primary font-medium text-sm mb-3">{member.role}</span>
                      <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                        <Phone className="w-4 h-4" />
                        {member.phone}
                      </a>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </div>
);

export default About;
