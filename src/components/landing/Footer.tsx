const WHATSAPP_LINK = "https://wa.me/5549999926404";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center btn-primary-gradient text-lg font-bold font-display">
                A
              </div>
              <span className="font-display text-xl font-bold text-background">ASSETH</span>
            </div>
            <p className="text-sm leading-relaxed font-body text-background/60">
              Gestão contábil estratégica para empresas que querem crescer com segurança, organização e clareza.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-background mb-4 font-body">Serviços</h4>
            <ul className="space-y-2 text-sm font-body text-background/60">
              <li>Contabilidade empresarial</li>
              <li>Fiscal e tributário</li>
              <li>Folha de pagamento</li>
              <li>Regularização</li>
              <li>Planejamento contábil</li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="font-bold text-background mb-4 font-body">Institucional</h4>
            <ul className="space-y-2 text-sm font-body text-background/60">
              <li><a href="#inicio" className="hover:text-background transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-background transition-colors">Diferenciais</a></li>
              <li><a href="#depoimentos" className="hover:text-background transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-background mb-4 font-body">Contato</h4>
            <ul className="space-y-3 text-sm font-body text-background/60">
              <li className="flex items-center gap-2">
                <i className="bi bi-whatsapp text-secondary"></i>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  (49) 9 9992-6404
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-envelope-fill text-secondary"></i>
                <a href="mailto:atendimento@asseth.com.br" className="hover:text-background transition-colors">
                  atendimento@asseth.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="bi bi-geo-alt-fill text-secondary mt-0.5"></i>
                <span>Av. Campos Novos, 144, Ed. Florença, São José, Fraiburgo - SC</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-instagram text-secondary"></i>
                <a href="https://www.instagram.com/assethcontabil/" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  @assethcontabil
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/40 font-body">
          <p>© {new Date().getFullYear()} ASSETH Gestão Contábil. Todos os direitos reservados.</p>
          <p>CNPJ: 85.149.219/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
