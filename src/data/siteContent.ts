/** Contenu textuel et médias repris de l’ancien index.html (aucune suppression). */

export const meta = {
  title: "Signature Nomade — Traiteur mobile & événementiel premium",
  description:
    "Signature Nomade — Traiteur mobile premium. Restauration événementielle sur mesure partout en France.",
} as const;

export const navLinks = [
  { href: "#a-propos", label: "À propos" },
  { href: "#prestations", label: "Prestations" },
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#galerie", label: "Galerie" },
  { href: "#avis", label: "Avis" },
  { href: "#processus", label: "Processus" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  badge: "Déplacement partout en France",
  title: "L'expérience gastronomique qui vient à vous",
  lead: "Prestations culinaires haut de gamme pour entreprises, événements privés et réceptions sur mesure.",
  image:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=85",
} as const;

export const about = {
  kicker: "Signature Nomade",
  title: "À propos",
  caption: "Menus pensés comme en salle avec la même rigueur sur site.",
  body:
    "Signature Nomade transforme chaque réception en expérience culinaire mémorable. Nous proposons des prestations de restauration sur mesure directement sur le lieu de votre événement, pour les professionnels comme les particuliers.",
  image:
    "https://images.unsplash.com/photo-1555244162-80383440d5fc?auto=format&fit=crop&w=1600&q=85",
  imageAlt: "Service événementiel",
  stats: [
    { value: "+150", label: "événements" },
    { value: "100%", label: "sur mesure" },
    { value: "7j/7", label: "disponible" },
  ],
} as const;

export const servicesIntro = {
  kicker: "Prestations",
  title: "Expériences pour chaque moment",
  sub: "Un traiteur mobile premium : nous installons matériel, service et mise en valeur sur votre lieu.",
} as const;

export const services = [
  {
    chip: "Cocktails",
    title: "Cocktails dînatoires",
    text: "Bouchées fines, flux de service impeccable pour vos soirées professionnelles.",
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=85",
  },
  {
    chip: "Buffet",
    title: "Buffet premium",
    text: "Tablées scénographiées, saisonnalité affirmée.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85",
  },
  {
    chip: "Chef",
    title: "Chef à domicile",
    text: "Menu dégustation, mise en bouche sous vos yeux, narration précise à chaque plat.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    chip: "Brunch",
    title: "Brunch événementiel",
    text: "Matins généreux, ambiance lounge jusqu'au café gourmand.",
    image:
      "https://images.unsplash.com/photo-1527169402691-feff553c519b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    chip: "Entreprises",
    title: "Séminaires d'entreprise",
    text: "Déjeuners presse, clôtures de séminaires, pauses gastronomiques carburants.",
    image:
      "https://images.unsplash.com/photo-1540575467063-27a917340a73?auto=format&fit=crop&w=1200&q=85",
  },
  {
    chip: "Privé",
    title: "Mariages & événements privés",
    text: "Fil conducteur jusqu'aux desserts, mise en valeur des lieux choisis.",
    image:
      "https://images.unsplash.com/photo-1464366400609-0988cd296e9e?auto=format&fit=crop&w=1200&q=85",
  },
] as const;

export const knowHow = {
  kicker: "Excellence",
  title: "Notre savoir-faire",
  lead: "Une promesse artisanale pour des événements d'exception",
  image:
    "https://images.unsplash.com/photo-1540189549338-e700f0ccf501?auto=format&fit=crop&w=1600&q=85",
  imageAlt: "Cuisine",
  pills: [
    {
      icon: "🌿",
      title: "Produits frais",
      text: "Saisons suivies, traçabilité et circuits courts lorsque possible.",
    },
    {
      icon: "👩‍🍳",
      title: "Cuisine maison",
      text: "Préparation en cuisines atelier puis finitions spectaculaires au lieu.",
    },
    {
      icon: "✦",
      title: "Service professionnel",
      text: "Discrétion olympique et synchronisme millimétrique avec vos temps forts.",
    },
    {
      icon: "◇",
      title: "Installation complète",
      text: "Lumière tamisée, dressage sur mesure, matériels premium inclus.",
    },
    {
      icon: "⚑",
      title: "Adaptation alimentaire",
      text: "Allergènes, halal, végan, sans gluten ou menus juniors parfaitement calés avec le cadre général.",
      fullWidth: true,
    },
  ],
} as const;

export const pricingIntro = {
  kicker: "Tarifs",
  title: "Trois signatures tarifaires",
  sub: "Les devis s'affinissent selon convives, distance et niveau de service.",
} as const;

export const pricingPlans = [
  {
    title: "Formule Essentielle",
    description: "Entrées élégantes pour réceptions sérieuses sans démesure.",
    price: "À partir de 25€/personne",
    features: ["Buffet simple", "Livraison", "Mise en place"],
    cta: "Réserver",
    variant: "outline" as const,
    highlight: false,
  },
  {
    title: "Formule Signature",
    description: "L'ADN gastronomique de Signature Nomade, version complète.",
    price: "À partir de 49€/personne",
    features: ["Menu premium", "Service inclus", "Animation culinaire"],
    cta: "Réserver",
    variant: "solid" as const,
    highlight: true,
    badge: "Recommandé",
  },
  {
    title: "Formule Prestige",
    description: "Carte blanche, chef privatif, démesure élégante.",
    price: "Sur devis",
    features: ["Expérience sur mesure", "Chef privé", "Événement haut de gamme"],
    cta: "Réserver",
    variant: "outline" as const,
    highlight: false,
  },
] as const;

export const galleryIntro = {
  kicker: "Galerie",
  title: "Dressages & atmosphères",
  sub: "Quelques instants où la mise en scène défend le plat autant que le goût.",
} as const;

export const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    alt: "Dressage gastronomique",
    tag: "Dressage",
    caption: "Dressage gastronomique",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    alt: "Événement",
    tag: "Événement",
    caption: "Service en salle événementiel",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",
    alt: "",
    tag: "Ambiance",
    caption: "Bol gastronomique",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    alt: "",
    tag: "Dressage",
    caption: "Table mariage chic",
  },
  {
    src: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=900&q=85",
    alt: "",
    tag: "Événement",
    caption: "Réunion & cafés précis",
  },
  {
    src: "https://images.unsplash.com/photo-1559329007-e0d6ccee6d7b?auto=format&fit=crop&w=900&q=85",
    alt: "",
    tag: "Ambiance",
    caption: "Buffets scéniques",
  },
  {
    src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=85",
    alt: "",
    tag: "Dressage",
    caption: "Réceptions lumineuses",
  },
  {
    src: "https://images.unsplash.com/photo-1550985616-873b6d7c4c7c?auto=format&fit=crop&w=900&q=85",
    alt: "",
    tag: "Événement",
    caption: "Desserts architecturaux",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    alt: "",
    tag: "Ambiance",
    caption: "Ambiances restaurateurs",
  },
] as const;

