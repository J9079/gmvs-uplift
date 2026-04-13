import { FileText, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const reports = [
  { year: "2008-09", file: "/reports/annual-report-2008-09.pdf" },
  { year: "2007-08", file: "/reports/annual-report-2007-08.pdf" },
  { year: "2006-07", file: "/reports/annual-report-2006-07.pdf" },
  { year: "2005-06", file: "/reports/annual-report-2005-06.pdf" },
  { year: "2004-05", file: "/reports/annual-report-2004-05.pdf" },
  { year: "2003-04", file: "/reports/annual-report-2003-04.pdf" },
  { year: "2002-03", file: "/reports/annual-report-2002-03.pdf" },
  { year: "2001-02", file: "/reports/annual-report-2001-02.pdf" },
  { year: "2000-01", file: "/reports/annual-report-2000-01.pdf" },
  { year: "1997-2000", file: "/reports/annual-report-1997-2000.pdf" },
];

const AnnualReports = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-nature text-primary-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              वार्षिक प्रतिवेदन
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Annual Reports — ग्रामीण महिला विकास संस्थान की वार्षिक कार्य रिपोर्ट
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <AnimatedSection key={report.year} delay={index * 0.05}>
                <div className="group bg-card border border-border rounded-xl p-6 hover-lift transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg gradient-warm flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-lg">
                        {report.year}
                      </h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar className="w-3 h-3" />
                        <span>Annual Report</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-5">
                    वार्षिक प्रतिवेदन {report.year} — संस्थान की गतिविधियों एवं उपलब्धियों का विवरण
                  </p>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2"
                      asChild
                    >
                      <a href={report.file} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4" /> View
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 gap-2 gradient-warm border-0 text-primary-foreground"
                      asChild
                    >
                      <a href={report.file} download>
                        <Download className="w-4 h-4" /> Download
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnualReports;
