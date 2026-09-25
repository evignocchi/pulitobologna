export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  idealCustomer: string;
  useCase: string;
  heroTitle: string;
  heroSubtitle: string;
};

export const services: Service[] = [
  {
    slug: "pulizie-condomini",
    name: "Pulizie condominiali",
    shortDescription:
      "Pulizia ordinaria degli spazi comuni e gestione continuativa del servizio per amministratori e condomini.",
    idealCustomer: "Amministratori di condominio e condomini.",
    useCase:
      "Scale, ingressi, ascensori e spazi comuni puliti con regolarità, senza doverli sollecitare.",
    heroTitle: "Pulizie condominiali a Bologna",
    heroSubtitle:
      "Un servizio ricorrente e affidabile per scale, ingressi e spazi comuni, pensato per semplificare la vita di amministratori e condomini.",
  },
  {
    slug: "pulizie-uffici-attivita-commerciali",
    name: "Uffici e attività commerciali",
    shortDescription:
      "Uffici, negozi e attività commerciali sempre ordinati e presentabili, con un servizio organizzato sulle vostre esigenze.",
    idealCustomer: "Titolari di attività, uffici, negozi e studi professionali.",
    useCase:
      "Ambienti di lavoro puliti prima dell'apertura o fuori orario, senza interferire con l'attività.",
    heroTitle: "Pulizie per uffici e attività commerciali",
    heroSubtitle:
      "Un servizio organizzato per mantenere uffici, negozi e studi professionali sempre puliti e presentabili, con il minimo impatto sulla vostra attività.",
  },
  {
    slug: "pulizie-residenziali",
    name: "Pulizie residenziali",
    shortDescription:
      "Pulizie per case e appartamenti, sia ricorrenti sia per esigenze occasionali.",
    idealCustomer: "Famiglie e privati a Bologna e nei comuni limitrofi.",
    useCase:
      "Pulizia periodica della casa o un intervento singolo quando serve una mano in più.",
    heroTitle: "Pulizie residenziali a Bologna",
    heroSubtitle:
      "Pulizie per case e appartamenti, organizzate in base alle tue esigenze: ricorrenti o occasionali.",
  },
  {
    slug: "pulizie-straordinarie",
    name: "Pulizie straordinarie",
    shortDescription:
      "Per quando serve una pulizia più approfondita o un intervento fuori dalla routine.",
    idealCustomer:
      "Condomini, aziende e privati con esigenze di pulizia profonda o non ricorrente.",
    useCase:
      "Un ambiente che necessita di un intervento più approfondito rispetto alla pulizia ordinaria.",
    heroTitle: "Pulizie straordinarie a Bologna",
    heroSubtitle:
      "Interventi di pulizia profonda per condomini, aziende e abitazioni, quando serve andare oltre la manutenzione ordinaria.",
  },
  {
    slug: "pulizie-post-trasloco",
    name: "Pulizie post-trasloco",
    shortDescription:
      "Pulizia completa degli ambienti dopo un trasloco, prima di entrare o dopo aver lasciato un immobile.",
    idealCustomer:
      "Privati e aziende in fase di trasloco, agenzie immobiliari e proprietari.",
    useCase:
      "Un immobile da consegnare pulito, o un nuovo spazio da rendere pronto prima di trasferirsi.",
    heroTitle: "Pulizie post-trasloco a Bologna",
    heroSubtitle:
      "Pulizia completa di case, uffici e spazi commerciali dopo un trasloco, prima di entrare o dopo aver lasciato un immobile.",
  },
  {
    slug: "pulizie-urgenti",
    name: "Pulizie urgenti",
    shortDescription:
      "Hai bisogno di intervenire rapidamente? Contattaci e verifichiamo la disponibilità.",
    idealCustomer:
      "Condomini, aziende e privati con un'esigenza imprevista o urgente.",
    useCase:
      "Una situazione imprevista che richiede un intervento di pulizia in tempi brevi.",
    heroTitle: "Pulizie urgenti a Bologna",
    heroSubtitle:
      "Hai bisogno di un intervento urgente? Contattaci e verifichiamo la disponibilità in base alla situazione e alla zona.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
