import { FileText, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const reports = [
  { year: "2015-16", file: "/reports/annual-report-2015-16.pdf", thumb: "/reports/thumbs/annual-report-2015-16.jpg" },
  { year: "2014-15", file: "/reports/annual-report-2014-15.pdf", thumb: "/reports/thumbs/annual-report-2014-15.jpg" },
  { year: "2013-14", file: "/reports/annual-report-2013-14.pdf", thumb: "/reports/thumbs/annual-report-2013-14.jpg" },
  { year: "2012-13", file: "/reports/annual-report-2012-13.pdf", thumb: "/reports/thumbs/annual-report-2012-13.jpg" },
  { year: "2011-12", file: "/reports/annual-report-2011-12.pdf", thumb: "/reports/thumbs/annual-report-2011-12.jpg" },
  { year: "2010-11", file: "/reports/annual-report-2010-11.pdf", thumb: "/reports/thumbs/annual-report-2010-11.jpg" },
  { year: "2009-10", file: "/reports/annual-report-2009-10.pdf", thumb: "/reports/thumbs/annual-report-2009-10.jpg" },
  { year: "2008-09", file: "/reports/annual-report-2008-09.pdf", thumb: "/reports/thumbs/annual-report-2008-09.jpg" },
  { year: "2007-08", file: "/reports/annual-report-2007-08.pdf", thumb: "/reports/thumbs/annual-report-2007-08.jpg" },
  { year: "2006-07", file: "/reports/annual-report-2006-07.pdf", thumb: "/reports/thumbs/annual-report-2006-07.jpg" },
  { year: "2005-06", file: "/reports/annual-report-2005-06.pdf", thumb: "/reports/thumbs/annual-report-2005-06.jpg" },
  { year: "2004-05", file: "/reports/annual-report-2004-05.pdf", thumb: "/reports/thumbs/annual-report-2004-05.jpg" },
  { year: "2003-04", file: "/reports/annual-report-2003-04.pdf", thumb: "/reports/thumbs/annual-report-2003-04.jpg" },
  { year: "2002-03", file: "/reports/annual-report-2002-03.pdf", thumb: "/reports/thumbs/annual-report-2002-03.jpg" },
  { year: "2001-02", file: "/reports/annual-report-2001-02.pdf", thumb: "/reports/thumbs/annual-report-2001-02.jpg" },
  { year: "2000-01", file: "/reports/annual-report-2000-01.pdf", thumb: "/reports/thumbs/annual-report-2000-01.jpg" },
  { year: "1997-2000", file: "/reports/annual-report-1997-2000.pdf", thumb: "/reports/thumbs/annual-report-1997-2000.jpg" },
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
                <div className="group bg-card border border-border rounded-xl overflow-hidden hover-lift transition-all duration-300">
                  {/* Cover Image */}
                  <a href={report.file} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="aspect-[3/4] overflow-hidden bg-muted">
                      <img
                        src={report.thumb}
                        alt={`Annual Report ${report.year} Cover`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </a>

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-md gradient-warm flex items-center justify-center">
                        <FileText className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground text-base">
                          {report.year}
                        </h3>
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <Calendar className="w-3 h-3" />
                          <span>Annual Report</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 gap-1.5 text-xs" asChild>
                        <a href={report.file} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-3.5 h-3.5" /> View
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1 gap-1.5 text-xs gradient-warm border-0 text-primary-foreground" asChild>
                        <a href={report.file} download>
                          <Download className="w-3.5 h-3.5" /> Download
                        </a>
                      </Button>
                    </div>
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
