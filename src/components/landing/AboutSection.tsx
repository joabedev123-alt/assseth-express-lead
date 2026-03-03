import { motion } from "framer-motion";

const differentials = [
    "Atendimento personalizado e humanizado;",
    "Emissão dos certificados digitais pelo escritório, com valor diferenciado para clientes;",
    "Parceria com o Sebrae para emissão de Laudos de SST;",
    "Em abertura de novos CNPJs já abrimos sua conta PJ;",
    "Consultorias nas áreas: financeira, custos, administrativa e RH;",
    "Equipe qualificada;",
    "Planejamento da Contribuição Previdenciária;",
];

const AboutSection = () => {
    return (
        <section id="quem-somos" className="section-framed section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold font-body tracking-wider uppercase text-secondary mb-4 px-3 py-1 bg-secondary/10 rounded-full">
                        Evolução Constante
                    </span>
                    <h2 className="section-title">Quem Somos</h2>
                    <p className="section-subtitle">
                        Conheça a nossa história, nossos propósitos e o compromisso da equipe ASSETH com o seu negócio.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 text-muted-foreground font-body leading-relaxed text-sm md:text-base text-justify"
                    >
                        <p>
                            <strong className="text-foreground">Prezado:</strong><br />
                            Temos 34 anos de mercado, do qual nos últimos 4 passamos por uma reestruturação societária e de imagem, possibilitando ampliar nossa atuação e fornecer serviços inéditos para o ramo de assessoria contábil, nosso objetivo é fornecer soluções administrativas para a sua empresa, auxiliando nas tomadas de decisões e contribuindo para o planejamento do futuro do seu negócio.
                        </p>
                        <p>
                            Nosso escritório entende que se trata muito mais que uma relação de cliente e fornecedor, mas sim uma parceria com o objetivo de fomentar negócios e ampliar as possibilidades, assim agradecemos a oportunidade para mostrar um pouco do trabalho da equipe ASSETH.
                        </p>
                        <p>
                            <strong className="text-foreground">ASSETH significa os Ativos das Organizações/empresas</strong>, os quais nos impulsionam sejam financeiros, materiais ou humanos. E esse será a nossa missão, fomentar o seu negócio.
                        </p>
                        <p>
                            Ao longo desses 4 anos estivemos sempre em busca de nos aperfeiçoar, com foco em oferecer um serviço mais eficiente, e novos produtos que supram a sua necessidade como empreendedor, na procura de ampliar nosso portfólio de forma eficaz nasceu a parceria para convênios, o qual busca oferecer uma rede de descontos e prazos aos nossos clientes.
                        </p>
                        <p className="font-semibold text-foreground">
                            Agradecemos a oportunidade para apresentar um pouco do nosso escritório.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="card-premium !p-6 flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                                <i className="bi bi-bullseye"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground mb-2 font-display">Missão</h3>
                                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                                    Prestar serviços de consultoria e assessoria contábil e administrativa, para empresas que buscam qualidade e diferencial com inovação e sem burocracia, executando processos com eficiência, facilitando o entendimento e oferecendo produtos que supram a demanda dos nossos clientes, gerando crescimento e potenciais de mercado, fomentando novos parceiros.
                                </p>
                            </div>
                        </div>

                        <div className="card-premium !p-6 flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-xl flex-shrink-0">
                                <i className="bi bi-eye-fill"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground mb-2 font-display">Visão</h3>
                                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                                    Se tornar referência regional, oferecendo produtos/serviços que facilitem a prospecção de novos negócios para nossos parceiros, ampliando nossa rede de conexões, tornando-se uma organização sólida, vista como parte fundamental da sociedade na qual pertencemos.
                                </p>
                            </div>
                        </div>

                        <div className="card-premium !p-6 flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                                <i className="bi bi-gem"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground mb-2 font-display">Valores</h3>
                                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                                    Prezamos pela ética, compromisso com a qualidade, descrição nas informações, responsabilidade social e ambiental.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-foreground font-display mb-4">Alguns Diferenciais</h3>
                        <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                            Recursos e parcerias exclusivas que tornam a experiência com nosso escritório muito mais completa e ágil.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {differentials.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
                                    <i className="bi bi-check-lg text-sm"></i>
                                </div>
                                <span className="text-sm text-foreground font-body font-medium leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
