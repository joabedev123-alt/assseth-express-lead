const WHATSAPP_LINK = "https://wa.me/5549999926404";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
