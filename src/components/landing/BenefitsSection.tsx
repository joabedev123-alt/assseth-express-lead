import { motion } from "framer-motion";

const benefits = [
  { icon: "bi-bar-chart-line-fill", title: "Mais clareza financeira", desc: "Relatórios e indicadores para decisões seguras." },
  { icon: "bi-shield-fill-check", title: "Menos riscos com o fisco", desc: "Conformidade tributária e fiscal em dia." },
  { icon: "bi-piggy-bank-fill", title: "Economia tributária", desc: "Planejamento para pagar menos impostos legalmente." },
  { icon: "bi-clipboard-data-fill", title: "Relatórios consultivos", desc: "Suporte e orientação contábil personalizada." },
  { icon: "bi-patch-check-fill", title: "Regularidade e conformidade", desc: "Obrigações acessórias sempre em ordem." },
  { icon: "bi-speedometer2", title: "Agilidade e organização", desc: "Processos otimizados e respostas rápidas." },
];

const BenefitsSection = () => {
  return (
    <section className="section-framed section-padding">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Resultados que fazem diferença</h2>
          <p className="section-subtitle mb-12">
            Cuidamos da sua contabilidade para que você foque no que importa: o crescimento do seu negócio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-premium text-left"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl mb-4">
                <i className={`bi ${b.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-display">{b.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
