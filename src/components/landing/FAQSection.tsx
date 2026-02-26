import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Quais documentos preciso para começar?", a: "Geralmente, contrato social, CNPJ, documentos dos sócios e acessos ao sistema da Receita Federal. Orientamos tudo no primeiro contato." },
  { q: "Vocês atendem online?", a: "Sim! Atendemos de forma 100% digital, com reuniões por vídeo e suporte por WhatsApp. Também atendemos presencialmente em Fraiburgo-SC." },
  { q: "Como funciona a troca de contador?", a: "Nós cuidamos de toda a transição: solicitamos os documentos do escritório anterior e garantimos que nada fique pendente." },
  { q: "Em quanto tempo consigo regularizar minha empresa?", a: "Depende da situação, mas a maioria das regularizações é resolvida entre 15 e 45 dias." },
  { q: "Quais serviços estão inclusos?", a: "Contabilidade completa, fiscal, folha de pagamento, obrigações acessórias e acompanhamento consultivo. Detalhamos tudo na proposta." },
  { q: "Como funciona o suporte?", a: "Atendemos via WhatsApp, e-mail e reuniões agendadas. Respondemos com agilidade durante horário comercial." },
  { q: "Tem contrato de fidelidade?", a: "Não trabalhamos com fidelidade. Acreditamos que a qualidade do serviço é o que nos mantém juntos." },
  { q: "Como solicitar uma proposta?", a: "Basta clicar no botão de WhatsApp ou preencher o formulário de contato nesta página. Respondemos rapidamente!" },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-framed section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Perguntas frequentes</h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre nossos serviços.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="card-premium !p-0 overflow-hidden border border-border"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground font-body text-sm hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground font-body">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