export const testimonialsIntro = {
  kicker: "Références",
  title: "Moments gravés dans les mémoires",
  sub:
    "Entreprises, familles, agences événementielles : une ligne directrice — le calme d'un gastronomique.",
} as const;

export const testimonials = [
  {
    quote:
      "« Soirée SaaS impeccable : timings millimétrés et dressage précis sous les projecteurs VC. »",
    name: "Sophie Marin",
    role: "Entreprise",
    place: "Paris",
  },
  {
    quote: "« Mariage Loire : tableau végétarien sublime, enfants dorlotés jusqu'aux douceurs. »",
    name: "Claire & Julien Dumas",
    role: "Mariage",
    place: "Château",
  },
  {
    quote: "« 60 ans orchestrés comme un gala — ris de veau encore commenté plusieurs jours. »",
    name: "Élodie Petit",
    role: "Anniversaire",
    place: "Lyon",
  },
  {
    quote: "« Chef à Bordeaux pour 16 : précision de grand restaurant livrée salon. »",
    name: "Alexandre Vogt",
    role: "Événement privé",
    place: "Maison contemporaine",
  },
  {
    quote:
      "« Agences fashion exigeantes : logistique claire et assiettes photogéniques à chaque service. »",
    name: "Inès Haroun",
    role: "Agence premium",
    place: "",
  },
] as const;

