import { motion } from "framer-motion";

const diffs = [
  { icon: "bi-person-check-fill", title: "Atendimento consultivo", desc: "Não somos apenas executores. Orientamos decisões." },
  { icon: "bi-eye-fill", title: "Clareza e transparência", desc: "Você sabe exatamente o que está sendo feito." },
  { icon: "bi-gear-wide-connected", title: "Processos organizados", desc: "Rotinas estruturadas e prazos sempre em dia." },
  { icon: "bi-life-preserver", title: "Suporte e acompanhamento", desc: "Estamos disponíveis quando você precisar." },
  { icon: "bi-clock-fill", title: "Compromisso com prazos", desc: "Obrigações entregues sem atrasos." },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-card">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Por que a ASSETH?</h2>
          <p className="section-subtitle mb-12">
            Nossos diferenciais fazem a diferença na sua experiência contábil.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-premium text-left"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl mb-4">
                <i className={`bi ${d.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-display">{d.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{d.desc}</p>
            </motion.div>
          ))}

          {/* Guarantee card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="card-premium text-left border-2 border-primary/20"
            style={{ background: "linear-gradient(135deg, hsl(192 70% 25% / 0.05), hsl(160 45% 42% / 0.05))" }}
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-xl mb-4">
              <i className="bi bi-award-fill"></i>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2 font-display">Garantia de clareza</h3>
            <p className="text-sm text-muted-foreground font-body">
              Você entende o que está pagando e o que está sendo feito. Sempre.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
