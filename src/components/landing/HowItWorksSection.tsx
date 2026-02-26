import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5549999926404";

const steps = [
  { num: "01", icon: "bi-whatsapp", title: "Você chama no WhatsApp", desc: "Envie uma mensagem e diga o que precisa." },
  { num: "02", icon: "bi-chat-dots-fill", title: "Entendemos sua necessidade", desc: "Conversamos para entender seu cenário contábil." },
  { num: "03", icon: "bi-file-earmark-text-fill", title: "Enviamos proposta clara", desc: "Proposta transparente, sem surpresas." },
  { num: "04", icon: "bi-rocket-takeoff-fill", title: "Iniciamos sua rotina contábil", desc: "Organizamos tudo para você focar no negócio." },
];

const HowItWorksSection = () => {
  return (
    <section className="section-framed section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title text-left">Como funciona?</h2>
            <p className="section-subtitle text-left !mx-0 mb-10">
              Em 4 passos simples, você já tem sua contabilidade organizada.
            </p>

            <div className="space-y-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-primary-foreground font-bold font-body text-sm btn-primary-gradient">
                    {s.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 font-display text-lg">{s.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-premium !p-10 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl mx-auto mb-6">
              <i className="bi bi-chat-heart-fill"></i>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6 font-body">
              Fale conosco agora e receba uma proposta personalizada em poucos minutos.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-4"
            >
              <i className="bi bi-whatsapp text-lg"></i>
              Começar agora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
