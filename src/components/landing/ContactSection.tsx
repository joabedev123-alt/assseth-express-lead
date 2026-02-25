import { motion } from "framer-motion";
import { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/5549999926404";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: "", whatsapp: "", email: "", empresa: "", cnpj: "", mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message as fallback
    const msg = `Olá! Gostaria de solicitar uma proposta.\n\nNome: ${formData.nome}\nWhatsApp: ${formData.whatsapp}\nE-mail: ${formData.email}\nEmpresa: ${formData.empresa}${formData.cnpj ? `\nCNPJ: ${formData.cnpj}` : ""}${formData.mensagem ? `\nMensagem: ${formData.mensagem}` : ""}`;
    window.open(`https://wa.me/5549999926404?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Solicite uma proposta</h2>
          <p className="section-subtitle">
            Preencha o formulário e receba atendimento personalizado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="card-premium text-center !p-12">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-3xl mx-auto mb-4">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-display">Mensagem enviada!</h3>
                <p className="text-muted-foreground font-body">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-premium space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground font-body block mb-1.5">Nome *</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground font-body block mb-1.5">WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="(00) 0 0000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground font-body block mb-1.5">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground font-body block mb-1.5">Empresa *</label>
                    <input
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground font-body block mb-1.5">CNPJ <span className="text-muted-foreground">(opcional)</span></label>
                    <input
                      type="text"
                      value={formData.cnpj}
                      onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="00.000.000/0000-00"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground font-body block mb-1.5">Mensagem</label>
                  <textarea
                    rows={3}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Conte-nos como podemos ajudar..."
                  />
                </div>
                <button type="submit" className="btn-primary-gradient w-full py-4 text-base flex items-center justify-center gap-2">
                  <i className="bi bi-send-fill"></i>
                  Enviar e receber atendimento
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="card-premium flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                <i className="bi bi-whatsapp"></i>
              </div>
              <div>
                <h4 className="font-bold text-foreground font-body mb-1">WhatsApp</h4>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors font-body text-sm">
                  (49) 9 9992-6404
                </a>
              </div>
            </div>

            <div className="card-premium flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div>
                <h4 className="font-bold text-foreground font-body mb-1">E-mail</h4>
                <a href="mailto:atendimento@asseth.com.br" className="text-primary hover:text-secondary transition-colors font-body text-sm">
                  atendimento@asseth.com.br
                </a>
              </div>
            </div>

            <div className="card-premium flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h4 className="font-bold text-foreground font-body mb-1">Endereço</h4>
                <p className="text-sm text-muted-foreground font-body">
                  Av. Campos Novos, 144, Edifício Florença<br />
                  Bairro São José, Fraiburgo - SC<br />
                  CEP 89580-194
                </p>
              </div>
            </div>

            <div className="card-premium flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                <i className="bi bi-instagram"></i>
              </div>
              <div>
                <h4 className="font-bold text-foreground font-body mb-1">Instagram</h4>
                <a href="https://www.instagram.com/assethcontabil/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors font-body text-sm">
                  @assethcontabil
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="card-premium !p-0 overflow-hidden h-48 rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.5!2d-50.92!3d-27.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDAyJzMwLjAiUyA1MMKwNTUnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização ASSETH"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
