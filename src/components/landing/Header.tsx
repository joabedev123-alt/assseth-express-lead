import { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/5549999926404";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Para Quem", href: "#para-quem" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center btn-primary-gradient text-lg font-bold font-display">
            A
          </div>
          <span className="font-display text-xl font-bold text-foreground">ASSETH</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contato" className="btn-outline-premium text-sm px-4 py-2">
            Solicitar Proposta
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-gradient text-sm px-4 py-2 flex items-center gap-2"
          >
            <i className="bi bi-whatsapp"></i>
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <i className={`bi ${mobileOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 pb-6">
          <nav className="flex flex-col gap-3 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground py-2 font-body"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient text-center mt-2"
            >
              <i className="bi bi-whatsapp mr-2"></i>
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
