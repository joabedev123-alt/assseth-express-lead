import { motion } from "framer-motion";

const partners = [
    { name: "Agronutri", contact: "@agronutri.fb", icon: "bi-instagram" },
    { name: "Andragas", contact: "(49) 3246 7000", icon: "bi-telephone" },
    { name: "Angelisa", contact: "(49) 9 9826 4202", icon: "bi-whatsapp" },
    { name: "Auto Elétrica Central", contact: "@autoeletricacentral.frai", icon: "bi-instagram" },
    { name: "Auto Elétrica Pinheiro", contact: "(49) 3246 2293", icon: "bi-telephone" },
    { name: "Bio Saúde", contact: "(49) 3246 8050", icon: "bi-telephone" },
    { name: "Bocó Gás", contact: "(49) 9 9826 2626", icon: "bi-whatsapp" },
    { name: "Bs Informática - CH Sistema", contact: "(49) 9 8860 4689", icon: "bi-whatsapp" },
    { name: "Climaseg", contact: "@climaseg.sst", icon: "bi-instagram" },
    { name: "Clinica Mais Saúde", contact: "(49) 9 9184 8035", icon: "bi-whatsapp" },
    { name: "Danielle B. Dalagnol", contact: "(49) 9 9133 1919", icon: "bi-whatsapp" },
    { name: "GL Lubrificantes", contact: "@gl.lubrificantes", icon: "bi-instagram" },
    { name: "Guinchos Furtado", contact: "(49) 9 9999 6757", icon: "bi-whatsapp" },
    { name: "Inova Odonto", contact: "(49) 9 9808 3242", icon: "bi-whatsapp" },
    { name: "Lavação D'marco", contact: "(49) 9 9801 5386", icon: "bi-whatsapp" },
    { name: "Maxxihar", contact: "@vivi_maxihair", icon: "bi-instagram" },
    { name: "Papelaria Central", contact: "(49) 3246 5214", icon: "bi-telephone" },
    { name: "Usifarma", contact: "@redeusifarma", icon: "bi-instagram" },
    { name: "Val Dalagnol", contact: "(49) 9 9133 1919", icon: "bi-whatsapp" },
];

const PartnersSection = () => {
    return (
        <section id="conveniados" className="section-framed section-padding bg-background/50">
            <div className="container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block text-sm font-semibold font-body tracking-wider uppercase text-secondary mb-4 px-3 py-1 bg-secondary/10 rounded-full">
                        Lista de Conveniados
                    </span>
                    <h2 className="section-title">Empresas Conveniadas</h2>
                    <p className="section-subtitle mb-8 text-lg font-medium text-foreground">
                        Descontos de até 20% para clientes ASSETH.
                    </p>
                    <p className="section-subtitle mb-12 max-w-2xl mx-auto">
                        Oferecemos produtos que proporcionam o crescimento e a prospecção de parcerias para o seu negócio;
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
                    {partners.map((p, i) => (
                        <motion.div
                            key={p.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="card-premium text-left flex items-center gap-4 !p-4 hover:border-primary/30 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <i className={`bi ${p.icon} text-lg`}></i>
                            </div>
                            <div className="overflow-hidden">
                                <h3 className="text-sm font-bold text-foreground font-display truncate" title={p.name}>{p.name}</h3>
                                <p className="text-xs text-muted-foreground font-body truncate">{p.contact}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
