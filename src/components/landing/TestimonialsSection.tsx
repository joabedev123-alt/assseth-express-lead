import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5549999926404";

const testimonials = [
  { name: "Marcos Ribeiro", segment: "Comércio", text: "A ASSETH organizou toda a nossa contabilidade em poucas semanas. Atendimento impecável e sempre disponível." },
  { name: "Juliana Santos", segment: "Prestadora de serviços", text: "Finalmente encontrei um contador que explica tudo de forma clara. Recomendo muito a equipe." },
  { name: "Carlos Eduardo", segment: "MEI", text: "Me ajudaram na regularização e hoje minha empresa está 100% em dia. Muito obrigado!" },
  { name: "Fernanda Lima", segment: "Clínica de estética", text: "Excelente suporte, respondem rápido e sempre orientam da melhor forma." },
  { name: "Roberto Nascimento", segment: "Indústria", text: "Profissionais competentes e comprometidos. A melhor contabilidade que já tivemos." },
  { name: "Patrícia Alves", segment: "E-commerce", text: "Conseguimos reduzir nossa carga tributária com o planejamento deles. Fantástico!" },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-framed section-padding">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-500 text-lg">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="bi bi-star-fill"></i>
              ))}
            </div>
            <span className="font-bold text-foreground font-body text-lg">4.9/5</span>
          </div>
          <h2 className="section-title">Clientes satisfeitos</h2>
          <p className="section-subtitle mb-12">
            Veja o que dizem os empresários que confiam na ASSETH.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-premium text-left"
            >
              <div className="flex text-yellow-500 text-sm mb-3 gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <i key={j} className="bi bi-star-fill"></i>
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-body mb-4 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm font-body">
                  {t.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground font-body">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{t.segment}</p>
                </div>
              </div>
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
          Quero ser atendido(a)
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
