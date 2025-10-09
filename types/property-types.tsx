// Define a new interface for a gallery category
export interface GalleryCategory {
  name: string;      // e.g., "Exterior", "Living Room"
  images: string[];  // An array of image URLs for this category
}

export interface Property {
  _id: string; // Unique identifier from the database (e.g., MongoDB ObjectID)
  title: string; // A descriptive title for the listing, e.g., "Luxury 4-Bedroom Villa with Pool"
  slug: string; // A URL-friendly version of the title, e.g., "luxury-4-bedroom-villa-with-pool" (for SEO)
  
  status: 'Available' | 'Sold' | 'Rented' | 'Pending'; // The current status of the listing
  listingType: 'For Sale' | 'For Rent'; // The primary purpose of the listing

  propertyType: 'Residential' | 'Commercial' | 'Land'; // High-level category
  buildingType: string; // Your specific types: 'Villa', 'Apartment', 'Townhouse', 'Office', 'Warehouse', etc.

  location: {
    country: string;
    state: string; // Or province/region
    city: string;
    streetAddress: string;
    postalCode?: string; // Optional
    // For map integration
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };

  price: {
    amount: number;
    currency: 'GMD' | 'USD' | 'EUR' | 'XOF'; // Gambian Dalasi, etc.
    tenure?: 'per month' | 'per year'; // Crucial for rentals, null for sales
  };

  details: {
    bedrooms?: number; // Optional for non-residential
    bathrooms?: number; // Optional
    totalRooms?: number; // Can be total number of rooms
    
    // Size of the property
    area: {
      value: number; // e.g., 250
      unit: 'sqm' | 'sqft' | 'acre'; // square meters, square feet, acres
    };

    yearConstructed?: number; // The year the property was built
    garageSpaces?: number; // Number of garage spots
  };

  description: string[] | string; // Full, detailed description (can support Markdown or HTML)
  summary: string; // A short, one or two-sentence summary for preview cards.

  features: string[]; // An array of features: ['Air Conditioning', 'Swimming Pool', 'Balcony', 'Gated Community']

  media: {
    coverImage: string; // URL to the main image
    gallery:  GalleryCategory[]; // gallery categorized  by property area
    virtualTourUrl?: string; // Optional URL for a 3D tour
    floorPlanUrl?: string; // Optional URL for a floor plan image
  };

  agent: {
    agentId: string; // A reference to a document in an 'agents' or 'users' collection
    name: string; // Denormalized name for quick display
    phone: string;
    email: string;
  };
  
  createdAt: Date; // Timestamp when the listing was created
  updatedAt: Date; // Timestamp for the last update
}