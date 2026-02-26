import { motion } from "framer-motion";
import heroImage from "@/assets/hero-office.jpg";

const WHATSAPP_LINK = "https://wa.me/5549999926404";

const stats = [
  { icon: "bi-lightning-charge-fill", label: "Atendimento rápido" },
  { icon: "bi-calendar-check-fill", label: "Rotina fiscal em dia" },
  { icon: "bi-shield-check", label: "Redução de riscos" },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="section-framed pt-20 md:pt-32 pb-12 md:pb-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold font-body tracking-wider uppercase text-secondary mb-4 px-3 py-1 bg-secondary/10 rounded-full">
              Gestão Contábil Estratégica
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4 md:mb-6">
              Contabilidade estratégica para empresas que querem crescer com{" "}
              <span className="text-primary">segurança.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg font-body leading-relaxed">
              Atendimento consultivo, organização fiscal e gestão contábil completa para você focar no seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gradient text-center flex items-center justify-center gap-2 px-8 py-4 text-base"
              >
                <i className="bi bi-whatsapp text-lg"></i>
                Falar com um contador agora
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-premium flex items-center gap-3 !p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-lg">
                    <i className={`bi ${stat.icon}`}></i>
                  </div>
                  <span className="text-sm font-medium text-foreground font-body">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Equipe de contabilidade em escritório moderno"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="eager"
              />
            </div>
            {/* Floating card */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:-left-8 card-premium z-10 !p-3 flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-lg md:text-xl">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground font-body">+500</p>
                <p className="text-[10px] md:text-xs text-muted-foreground font-body">Empresas atendidas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
