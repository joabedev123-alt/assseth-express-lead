import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5549999926404";

const services = [
  { icon: "bi-building", title: "Contabilidade para empresas", desc: "Escrituração, balancetes e demonstrações contábeis completas." },
  { icon: "bi-receipt-cutoff", title: "Fiscal e tributário", desc: "Apuração de impostos, obrigações acessórias e planejamento fiscal." },
  { icon: "bi-people-fill", title: "Folha de pagamento / DP", desc: "Admissão, rescisão, folha, férias e eSocial." },
  { icon: "bi-file-earmark-check-fill", title: "Regularização e conformidade", desc: "Abertura, alteração, baixa e regularização de empresas." },
  { icon: "bi-compass-fill", title: "Planejamento contábil", desc: "Orientação estratégica para reduzir custos e crescer." },
  { icon: "bi-headset", title: "Acompanhamento consultivo", desc: "Suporte contínuo e atendimento personalizado." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle mb-12">
            Soluções completas em contabilidade, do operacional ao estratégico.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-premium text-left flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-xl mb-4">
                <i className={`bi ${s.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-display">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body mb-6 flex-1">{s.desc}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:text-secondary transition-colors font-body flex items-center gap-1"
              >
                Quero saber mais <i className="bi bi-arrow-right"></i>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
