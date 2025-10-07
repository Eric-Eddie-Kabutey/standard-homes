import { Property } from "@/types/property-types";


export const sampleProperties: Property[] = [  
  {
    _id: "prop001",
    title: "Luxury 5-Bedroom Villa in Fajara",
    slug: "luxury-5-bedroom-villa-fajara",
    status: 'Available',
    listingType: 'For Sale',
    propertyType: 'Residential',
    buildingType: 'Villa',
    location: {
      country: "The Gambia",
      state: "Kanifing Municipal Area",
      city: "Fajara",
      streetAddress: "15 Atlantic Boulevard",
    },
    price: { amount: 450000, currency: 'USD' },
    details: {
      bedrooms: 5, bathrooms: 6, area: { value: 600, unit: 'sqm' }, yearConstructed: 2022, garageSpaces: 3
    },
    description: "An exquisite, brand-new villa offering unparalleled luxury and breathtaking ocean views. Features include an infinity pool, a home cinema, and state-of-the-art security systems.",
    summary: "Exquisite 5-bed villa with infinity pool and stunning ocean views in the prestigious Fajara area.",
    features: ["Swimming Pool", "Ocean View", "Air Conditioning", "Gated Community", "Home Cinema"],
    media: {
      coverImage: "/property/20.jpeg",
      gallery: [ "/property/20.jpeg", "/property/31.jpeg"]
    },
    agent: { agentId: "agent_101", name: "Lamin Touray", phone: "+220 123 4567", email: "lamin.t@example.com" },
    createdAt: new Date("2023-10-15T09:00:00Z"),
    updatedAt: new Date("2023-11-10T14:30:00Z"),
  },
  {
    _id: "prop002",
    title: "Modern 2-Bedroom Apartment for Rent",
    slug: "modern-2-bedroom-apartment-kololi",
    status: 'Rented',
    listingType: 'For Rent',
    propertyType: 'Residential',
    buildingType: 'Apartment',
    location: {
      country: "The Gambia",
      state: "West Coast Region",
      city: "Kololi",
      streetAddress: "Senegambia Highway, Unit 8B",
    },
    price: { amount: 45000, currency: 'GMD', tenure: 'per month' },
    details: {
      bedrooms: 2, bathrooms: 2, area: { value: 120, unit: 'sqm' }, yearConstructed: 2020,
    },
    description: "A fully furnished 2-bedroom apartment located in the heart of Kololi, just minutes away from the beach, restaurants, and nightlife. The complex offers 24/7 security and a communal pool.",
    summary: "Fully furnished 2-bed apartment in a prime Kololi location with a communal pool and security.",
    features: ["Furnished", "Communal Pool", "24/7 Security", "Air Conditioning", "Balcony"],
    media: {
      coverImage: "/property/35.jpeg",
      gallery: ["/property/35.jpeg"]
    },
    agent: { agentId: "agent_102", name: "Isatou Ceesay", phone: "+220 234 5678", email: "isatou.c@example.com" },
    createdAt: new Date("2023-09-01T11:00:00Z"),
    updatedAt: new Date("2023-11-05T10:00:00Z"),
  },  
  {
    _id: "prop003",
    title: "Chic 3-Bedroom Apartment in Almadies, Dakar",
    slug: "chic-3-bedroom-apartment-almadies-dakar",
    status: 'Available',
    listingType: 'For Sale',
    propertyType: 'Residential',
    buildingType: 'Apartment',
    location: {
      country: "Senegal",
      state: "Dakar Region",
      city: "Dakar",
      streetAddress: "Route des Almadies",
    },
    price: { amount: 320000, currency: 'EUR' },
    details: {
      bedrooms: 3, bathrooms: 3, area: { value: 180, unit: 'sqm' }, yearConstructed: 2021, garageSpaces: 1
    },
    description: "A stunning, modern apartment in the highly sought-after Almadies district of Dakar. Features an open-plan living space, a designer kitchen, and a spacious balcony with sea views. The building has a rooftop pool and 24/7 security.",
    summary: "Stunning 3-bed apartment with sea views and rooftop pool in Dakar's prestigious Almadies district.",
    features: ["Ocean View", "Rooftop Pool", "Modern Kitchen", "24/7 Security", "Underground Parking"],
    media: {
      coverImage: "/property/39.jpeg",
      gallery: [ "/property/39.jpeg", "/property/40.jpeg"]
    },
    agent: { agentId: "agent_201", name: "Mamadou Diallo", phone: "+221 77 123 45 67", email: "mamadou.d@example.com" },
    createdAt: new Date("2023-11-01T16:00:00Z"),
    updatedAt: new Date("2023-11-01T16:00:00Z"),
  },
  // --- Gambian Property ---
  {
    _id: "prop004",
    title: "Residential Land Plot in Brusubi",
    slug: "residential-land-plot-brusubi",
    status: 'Available',
    listingType: 'For Sale',
    propertyType: 'Land',
    buildingType: 'Land Plot',
    location: {
      country: "The Gambia",
      state: "West Coast Region",
      city: "Brusubi",
      streetAddress: "Phase 2, Block C",
    },
    price: { amount: 50000, currency: 'USD' },
    details: {
      area: { value: 625, unit: 'sqm' },
    },
    description: "A fantastic opportunity to build your dream home in the rapidly developing area of Brusubi Phase 2. The plot is cleared, fenced, and has easy access to the main highway.",
    summary: "25m x 25m fenced plot of land in the popular residential area of Brusubi Phase 2.",
    features: ["Fenced", "Road Access", "Ready for Development", "Clear Title"],
    media: {
      coverImage: "/property/46.jpeg",
      gallery: ["/property/49.jpeg"]
    },
    agent: { agentId: "agent_102", name: "Isatou Ceesay", phone: "+220 234 5678", email: "isatou.c@example.com" },
    createdAt: new Date("2023-08-20T10:00:00Z"),
    updatedAt: new Date("2023-10-25T18:00:00Z"),
  },
  // --- Gambian Property ---
  {
    _id: "prop005",
    title: "Charming 3-Bedroom Family Home",
    slug: "charming-3-bedroom-family-home-brufut",
    status: 'Sold',
    listingType: 'For Sale',
    propertyType: 'Residential',
    buildingType: 'Single Family House',
    location: {
      country: "The Gambia",
      state: "West Coast Region",
      city: "Brufut",
      streetAddress: "Taf Housing Estate",
    },
    price: { amount: 180000, currency: 'USD' },
    details: {
      bedrooms: 3, bathrooms: 3, area: { value: 250, unit: 'sqm' }, yearConstructed: 2019, garageSpaces: 1,
    },
    description: "A beautiful and well-maintained family home in the secure and sought-after Taf Housing Estate. Features a mature garden, a modern kitchen, and spacious living areas.",
    summary: "Well-maintained 3-bed home in the secure Taf Housing Estate with a beautiful garden.",
    features: ["Gated Community", "Garden", "Modern Kitchen", "Borehole"],
    media: {
      coverImage: "/property/49.jpeg",
      gallery: []
    },
    agent: { agentId: "agent_103", name: "Musa Barrow", phone: "+220 345 6789", email: "musa.b@example.com" },
    createdAt: new Date("2023-07-11T12:00:00Z"),
    updatedAt: new Date("2023-10-15T12:00:00Z"),
  },
  // --- Senegalese Property (Replaces prop006) ---
  {
    _id: "prop006",
    title: "Holiday Villa with Private Pool in Saly",
    slug: "holiday-villa-private-pool-saly",
    status: 'Available',
    listingType: 'For Rent',
    propertyType: 'Residential',
    buildingType: 'Villa',
    location: {
      country: "Senegal",
      state: "Thiès Region",
      city: "Saly Portudal",
      streetAddress: "Saly Niakhniakhal",
    },
    price: { amount: 1500000, currency: 'XOF', tenure: 'per month' },
    details: {
      bedrooms: 4, bathrooms: 4, area: { value: 350, unit: 'sqm' }, yearConstructed: 2018,
    },
    description: "A magnificent holiday villa located in the heart of the Saly beach resort. Fully furnished and equipped, featuring a large private swimming pool, lush gardens, and daily housekeeping services. Perfect for family vacations or group getaways.",
    summary: "Superb 4-bed holiday villa with a private pool in the Saly beach resort area.",
    features: ["Private Pool", "Furnished", "Close to Beach", "Garden", "Housekeeping", "Wi-Fi Included"],
    media: {
      coverImage: "/property/47.jpeg",
      gallery: [ "/property/38.jpeg", "/property/47.jpeg"]
    },
    agent: { agentId: "agent_202", name: "Aissatou Fall", phone: "+221 78 987 65 43", email: "aissatou.f@example.com" },
    createdAt: new Date("2023-11-12T09:00:00Z"),
    updatedAt: new Date("2023-11-12T09:00:00Z"),
  },
  // --- Gambian Property ---
  {
    _id: "prop007",
    title: "Large Warehouse for Rent in Kanifing",
    slug: "large-warehouse-kanifing",
    status: 'Available',
    listingType: 'For Rent',
    propertyType: 'Commercial',
    buildingType: 'Warehouse',
    location: {
      country: "The Gambia",
      state: "Kanifing Municipal Area",
      city: "Kanifing",
      streetAddress: "Industrial Estate",
    },
    price: { amount: 150000, currency: 'GMD', tenure: 'per month' },
    details: {
      area: { value: 1000, unit: 'sqm' },
    },
    description: "Expansive warehouse facility located in the Kanifing Industrial Estate. Features high ceilings, a large loading bay, office space, and excellent road access for heavy vehicles.",
    summary: "1000 sqm warehouse with high ceilings and a loading bay in Kanifing Industrial Estate.",
    features: ["High Ceilings", "Loading Bay", "Secure Compound", "Office Space"],
    media: {
      coverImage: "/property/40.jpeg",
      gallery: []
    },
    agent: { agentId: "agent_101", name: "Lamin Touray", phone: "+220 123 4567", email: "lamin.t@example.com" },
    createdAt: new Date("2023-10-28T15:00:00Z"),
    updatedAt: new Date("2023-10-28T15:00:00Z"),
  },
  // --- Senegalese Property (Replaces prop008) ---
  {
    _id: "prop008",
    title: "Modern Office Suite in Dakar Plateau",
    slug: "modern-office-suite-dakar-plateau",
    status: 'Available',
    listingType: 'For Rent',
    propertyType: 'Commercial',
    buildingType: 'Office Space',
    location: {
      country: "Senegal",
      state: "Dakar Region",
      city: "Dakar",
      streetAddress: "Avenue Léopold Sédar Senghor",
    },
    price: { amount: 2500000, currency: 'XOF', tenure: 'per month' },
    details: {
      bathrooms: 2,
      area: { value: 200, unit: 'sqm' },
    },
    description: "A premium office suite in the central business district of Dakar Plateau. The space includes a reception, several private offices, a conference room, and a kitchenette. Ideal for international companies and NGOs.",
    summary: "Premium 200 sqm office suite in Dakar's central business district (Plateau).",
    features: ["Prime Business District", "Fiber Optic Internet", "Reception Area", "Conference Room", "Parking"],
    media: {
      coverImage: "/property/55.jpeg",
      gallery: []
    },
    agent: { agentId: "agent_201", name: "Mamadou Diallo", phone: "+221 77 123 45 67", email: "mamadou.d@example.com" },
    createdAt: new Date("2023-11-18T11:00:00Z"),
    updatedAt: new Date("2023-11-18T11:00:00Z"),
  },  
  {
    _id: "prop009",
    title: "Sea View Townhouse in Bijilo",
    slug: "sea-view-townhouse-bijilo",
    status: 'Pending',
    listingType: 'For Sale',
    propertyType: 'Residential',
    buildingType: 'Townhouse',
    location: {
      country: "The Gambia",
      state: "West Coast Region",
      city: "Bijilo",
      streetAddress: "Bijilo Annex",
    },
    price: { amount: 235000, currency: 'USD' },
    details: {
      bedrooms: 3, bathrooms: 4, area: { value: 220, unit: 'sqm' }, yearConstructed: 2023,
    },
    description: "A newly constructed townhouse in a small, exclusive development in Bijilo. Offers 3 floors of modern living space, a rooftop terrace with stunning sea views, and access to a shared pool.",
    summary: "Brand new 3-bed townhouse with rooftop terrace and sea views in an exclusive Bijilo development.",
    features: ["Ocean View", "Rooftop Terrace", "Communal Pool", "Newly Built"],
    media: {
      coverImage: "/property/56.jpeg",
      gallery: ["/property/20.jpeg"]
    },
    agent: { agentId: "agent_102", name: "Isatou Ceesay", phone: "+220 234 5678", email: "isatou.c@example.com" },
    createdAt: new Date("2023-10-05T13:00:00Z"),
    updatedAt: new Date("2023-11-19T10:00:00Z"),
  },
  {
    _id: "prop010",
    title: "2-Acre Agricultural Land in Brikama",
    slug: "2-acre-agricultural-land-brikama",
    status: 'Available',
    listingType: 'For Sale',
    propertyType: 'Land',
    buildingType: 'Agricultural Land',
    location: {
      country: "The Gambia",
      state: "West Coast Region",
      city: "Brikama",
      streetAddress: "Sotokoi Area",
    },
    price: { amount: 75000, currency: 'USD' },
    details: {
      area: { value: 2, unit: 'acre' },
    },
    description: "A large 2-acre plot of fertile land located near Brikama. Perfect for farming, horticulture, or a long-term investment. The land has good road access and is close to a water source.",
    summary: "2 acres of fertile agricultural land near Brikama, ideal for farming or investment.",
    features: ["Fertile Soil", "Water Access", "Road Access", "Investment Potential"],
    media: {
      coverImage: "/property/59.jpeg",
      gallery: []
    },
    agent: { agentId: "agent_101", name: "Lamin Touray", phone: "+220 123 4567", email: "lamin.t@example.com" },
    createdAt: new Date("2023-09-15T10:00:00Z"),
    updatedAt: new Date("2023-09-15T10:00:00Z"),
  }
];[] = [    
    {
        _id: "prop001",
        title: "Luxury 5-Bedroom Villa in Fajara",
        slug: "luxury-5-bedroom-villa-fajara",
        status: 'Available',
        listingType: 'For Sale',
        propertyType: 'Residential',
        buildingType: 'Villa',
        location: {
            country: "The Gambia",
            state: "Kanifing Municipal Area",
            city: "Fajara",
            streetAddress: "15 Atlantic Boulevard",
        },
        price: { amount: 450000, currency: 'USD' },
        details: {
            bedrooms: 5, bathrooms: 6, area: { value: 600, unit: 'sqm' }, yearConstructed: 2022, garageSpaces: 3
        },
        description: "An exquisite, brand-new villa offering unparalleled luxury and breathtaking ocean views. Features include an infinity pool, a home cinema, and state-of-the-art security systems.",
        summary: "Exquisite 5-bed villa with infinity pool and stunning ocean views in the prestigious Fajara area.",
        features: [ "Swimming Pool", "Ocean View", "Air Conditioning", "Gated Community", "Home Cinema" ],
        media: {
          coverImage: "/property/20.jpeg",
          gallery: [ "/property/20.jpeg", "/property/20.jpeg" ]
        },
        agent: { agentId: "agent_101", name: "Lamin Touray", phone: "+220 123 4567", email: "lamin.t@example.com" },
        createdAt: new Date("2023-10-15T09:00:00Z"),
        updatedAt: new Date("2023-11-10T14:30:00Z"),
    },
    {
        _id: "prop002",
        title: "Modern 2-Bedroom Apartment for Rent",
        slug: "modern-2-bedroom-apartment-kololi",
        status: 'Rented',
        listingType: 'For Rent',
        propertyType: 'Residential',
        buildingType: 'Apartment',
        location: {
            country: "The Gambia",
            state: "West Coast Region",
            city: "Kololi",
            streetAddress: "Senegambia Highway, Unit 8B",
        },
        price: { amount: 45000, currency: 'GMD', tenure: 'per month' },
        details: {
            bedrooms: 2, bathrooms: 2, area: { value: 120, unit: 'sqm' }, yearConstructed: 2020,
        },
        description: "A fully furnished 2-bedroom apartment located in the heart of Kololi, just minutes away from the beach, restaurants, and nightlife. The complex offers 24/7 security and a communal pool.",
        summary: "Fully furnished 2-bed apartment in a prime Kololi location with a communal pool and security.",
        features: [ "Furnished", "Communal Pool", "24/7 Security", "Air Conditioning", "Balcony" ],
        media: {
          coverImage: "/property/20.jpeg",
          gallery: [ "/property/20.jpeg" ]
        },
        agent: { agentId: "agent_102", name: "Isatou Ceesay", phone: "+220 234 5678", email: "isatou.c@example.com" },
        createdAt: new Date("2023-09-01T11:00:00Z"),
        updatedAt: new Date("2023-11-05T10:00:00Z"),
    },    
    {
        _id: "prop003",
        title: "Chic 3-Bedroom Apartment in Almadies, Dakar",
        slug: "chic-3-bedroom-apartment-almadies-dakar",
        status: 'Available',
        listingType: 'For Sale',
        propertyType: 'Residential',
        buildingType: 'Apartment',
        location: {
            country: "Senegal",
            state: "Dakar Region",
            city: "Dakar",
            streetAddress: "Route des Almadies",
        },
        price: { amount: 320000, currency: 'EUR' },
        details: {
            bedrooms: 3, bathrooms: 3, area: { value: 180, unit: 'sqm' }, yearConstructed: 2021, garageSpaces: 1
        },
        description: "A stunning, modern apartment in the highly sought-after Almadies district of Dakar. Features an open-plan living space, a designer kitchen, and a spacious balcony with sea views. The building has a rooftop pool and 24/7 security.",
        summary: "Stunning 3-bed apartment with sea views and rooftop pool in Dakar's prestigious Almadies district.",
        features: [ "Ocean View", "Rooftop Pool", "Modern Kitchen", "24/7 Security", "Underground Parking" ],
        media: {
            coverImage: "https://placehold.co/1200x800/e74c3c/ffffff?text=Dakar+Apartment",
            gallery: [ "https://placehold.co/800x600/cccccc/000000?text=View", "https://placehold.co/800x600/cccccc/000000?text=Interior" ]
        },
        agent: { agentId: "agent_201", name: "Mamadou Diallo", phone: "+221 77 123 45 67", email: "mamadou.d@example.com" },
        createdAt: new Date("2023-11-01T16:00:00Z"),
        updatedAt: new Date("2023-11-01T16:00:00Z"),
    },
    // --- Gambian Property ---
    {
        _id: "prop004",
        title: "Residential Land Plot in Brusubi",
        slug: "residential-land-plot-brusubi",
        status: 'Available',
        listingType: 'For Sale',
        propertyType: 'Land',
        buildingType: 'Land Plot',
        location: {
            country: "The Gambia",
            state: "West Coast Region",
            city: "Brusubi",
            streetAddress: "Phase 2, Block C",
        },
        price: { amount: 50000, currency: 'USD' },
        details: {
            area: { value: 625, unit: 'sqm' },
        },
        description: "A fantastic opportunity to build your dream home in the rapidly developing area of Brusubi Phase 2. The plot is cleared, fenced, and has easy access to the main highway.",
        summary: "25m x 25m fenced plot of land in the popular residential area of Brusubi Phase 2.",
        features: [ "Fenced", "Road Access", "Ready for Development", "Clear Title" ],
        media: {
          coverImage: "/property/20.jpeg",
          gallery: [ "/property/20.jpeg" ]
        },
        agent: { agentId: "agent_102", name: "Isatou Ceesay", phone: "+220 234 5678", email: "isatou.c@example.com" },
        createdAt: new Date("2023-08-20T10:00:00Z"),
        updatedAt: new Date("2023-10-25T18:00:00Z"),
    },
    // --- Gambian Property ---
    {
        _id: "prop005",
        title: "Charming 3-Bedroom Family Home",
        slug: "charming-3-bedroom-family-home-brufut",
        status: 'Sold',
        listingType: 'For Sale',
        propertyType: 'Residential',
        buildingType: 'Single Family House',
        location: {
            country: "The Gambia",
            state: "West Coast Region",
            city: "Brufut",
            streetAddress: "Taf Housing Estate",
        },
        price: { amount: 180000, currency: 'USD' },
        details: {
            bedrooms: 3, bathrooms: 3, area: { value: 250, unit: 'sqm' }, yearConstructed: 2019, garageSpaces: 1,
        },
        description: "A beautiful and well-maintained family home in the secure and sought-after Taf Housing Estate. Features a mature garden, a modern kitchen, and spacious living areas.",
        summary: "Well-maintained 3-bed home in the secure Taf Housing Estate with a beautiful garden.",
        features: [ "Gated Community", "Garden", "Modern Kitchen", "Borehole" ],
        media: {
          coverImage: "/property/20.jpeg",
            gallery: []
        },
        agent: { agentId: "agent_103", name: "Musa Barrow", phone: "+220 345 6789", email: "musa.b@example.com" },
        createdAt: new Date("2023-07-11T12:00:00Z"),
        updatedAt: new Date("2023-10-15T12:00:00Z"),
    },
    // --- Senegalese Property (Replaces prop006) ---
    {
        _id: "prop006",
        title: "Holiday Villa with Private Pool in Saly",
        slug: "holiday-villa-private-pool-saly",
        status: 'Available',
        listingType: 'For Rent',
        propertyType: 'Residential',
        buildingType: 'Villa',
        location: {
            country: "Senegal",
            state: "Thiès Region",
            city: "Saly Portudal",
            streetAddress: "Saly Niakhniakhal",
        },
        price: { amount: 1500000, currency: 'XOF', tenure: 'per month' },
        details: {
            bedrooms: 4, bathrooms: 4, area: { value: 350, unit: 'sqm' }, yearConstructed: 2018,
        },
        description: "A magnificent holiday villa located in the heart of the Saly beach resort. Fully furnished and equipped, featuring a large private swimming pool, lush gardens, and daily housekeeping services. Perfect for family vacations or group getaways.",
        summary: "Superb 4-bed holiday villa with a private pool in the Saly beach resort area.",
        features: [ "Private Pool", "Furnished", "Close to Beach", "Garden", "Housekeeping", "Wi-Fi Included" ],
        media: {
          coverImage: "ht/property/25.jpeg",
          gallery: [ "/property/45.jpeg", "/property/30.jpeg" ]
        },
        agent: { agentId: "agent_202", name: "Aissatou Fall", phone: "+221 78 987 65 43", email: "aissatou.f@example.com" },
        createdAt: new Date("2023-11-12T09:00:00Z"),
        updatedAt: new Date("2023-11-12T09:00:00Z"),
    },
    // --- Gambian Property ---
    {
        _id: "prop007",
        title: "Large Warehouse for Rent in Kanifing",
        slug: "large-warehouse-kanifing",
        status: 'Available',
        listingType: 'For Rent',
        propertyType: 'Commercial',
        buildingType: 'Warehouse',
        location: {
            country: "The Gambia",
            state: "Kanifing Municipal Area",
            city: "Kanifing",
            streetAddress: "Industrial Estate",
        },
        price: { amount: 150000, currency: 'GMD', tenure: 'per month' },
        details: {
            area: { value: 1000, unit: 'sqm' },
        },
        description: "Expansive warehouse facility located in the Kanifing Industrial Estate. Features high ceilings, a large loading bay, office space, and excellent road access for heavy vehicles.",
        summary: "1000 sqm warehouse with high ceilings and a loading bay in Kanifing Industrial Estate.",
        features: [ "High Ceilings", "Loading Bay", "Secure Compound", "Office Space" ],
        media: {
          coverImage: "/property/29.jpeg",
            gallery: []
        },
        agent: { agentId: "agent_101", name: "Lamin Touray", phone: "+220 123 4567", email: "lamin.t@example.com" },
        createdAt: new Date("2023-10-28T15:00:00Z"),
        updatedAt: new Date("2023-10-28T15:00:00Z"),
    },
    // --- Senegalese Property (Replaces prop008) ---
    {
        _id: "prop008",
        title: "Modern Office Suite in Dakar Plateau",
        slug: "modern-office-suite-dakar-plateau",
        status: 'Available',
        listingType: 'For Rent',
        propertyType: 'Commercial',
        buildingType: 'Office Space',
        location: {
            country: "Senegal",
            state: "Dakar Region",
            city: "Dakar",
            streetAddress: "Avenue Léopold Sédar Senghor",
        },
        price: { amount: 2500000, currency: 'XOF', tenure: 'per month' },
        details: {
            bathrooms: 2,
            area: { value: 200, unit: 'sqm' },
        },
        description: "A premium office suite in the central business district of Dakar Plateau. The space includes a reception, several private offices, a conference room, and a kitchenette. Ideal for international companies and NGOs.",
        summary: "Premium 200 sqm office suite in Dakar's central business district (Plateau).",
        features: [ "Prime Business District", "Fiber Optic Internet", "Reception Area", "Conference Room", "Parking" ],
        media: {
          coverImage: "/property/40.jpeg",
            gallery: []
        },
        agent: { agentId: "agent_201", name: "Mamadou Diallo", phone: "+221 77 123 45 67", email: "mamadou.d@example.com" },
        createdAt: new Date("2023-11-18T11:00:00Z"),
        updatedAt: new Date("2023-11-18T11:00:00Z"),
    },    
    {
        _id: "prop009",
        title: "Sea View Townhouse in Bijilo",
        slug: "sea-view-townhouse-bijilo",
        status: 'Pending',
        listingType: 'For Sale',
        propertyType: 'Residential',
        buildingType: 'Townhouse',
        location: {
            country: "The Gambia",
            state: "West Coast Region",
            city: "Bijilo",
            streetAddress: "Bijilo Annex",
        },
        price: { amount: 235000, currency: 'USD' },
        details: {
            bedrooms: 3, bathrooms: 4, area: { value: 220, unit: 'sqm' }, yearConstructed: 2023,
        },
        description: "A newly constructed townhouse in a small, exclusive development in Bijilo. Offers 3 floors of modern living space, a rooftop terrace with stunning sea views, and access to a shared pool.",
        summary: "Brand new 3-bed townhouse with rooftop terrace and sea views in an exclusive Bijilo development.",
        features: [ "Ocean View", "Rooftop Terrace", "Communal Pool", "Newly Built" ],
        media: {
          coverImage: "/property/40.jpeg",
          gallery: [ "/property/45.jpeg" ]
        },
        agent: { agentId: "agent_102", name: "Isatou Ceesay", phone: "+220 234 5678", email: "isatou.c@example.com" },
        createdAt: new Date("2023-10-05T13:00:00Z"),
        updatedAt: new Date("2023-11-19T10:00:00Z"),
    },
    {
        _id: "prop010",
        title: "2-Acre Agricultural Land in Brikama",
        slug: "2-acre-agricultural-land-brikama",
        status: 'Available',
        listingType: 'For Sale',
        propertyType: 'Land',
        buildingType: 'Agricultural Land',
        location: {
            country: "The Gambia",
            state: "West Coast Region",
            city: "Brikama",
            streetAddress: "Sotokoi Area",
        },
        price: { amount: 75000, currency: 'USD' },
        details: {
            area: { value: 2, unit: 'acre' },
        },
        description: "A large 2-acre plot of fertile land located near Brikama. Perfect for farming, horticulture, or a long-term investment. The land has good road access and is close to a water source.",
        summary: "2 acres of fertile agricultural land near Brikama, ideal for farming or investment.",
        features: [ "Fertile Soil", "Water Access", "Road Access", "Investment Potential" ],
        media: {
          coverImage: "/property/50.jpeg",
            gallery: []
        },
        agent: { agentId: "agent_101", name: "Lamin Touray", phone: "+220 123 4567", email: "lamin.t@example.com" },
        createdAt: new Date("2023-09-15T10:00:00Z"),
        updatedAt: new Date("2023-09-15T10:00:00Z"),
    }
];