export const processIntro = {
  kicker: "Process",
  title: "Quatre jalons, zéro stress",
  sub: "De la première prise de contact aux derniers textiles pliés : équipe synchrone.",
} as const;

export const processSteps = [
  {
    num: "01",
    title: "Prise de contact",
    text: "Vos envies se traduisent en brief précis lors d'un rendez-vous dédié.",
  },
  {
    num: "02",
    title: "Création du menu",
    text: "Propositions évolutives avec dégustation possible lorsque vos enjeux l'exigent.",
  },
  {
    num: "03",
    title: "Organisation",
    text: "Planning de montage communiqué ; coordination fluide avec vos prestataires existants.",
  },
  {
    num: "04",
    title: "Jour J",
    text: "Arrivées calibrées, service silencieux, rangement impeccable : nous disparaissons sans laisser de trace hors compliments.",
  },
] as const;

export const contactIntro = {
  kicker: "Contact",
  title: "Concrétisons vos envies",
  sub: "Réponse circonstanciée sous 24 h ouvrées.",
} as const;

export const contactForm = {
  notice:
    "Ouverture de votre messagerie pour expédier le message compilé ; nous continuons ensuite en direct.",
  submit: "Demander mon devis gratuit",
  foot: "En validant vous acceptez d'être recontacté ; aucune donnée n'est stockée automatiquement côté site.",
  mailto: "contact@signature-nomade.fr",
} as const;

export const contactAside = {
  kicker: "Coordonnées",
  phoneLabel: "Téléphone",
  phone: "+33 6 12 34 56 78",
  phoneHref: "tel:+33612345678",
  emailLabel: "E-mail",
  email: "contact@signature-nomade.fr",
  emailHref: "mailto:contact@signature-nomade.fr",
  interventionLabel: "Intervention",
  interventionText: "France entière ; logistique sur devis suivant vos lieux.",
  mapHint:
    "Mentionnez précisément villes / codes postaux pour affiner vos deplacements montage / démontage.",
  mapIframeTitle: "Carte intervention France — Signature Nomade",
  mapIframeSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27835758.693781495!2d2.2137491!3d46.603354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54acf33e9288cfa%3A0x1cdd69969cdeb9cd!2sFrance!5e0!3m2!1sfr!2sfr",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=France",
  mapsLinkLabel: "Ouvrir Maps",
  ctaFin:
    "Démonstrations gustatives possibles après cadrage complet du dossier événement.",
  ctaFinLink: "Relire les formules",
} as const;

export const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", symbol: "◎" },
  { href: "https://facebook.com", label: "Facebook", symbol: "f" },
  { href: "https://linkedin.com", label: "LinkedIn", symbol: "in" },
] as const;

export const footer = {
  brand: "Signature Nomade",
  tagline: "Rendre chaque lieu exceptionnel : gastronomie itinérante et service apaisé.",
  kicker: "L'expérience gastronomique nomade",
  linksTitle: "Liens",
  links: [
    { href: "#prestations", label: "Prestations" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "#contact", label: "Devis" },
  ],
  legalTitle: "Informations légales",
  legal: [
    { href: "#mentions-legales", label: "Mentions légales" },
    { href: "#privacy", label: "Confidentialité" },
    { href: "#cgv", label: "CGV" },
  ],
  copyright: "© 2026 Signature Nomade — Tous droits réservés.",
} as const;

export const fab = {
  whatsappHref: "https://wa.me/33612345678",
  whatsappLabel: "WhatsApp Signature Nomade",
} as const;
