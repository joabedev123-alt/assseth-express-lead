import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5549999926404";

const audiences = [
  { icon: "bi-shop", label: "MEI e pequenos negócios" },
  { icon: "bi-cart4", label: "Comércio e serviços" },
  { icon: "bi-briefcase-fill", label: "Profissionais liberais" },
  { icon: "bi-graph-up", label: "Empresas em crescimento" },
  { icon: "bi-exclamation-triangle-fill", label: "Empresas que precisam regularizar pendências" },
];

const ForWhoSection = () => {
  return (
    <section id="para-quem" className="section-framed section-padding">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Para quem é a ASSETH?</h2>
          <p className="section-subtitle mb-12">
            Atendemos diferentes perfis com a mesma qualidade e dedicação.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {audiences.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="card-premium flex items-center gap-3 !p-4 !px-6"
            >
              <i className={`bi ${a.icon} text-primary text-lg`}></i>
              <span className="text-sm font-medium text-foreground font-body">{a.label}</span>
            </motion.div>
          ))}
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-gradient inline-flex items-center gap-2"
        >
          <i className="bi bi-whatsapp"></i>
          Ver se meu caso se encaixa
        </a>
      </div>
    </section>
  );
};

export default ForWhoSection;
