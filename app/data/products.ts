import { Language } from '../translations';

export interface Product {
  id: string;
  categoryId: string;
  image: string;
  gallery: string[];
  videoUrl?: string;
  versions: string[];
  translations: {
    [key in Language]: {
      name: string;
      shortDesc: string;
      description: string;
      howToUse: string;
      techSheet: { label: string; value: string }[];
    }
  }
}

export const products: Product[] = [
  // CERAS E POLIDORES
  {
    id: "polidor-automotivo-premium",
    categoryId: "ceras-e-polidores",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb214aW1qNW11a3B2a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4/3o7TKsQ8gE8z52sU0w/giphy.gif"
    ],
    versions: ["500ml"],
    translations: {
      pt: {
        name: "Polidor Automotivo Premium",
        shortDesc: "Corte e brilho intenso com tecnologia avançada SiO2.",
        description: "Polidor automotivo de alta performance que combina corte e brilho intenso em uma única etapa. Formulado com tecnologia avançada SiO2, remove riscos e proporciona proteção prolongada para a pintura do seu veículo.",
        howToUse: "1. Agite bem antes de usar.\n2. Aplique algumas gotas do produto na boina de polimento.\n3. Trabalhe em áreas pequenas (50x50cm) com pressão moderada.\n4. Remova o excesso com uma flanela de microfibra limpa e seca.",
        techSheet: [
          { label: "Tecnologia", value: "Avançada SiO2" },
          { label: "Benefícios", value: "Corte, Brilho Intenso, Remove Riscos" },
          { label: "Proteção", value: "Prolongada" }
        ]
      },
      en: {
        name: "Premium Automotive Polisher",
        shortDesc: "Intense cut and shine with advanced SiO2 technology.",
        description: "High-performance automotive polisher that combines cut and intense shine in a single step. Formulated with advanced SiO2 technology, it removes scratches and provides prolonged protection for your vehicle's paint.",
        howToUse: "1. Shake well before use.\n2. Apply a few drops of the product to the polishing pad.\n3. Work in small areas (50x50cm) with moderate pressure.\n4. Remove the excess with a clean, dry microfiber towel.",
        techSheet: [
          { label: "Technology", value: "Advanced SiO2" },
          { label: "Benefits", value: "Cut, Intense Shine, Scratch Removal" },
          { label: "Protection", value: "Prolonged" }
        ]
      },
      es: {
        name: "Pulidor Automotriz Premium",
        shortDesc: "Corte y brillo intenso con tecnología avanzada SiO2.",
        description: "Pulidor automotriz de alto rendimiento que combina corte y brillo intenso en un solo paso. Formulado con tecnología avanzada SiO2, elimina arañazos y proporciona una protección prolongada para la pintura de su vehículo.",
        howToUse: "1. Agite bien antes de usar.\n2. Aplique unas gotas del producto en la boina de pulido.\n3. Trabaje en áreas pequeñas (50x50cm) con presión moderada.\n4. Retire el exceso con una toalla de microfibra limpia y seca.",
        techSheet: [
          { label: "Tecnología", value: "Avanzada SiO2" },
          { label: "Beneficios", value: "Corte, Brillo Intenso, Elimina Arañazos" },
          { label: "Protección", value: "Prolongada" }
        ]
      }
    }
  },
  {
    id: "cera-cristalizadora-pro",
    categoryId: "ceras-e-polidores",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb214aW1qNW11a3B2a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4/3o7TKsQ8gE8z52sU0w/giphy.gif"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    versions: ["300g", "500g", "1kg"],
    translations: {
      pt: {
        name: "Cera Cristalizadora PRO",
        shortDesc: "Brilho intenso e proteção de até 6 meses.",
        description: "A Cera Cristalizadora PRO foi desenvolvida com polímeros sintéticos de alta resistência que proporcionam um brilho espelhado e proteção duradoura contra raios UV, chuva ácida e contaminações.",
        howToUse: "1. Lave e seque bem o veículo.\n2. Com o auxílio de um aplicador de espuma, aplique uma fina camada do produto em movimentos circulares.\n3. Aguarde de 3 a 5 minutos.\n4. Remova o excesso com uma flanela de microfibra limpa e seca, lustrando até obter o brilho desejado.",
        techSheet: [
          { label: "Durabilidade", value: "Até 6 meses" },
          { label: "Rendimento", value: "Até 30 carros (300g)" },
          { label: "Tempo de cura", value: "4 horas" },
          { label: "Nível de brilho", value: "Máximo (Espelhado)" }
        ]
      },
      en: {
        name: "PRO Crystal Wax",
        shortDesc: "Intense shine and up to 6 months of protection.",
        description: "The PRO Crystal Wax was developed with high-resistance synthetic polymers that provide a mirror-like shine and lasting protection against UV rays, acid rain, and contamination.",
        howToUse: "1. Wash and dry the vehicle thoroughly.\n2. Using a foam applicator, apply a thin layer of the product in circular motions.\n3. Wait 3 to 5 minutes.\n4. Remove the excess with a clean, dry microfiber towel, buffing until the desired shine is achieved.",
        techSheet: [
          { label: "Durability", value: "Up to 6 months" },
          { label: "Yield", value: "Up to 30 cars (300g)" },
          { label: "Cure time", value: "4 hours" },
          { label: "Gloss level", value: "Maximum (Mirror)" }
        ]
      },
      es: {
        name: "Cera Cristalizadora PRO",
        shortDesc: "Brillo intenso y protección de hasta 6 meses.",
        description: "La Cera Cristalizadora PRO fue desarrollada con polímeros sintéticos de alta resistencia que proporcionan un brillo espejado y protección duradera contra los rayos UV, la lluvia ácida y la contaminación.",
        howToUse: "1. Lave y seque bien el vehículo.\n2. Con la ayuda de un aplicador de espuma, aplique una fina capa del producto con movimientos circulares.\n3. Espere de 3 a 5 minutos.\n4. Retire el exceso con una toalla de microfibra limpia y seca, puliendo hasta obtener el brillo deseado.",
        techSheet: [
          { label: "Durabilidad", value: "Hasta 6 meses" },
          { label: "Rendimiento", value: "Hasta 30 coches (300g)" },
          { label: "Tiempo de curado", value: "4 horas" },
          { label: "Nivel de brillo", value: "Máximo (Espejado)" }
        ]
      }
    }
  },
  {
    id: "composto-polidor-corte",
    categoryId: "ceras-e-polidores",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb214aW1qNW11a3B2a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4/3o7TKsQ8gE8z52sU0w/giphy.gif"
    ],
    versions: ["500ml", "1L"],
    translations: {
      pt: {
        name: "Composto Polidor de Corte",
        shortDesc: "Remoção rápida de marcas de lixa e arranhões.",
        description: "Composto de alta performance para a etapa de corte no polimento automotivo. Remove marcas de lixa 1200, arranhões profundos e oxidações severas rapidamente, gerando pouco pó.",
        howToUse: "1. Agite bem antes de usar.\n2. Aplique de 4 a 5 gotas na boina de corte.\n3. Trabalhe em áreas de 50x50cm com a politriz em velocidade média.\n4. Remova o resíduo com microfibra.",
        techSheet: [
          { label: "Poder de Corte", value: "Alto (Lixa 1200)" },
          { label: "Geração de Pó", value: "Baixa" },
          { label: "Uso", value: "Politriz Rotativa ou Roto-orbital" }
        ]
      },
      en: {
        name: "Heavy Cut Compound",
        shortDesc: "Fast removal of sanding marks and scratches.",
        description: "High-performance compound for the cutting stage in automotive polishing. Quickly removes 1200 grit sanding marks, deep scratches, and severe oxidation, generating little dust.",
        howToUse: "1. Shake well before use.\n2. Apply 4 to 5 drops to the cutting pad.\n3. Work in 50x50cm areas with the polisher at medium speed.\n4. Remove residue with microfiber.",
        techSheet: [
          { label: "Cutting Power", value: "High (1200 Grit)" },
          { label: "Dust Generation", value: "Low" },
          { label: "Usage", value: "Rotary or Dual Action Polisher" }
        ]
      },
      es: {
        name: "Compuesto Pulidor de Corte",
        shortDesc: "Eliminación rápida de marcas de lija y arañazos.",
        description: "Compuesto de alto rendimiento para la etapa de corte en el pulido automotriz. Elimina rápidamente marcas de lija 1200, arañazos profundos y oxidación severa, generando poco polvo.",
        howToUse: "1. Agite bien antes de usar.\n2. Aplique de 4 a 5 gotas en la boina de corte.\n3. Trabaje en áreas de 50x50cm con la pulidora a velocidad media.\n4. Retire el residuo con microfibra.",
        techSheet: [
          { label: "Poder de Corte", value: "Alto (Lija 1200)" },
          { label: "Generación de Polvo", value: "Baja" },
          { label: "Uso", value: "Pulidora Rotativa o Roto-orbital" }
        ]
      }
    }
  },
  {
    id: "selante-sintetico-v-seal",
    categoryId: "ceras-e-polidores",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb214aW1qNW11a3B2a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4/3o7TKsQ8gE8z52sU0w/giphy.gif"
    ],
    versions: ["500ml"],
    translations: {
      pt: {
        name: "Selante Sintético V-Seal",
        shortDesc: "Proteção extrema e hidrorrepelência.",
        description: "Selante à base de polímeros sintéticos que cria uma barreira invisível sobre a pintura. Oferece proteção contra raios UV e alta repelência à água e sujeira.",
        howToUse: "1. Com a pintura limpa e descontaminada, aplique o selante com um aplicador de espuma.\n2. Deixe curar por 15 minutos.\n3. Remova o excesso com uma microfibra limpa.",
        techSheet: [
          { label: "Durabilidade", value: "Até 12 meses" },
          { label: "Hidrorrepelência", value: "Extrema" },
          { label: "Tempo de cura", value: "15 minutos" }
        ]
      },
      en: {
        name: "V-Seal Synthetic Sealant",
        shortDesc: "Extreme protection and water repellency.",
        description: "Synthetic polymer-based sealant that creates an invisible barrier over the paint. Offers UV protection and high repellency to water and dirt.",
        howToUse: "1. With clean and decontaminated paint, apply the sealant with a foam applicator.\n2. Let it cure for 15 minutes.\n3. Remove excess with a clean microfiber.",
        techSheet: [
          { label: "Durability", value: "Up to 12 months" },
          { label: "Water Repellency", value: "Extreme" },
          { label: "Cure time", value: "15 minutes" }
        ]
      },
      es: {
        name: "Sellador Sintético V-Seal",
        shortDesc: "Protección extrema e hidrorrepelencia.",
        description: "Sellador a base de polímeros sintéticos que crea una barrera invisible sobre la pintura. Ofrece protección contra los rayos UV y alta repelencia al agua y la suciedad.",
        howToUse: "1. Con la pintura limpia y descontaminada, aplique el sellador con un aplicador de espuma.\n2. Deje curar por 15 minutos.\n3. Retire el exceso con una microfibra limpia.",
        techSheet: [
          { label: "Durabilidad", value: "Hasta 12 meses" },
          { label: "Hidrorrepelencia", value: "Extrema" },
          { label: "Tiempo de curado", value: "15 minutos" }
        ]
      }
    }
  },
  {
    id: "cera-carnauba-premium",
    categoryId: "ceras-e-polidores",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb214aW1qNW11a3B2a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4/3o7TKsQ8gE8z52sU0w/giphy.gif"
    ],
    versions: ["200g", "500g"],
    translations: {
      pt: {
        name: "Cera de Carnaúba Premium",
        shortDesc: "Brilho quente e profundo para cores escuras.",
        description: "Cera natural formulada com a mais pura carnaúba tipo 1. Ideal para cores escuras, proporcionando um brilho molhado, quente e profundo, além de mascarar pequenos riscos.",
        howToUse: "1. Aplique uma fina camada com aplicador de espuma.\n2. Aguarde de 3 a 5 minutos.\n3. Remova com microfibra lustrando a superfície.",
        techSheet: [
          { label: "Base", value: "Carnaúba T1" },
          { label: "Indicação", value: "Cores Escuras" },
          { label: "Durabilidade", value: "Até 3 meses" }
        ]
      },
      en: {
        name: "Premium Carnauba Wax",
        shortDesc: "Warm and deep shine for dark colors.",
        description: "Natural wax formulated with the purest type 1 carnauba. Ideal for dark colors, providing a wet, warm, and deep shine, as well as masking minor scratches.",
        howToUse: "1. Apply a thin layer with a foam applicator.\n2. Wait 3 to 5 minutes.\n3. Remove with microfiber, buffing the surface.",
        techSheet: [
          { label: "Base", value: "T1 Carnauba" },
          { label: "Indication", value: "Dark Colors" },
          { label: "Durability", value: "Up to 3 months" }
        ]
      },
      es: {
        name: "Cera de Carnaúba Premium",
        shortDesc: "Brillo cálido y profundo para colores oscuros.",
        description: "Cera natural formulada con la más pura carnaúba tipo 1. Ideal para colores oscuros, proporcionando un brillo mojado, cálido y profundo, además de enmascarar pequeños arañazos.",
        howToUse: "1. Aplique una fina capa con aplicador de espuma.\n2. Espere de 3 a 5 minutos.\n3. Retire con microfibra puliendo la superficie.",
        techSheet: [
          { label: "Base", value: "Carnaúba T1" },
          { label: "Indicación", value: "Colores Oscuros" },
          { label: "Durabilidad", value: "Hasta 3 meses" }
        ]
      }
    }
  },
  {
    id: "graphene-coating-pro",
    categoryId: "ceras-e-polidores",
    image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb214aW1qNW11a3B2a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4/3o7TKsQ8gE8z52sU0w/giphy.gif"
    ],
    versions: ["50ml"],
    translations: {
      pt: {
        name: "Graphene Coating PRO",
        shortDesc: "Proteção cerâmica com grafeno de até 5 anos.",
        description: "Revestimento cerâmico avançado infundido com óxido de grafeno. Reduz a temperatura da superfície, evita marcas d'água e oferece resistência extrema a produtos químicos e riscos leves.",
        howToUse: "1. Descontamine e faça o polimento da pintura.\n2. Limpe a superfície com IPA.\n3. Aplique o produto em áreas de 50x50cm usando o aplicador em suede.\n4. Remova o excesso após 1 a 3 minutos.",
        techSheet: [
          { label: "Durabilidade", value: "Até 5 anos" },
          { label: "Dureza", value: "10H" },
          { label: "Ângulo de gota", value: "115°" }
        ]
      },
      en: {
        name: "Graphene Coating PRO",
        shortDesc: "Graphene ceramic protection up to 5 years.",
        description: "Advanced ceramic coating infused with graphene oxide. Reduces surface temperature, prevents water spots, and offers extreme resistance to chemicals and light scratches.",
        howToUse: "1. Decontaminate and polish the paint.\n2. Wipe the surface with IPA.\n3. Apply the product in 50x50cm areas using the suede applicator.\n4. Remove excess after 1 to 3 minutes.",
        techSheet: [
          { label: "Durability", value: "Up to 5 years" },
          { label: "Hardness", value: "10H" },
          { label: "Contact angle", value: "115°" }
        ]
      },
      es: {
        name: "Graphene Coating PRO",
        shortDesc: "Protección cerámica con grafeno de hasta 5 años.",
        description: "Recubrimiento cerámico avanzado infundido con óxido de grafeno. Reduce la temperatura de la superficie, evita marcas de agua y ofrece resistencia extrema a productos químicos y arañazos leves.",
        howToUse: "1. Descontamine y pula la pintura.\n2. Limpie la superficie con IPA.\n3. Aplique el producto en áreas de 50x50cm usando el aplicador de gamuza.\n4. Retire el exceso después de 1 a 3 minutos.",
        techSheet: [
          { label: "Durabilidad", value: "Hasta 5 años" },
          { label: "Dureza", value: "10H" },
          { label: "Ángulo de gota", value: "115°" }
        ]
      }
    }
  },
  {
    id: "quick-detailer-brilho",
    categoryId: "ceras-e-polidores",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb214aW1qNW11a3B2a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4/3o7TKsQ8gE8z52sU0w/giphy.gif"
    ],
    versions: ["500ml", "5L"],
    translations: {
      pt: {
        name: "Quick Detailer Brilho Rápido",
        shortDesc: "Manutenção de brilho e limpeza a seco leve.",
        description: "Desenvolvido para remover poeira leve, marcas de dedos e restaurar o brilho da cera ou selante entre as lavagens. Deixa um toque extremamente liso.",
        howToUse: "1. Borrife o produto diretamente sobre a peça ou na microfibra.\n2. Espalhe suavemente.\n3. Vire a microfibra para o lado seco e dê o lustro final.",
        techSheet: [
          { label: "Uso", value: "Pintura, Vidros e Plásticos" },
          { label: "Proteção", value: "Até 2 semanas" },
          { label: "Toque", value: "Aveludado/Liso" }
        ]
      },
      en: {
        name: "Quick Detailer Fast Shine",
        shortDesc: "Shine maintenance and light dry cleaning.",
        description: "Developed to remove light dust, fingerprints, and restore the shine of wax or sealant between washes. Leaves an extremely smooth touch.",
        howToUse: "1. Spray the product directly onto the panel or microfiber.\n2. Spread gently.\n3. Flip the microfiber to the dry side and give the final buff.",
        techSheet: [
          { label: "Usage", value: "Paint, Glass, and Plastics" },
          { label: "Protection", value: "Up to 2 weeks" },
          { label: "Touch", value: "Velvety/Smooth" }
        ]
      },
      es: {
        name: "Quick Detailer Brillo Rápido",
        shortDesc: "Mantenimiento de brillo y limpieza en seco ligera.",
        description: "Desarrollado para eliminar polvo ligero, huellas dactilares y restaurar el brillo de la cera o sellador entre lavados. Deja un tacto extremadamente suave.",
        howToUse: "1. Rocíe el producto directamente sobre la pieza o en la microfibra.\n2. Extienda suavemente.\n3. Dé la vuelta a la microfibra hacia el lado seco y dé el pulido final.",
        techSheet: [
          { label: "Uso", value: "Pintura, Cristales y Plásticos" },
          { label: "Protección", value: "Hasta 2 semanas" },
          { label: "Tacto", value: "Aterciopelado/Suave" }
        ]
      }
    }
  },

  // LAVA AUTOS
  // LAVA AUTOS E PNEUS
  {
    id: "limpa-pneus-proauto",
    categoryId: "lava-autos",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb214aW1qNW11a3B2a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4/3o7TKsQ8gE8z52sU0w/giphy.gif"
    ],
    versions: ["500ml"],
    translations: {
      pt: {
        name: "Limpa Pneus PROAUTO",
        shortDesc: "Acabamento inovador com ultra brilho e longa duração.",
        description: "Limpa pneus com micropartículas que proporciona um acabamento inovador e ultra brilho. Cria uma película protetora de longa duração, mantendo os pneus com aspecto de novos por muito mais tempo.",
        howToUse: "1. Lave bem os pneus e aguarde secar.\n2. Aplique o produto em uma esponja limpa e seca.\n3. Espalhe uniformemente por toda a superfície do pneu.\n4. Aguarde secar para obter o brilho máximo.",
        techSheet: [
          { label: "Acabamento", value: "Ultra Brilho" },
          { label: "Tecnologia", value: "Micropartículas" },
          { label: "Proteção", value: "Película Protetora de Longa Duração" }
        ]
      },
      en: {
        name: "PROAUTO Tire Cleaner",
        shortDesc: "Innovative finish with ultra shine and long duration.",
        description: "Tire cleaner with microparticles that provides an innovative finish and ultra shine. Creates a long-lasting protective film, keeping tires looking new for much longer.",
        howToUse: "1. Wash the tires well and wait for them to dry.\n2. Apply the product to a clean, dry sponge.\n3. Spread evenly over the entire surface of the tire.\n4. Wait to dry for maximum shine.",
        techSheet: [
          { label: "Finish", value: "Ultra Shine" },
          { label: "Technology", value: "Microparticles" },
          { label: "Protection", value: "Long-lasting Protective Film" }
        ]
      },
      es: {
        name: "Limpia Neumáticos PROAUTO",
        shortDesc: "Acabado innovador con ultra brillo y larga duración.",
        description: "Limpia neumáticos con micropartículas que proporciona un acabado innovador y ultra brillo. Crea una película protectora de larga duración, manteniendo los neumáticos con aspecto de nuevos por mucho más tiempo.",
        howToUse: "1. Lave bien los neumáticos y espere a que se sequen.\n2. Aplique el producto en una esponja limpia y seca.\n3. Extienda uniformemente por toda la superficie del neumático.\n4. Espere a que se seque para obtener el máximo brillo.",
        techSheet: [
          { label: "Acabado", value: "Ultra Brillo" },
          { label: "Tecnología", value: "Micropartículas" },
          { label: "Protección", value: "Película Protectora de Larga Duración" }
        ]
      }
    }
  },
  {
    id: "limpa-pneus-auto-craft",
    categoryId: "lava-autos",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb214aW1qNW11a3B2a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4/3o7TKsQ8gE8z52sU0w/giphy.gif"
    ],
    versions: ["500ml"],
    translations: {
      pt: {
        name: "Limpa Pneus AUTO CRAFT",
        shortDesc: "Protege e dá brilho duradouro. Rende mais.",
        description: "Limpa pneus da Linha Detail da AUTO CRAFT (Since 1980). Formulado para proteger e dar um brilho duradouro aos pneus do seu veículo. Sua fórmula concentrada garante que o produto renda muito mais.",
        howToUse: "1. Certifique-se de que os pneus estejam limpos e secos.\n2. Aplique o produto com o auxílio de uma esponja aplicadora.\n3. Espalhe de forma homogênea por toda a lateral do pneu.\n4. Deixe secar naturalmente.",
        techSheet: [
          { label: "Linha", value: "Detail" },
          { label: "Benefícios", value: "Protege e dá brilho" },
          { label: "Rendimento", value: "Alto rendimento" },
          { label: "Durabilidade", value: "Brilho duradouro" }
        ]
      },
      en: {
        name: "AUTO CRAFT Tire Cleaner",
        shortDesc: "Protects and gives lasting shine. Yields more.",
        description: "Tire cleaner from the AUTO CRAFT Detail Line (Since 1980). Formulated to protect and give a lasting shine to your vehicle's tires. Its concentrated formula ensures the product yields much more.",
        howToUse: "1. Make sure the tires are clean and dry.\n2. Apply the product with the help of an applicator sponge.\n3. Spread evenly over the entire sidewall of the tire.\n4. Let it dry naturally.",
        techSheet: [
          { label: "Line", value: "Detail" },
          { label: "Benefits", value: "Protects and gives shine" },
          { label: "Yield", value: "High yield" },
          { label: "Durability", value: "Lasting shine" }
        ]
      },
      es: {
        name: "Limpia Neumáticos AUTO CRAFT",
        shortDesc: "Protege y da brillo duradero. Rinde más.",
        description: "Limpia neumáticos de la Línea Detail de AUTO CRAFT (Since 1980). Formulado para proteger y dar un brillo duradero a los neumáticos de su vehículo. Su fórmula concentrada asegura que el producto rinda mucho más.",
        howToUse: "1. Asegúrese de que los neumáticos estén limpios y secos.\n2. Aplique el producto con la ayuda de una esponja aplicadora.\n3. Extienda de manera homogénea por todo el lateral del neumático.\n4. Deje secar naturalmente.",
        techSheet: [
          { label: "Línea", value: "Detail" },
          { label: "Beneficios", value: "Protege y da brillo" },
          { label: "Rendimiento", value: "Alto rendimiento" },
          { label: "Durabilidad", value: "Brillo duradero" }
        ]
      }
    }
  },
  {
    id: "shampoo-snow-foam",
    categoryId: "lava-autos",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb214aW1qNW11a3B2a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4/3o7TKsQ8gE8z52sU0w/giphy.gif"
    ],
    versions: ["1L", "5L", "20L"],
    translations: {
      pt: {
        name: "Shampoo Snow Foam",
        shortDesc: "Espuma densa para pré-lavagem segura.",
        description: "Shampoo automotivo super concentrado com pH neutro, ideal para uso em canhões de espuma (Snow Foam). Cria uma espuma densa que adere à superfície, amolecendo a sujeira e evitando riscos durante a lavagem.",
        howToUse: "1. Dilua o produto no canhão de espuma (recomendado 1:10).\n2. Aplique sobre o veículo seco e à sombra.\n3. Deixe agir por 3 a 5 minutos.\n4. Enxágue com lavadora de alta pressão.",
        techSheet: [
          { label: "pH", value: "Neutro (7.0)" },
          { label: "Diluição Snow Foam", value: "1:10 a 1:20" },
          { label: "Diluição Balde", value: "1:400" },
          { label: "Seguro para ceras", value: "Sim" }
        ]
      },
      en: {
        name: "Snow Foam Shampoo",
        shortDesc: "Dense foam for safe pre-washing.",
        description: "Super concentrated pH-neutral automotive shampoo, ideal for use in foam cannons (Snow Foam). Creates a dense foam that adheres to the surface, softening dirt and preventing scratches during washing.",
        howToUse: "1. Dilute the product in the foam cannon (recommended 1:10).\n2. Apply to the dry vehicle in the shade.\n3. Let it sit for 3 to 5 minutes.\n4. Rinse with a pressure washer.",
        techSheet: [
          { label: "pH", value: "Neutral (7.0)" },
          { label: "Snow Foam Dilution", value: "1:10 to 1:20" },
          { label: "Bucket Dilution", value: "1:400" },
          { label: "Wax safe", value: "Yes" }
        ]
      },
      es: {
        name: "Champú Snow Foam",
        shortDesc: "Espuma densa para prelavado seguro.",
        description: "Champú automotriz súper concentrado con pH neutro, ideal para usar en cañones de espuma (Snow Foam). Crea una espuma densa que se adhiere a la superficie, ablandando la suciedad y evitando arañazos durante el lavado.",
        howToUse: "1. Diluya el producto en el cañón de espuma (recomendado 1:10).\n2. Aplique sobre el vehículo seco y a la sombra.\n3. Deje actuar de 3 a 5 minutos.\n4. Enjuague con hidrolavadora.",
        techSheet: [
          { label: "pH", value: "Neutro (7.0)" },
          { label: "Dilución Snow Foam", value: "1:10 a 1:20" },
          { label: "Dilución Cubo", value: "1:400" },
          { label: "Seguro para ceras", value: "Sí" }
        ]
      }
    }
  },

  // HIGIENE INTERNA
  {
    id: "limpador-apc-interior",
    categoryId: "higiene-interna",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb214aW1qNW11a3B2a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4a2k5ZzF6cWp4/3o7TKsQ8gE8z52sU0w/giphy.gif"
    ],
    versions: ["500ml", "1.5L", "5L"],
    translations: {
      pt: {
        name: "APC Limpador Multi-Ação",
        shortDesc: "Limpeza profunda para todas as superfícies internas.",
        description: "O APC (All Purpose Cleaner) é um limpador versátil e poderoso, seguro para uso em plásticos, vinil, tecidos, carpetes e couro. Remove manchas difíceis, gordura e sujeira encardida sem desbotar.",
        howToUse: "1. Dilua o produto conforme a sujidade (1:10 para pesada, 1:50 para leve).\n2. Borrife sobre a superfície ou em um pincel de detalhamento.\n3. Esfregue suavemente.\n4. Remova o excesso com uma microfibra úmida e seque com outra limpa.",
        techSheet: [
          { label: "Diluição Máxima", value: "1:100" },
          { label: "Aroma", value: "Cítrico Suave" },
          { label: "Superfícies", value: "Plástico, Couro, Tecido, Borracha" }
        ]
      },
      en: {
        name: "APC Multi-Action Cleaner",
        shortDesc: "Deep cleaning for all interior surfaces.",
        description: "The APC (All Purpose Cleaner) is a versatile and powerful cleaner, safe for use on plastics, vinyl, fabrics, carpets, and leather. Removes tough stains, grease, and ingrained dirt without fading.",
        howToUse: "1. Dilute the product according to the dirt level (1:10 for heavy, 1:50 for light).\n2. Spray onto the surface or a detailing brush.\n3. Scrub gently.\n4. Remove excess with a damp microfiber and dry with a clean one.",
        techSheet: [
          { label: "Max Dilution", value: "1:100" },
          { label: "Scent", value: "Mild Citrus" },
          { label: "Surfaces", value: "Plastic, Leather, Fabric, Rubber" }
        ]
      },
      es: {
        name: "APC Limpiador Multiacción",
        shortDesc: "Limpieza profunda para todas las superficies interiores.",
        description: "El APC (All Purpose Cleaner) es un limpiador versátil y potente, seguro para usar en plásticos, vinilo, telas, alfombras y cuero. Elimina manchas difíciles, grasa y suciedad incrustada sin decolorar.",
        howToUse: "1. Diluya el producto según la suciedad (1:10 para pesada, 1:50 para ligera).\n2. Rocíe sobre la superficie o en un cepillo de detallado.\n3. Frote suavemente.\n4. Retire el exceso con una microfibra húmeda y seque con otra limpia.",
        techSheet: [
          { label: "Dilución Máxima", value: "1:100" },
          { label: "Aroma", value: "Cítrico Suave" },
          { label: "Superficies", value: "Plástico, Cuero, Tela, Goma" }
        ]
      }
    }
  }
];
