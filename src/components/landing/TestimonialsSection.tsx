import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5549999926404";

const testimonials = [
  {
    name: "Rose Mara Quiroli",
    segment: "Cliente - Fraiburgo/SC",
    text: "Minha experiência foi extremamente positiva. A equipe foi atenciosa e profissional, facilitando todo o processo. A clareza nas informações e o suporte oferecido me deixaram confiante e tranquila.",
    link: "https://maps.app.goo.gl/oFVSD9AS1KHv25pR8"
  },
  {
    name: "Vanusa Apolinario",
    segment: "Cliente - Fraiburgo/SC",
    text: "Equipe muito competente e atenciosa! Trabalha conosco desde iniciamos, há mais de 2 anos.",
    link: "https://maps.app.goo.gl/oiCNUYF5keytyQZp8"
  },
  {
    name: "Ariel Bonadiman",
    segment: "Cliente - Fraiburgo/SC",
    text: "Sempre bem atendido e com eficiência",
    link: "https://maps.app.goo.gl/TQSqtLfN8NaqPdbPA"
  },
  {
    name: "Andragas Dani",
    segment: "Cliente - Fraiburgo/SC",
    text: "Equipe muito atenciosa e muito competente.",
    link: "https://maps.app.goo.gl/mh3vyhn7Vkm69wzV7"
  },
  {
    name: "Rafael Gois",
    segment: "Cliente - Fraiburgo/SC",
    text: "Somos clientes e recomendamos muito.",
    link: "https://maps.app.goo.gl/5EYzMKdWNfvVbJ4P6"
  },
  {
    name: "Jéssica Gonçalves",
    segment: "Cliente - Fraiburgo/SC",
    text: "Profissionais qualificados e bem dispostos",
    link: "https://maps.app.goo.gl/cx8VwJDgoLRJYusv6"
  },
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
              className="card-premium text-left flex flex-col h-full"
            >
              <div className="flex text-yellow-500 text-sm mb-3 gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <i key={j} className="bi bi-star-fill"></i>
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-body mb-4 italic flex-grow">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm font-body">
                  {t.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground font-body">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{t.segment}</p>
                  {t.link && (
                    <a href={t.link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline flex items-center gap-1 mt-1">
                      <i className="bi bi-google"></i> Ver no Google
                    </a>
                  )}
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
