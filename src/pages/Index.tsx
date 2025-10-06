import { Building2 } from "lucide-react";
import founderRajesh from "@/assets/founder-rajesh.jpg";
import founderMurali from "@/assets/founder-murali.jpg";
import founderKireeti from "@/assets/founder-kireeti.jpg";

const Index = () => {
  const founders = [
    {
      name: "K. Rajesh Kumar",
      image: founderRajesh,
      alt: "K. Rajesh Kumar - Co-Founder, KKR INFRA DEVELOPER"
    },
    {
      name: "D. MURALI NAIDU",
      image: founderMurali,
      alt: "D. MURALI NAIDU - Co-Founder, KKR INFRA DEVELOPER"
    },
    {
      name: "I. kireeti",
      image: founderKireeti,
      alt: "I. kireeti - Co-Founder, KKR INFRA DEVELOPER"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Company Logo */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-12 h-12 md:w-16 md:h-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
              KKR INFRA DEVELOPER
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Building Tomorrow's Infrastructure Today
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-primary animate-blink">
              COMING SOON
            </h2>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Founders
            </h2>
            <p className="text-muted-foreground text-lg">
              Led by visionaries committed to excellence in construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 group"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <div className="relative mb-6 transition-transform duration-300 group-hover:scale-105">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                    <img
                      src={founder.image}
                      alt={founder.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {founder.name}
                </h3>
                <p className="text-muted-foreground mt-2">Co-Founder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2025 KKR INFRA DEVELOPER. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
