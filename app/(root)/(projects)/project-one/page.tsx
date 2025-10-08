import AmenitiesSection from "@/components/projects/Amenities";
import ContactSection from "@/components/projects/contact";
import FaqSection from "@/components/projects/Faq";

import GallerySection from "@/components/projects/gallery";
import HeroSection from "@/components/projects/Hero";
import DevelopmentHighlightSection from "@/components/projects/highlights";
import PaymentTermsSection from "@/components/projects/payment-terms";
import PropertyTypesSection from "@/components/projects/payment-types";
import ProjectResourcesSection from "@/components/projects/project-resources";
import {
  Building2, ShieldCheck, Camera, Dumbbell, Waves, Castle, PanelTopClose,
  ParkingCircle, ClipboardList, Store, UtensilsCrossed, PlusSquare, BedDouble, Bath, Building, Tags,
  Newspaper,
  Download,
  PlaySquare,
  Play
} from 'lucide-react';


const diplomatProjectData = {
  eyebrowText: "A NEVER BEFORE COMBINATION OF",
  title: "LIVE, WORK, RELAX",
  description: (
    <>
      <p>
        <strong>The Diplomat</strong>, proudly developed by Swami India International Limited in collaboration with ACE Communications Executive offers you a brand new way of life, where you can live, work and relax within a typical and well-planned development that is designed for professionals and business. Offering spectacular views across the regions business hub which is set within a central location in the Fajara area and considered as a new commercial hub & Business Centre of The Gambia offering tremendous infrastructure, modern facilities and easy accessibility.
      </p>
      <p>
        <strong>The Diplomat</strong> consists of two towers with 7 & 10 floors of state-of-the-art commercial space and residential apartments. There is a broad and different choice of abundantly-finished One, Two, Three & Four Bedroom apartments and Penthouses at exceptional prices. Car parking spaces are available.
      </p>
    </>
  ),
  buttonText: "Learn More",
  buttonLink: "/properties/the-diplomat-listings",
  imageUrl: "/project/project-highlights.png",
  imageAlt: "The Diplomat, a modern commercial and residential building in Fajara",
};


// Define the data for the amenities section
const iconClass = "w-10 h-10 text-amber-900";
const diplomatAmenities = [
  { label: "Magnificent Entrance Lobby", icon: <Building2 className={iconClass} /> },
  { label: "24 x 7 Security", icon: <ShieldCheck className={iconClass} /> },
  { label: "CCTV Camera", icon: <Camera className={iconClass} /> },
  { label: "Gymnasium", icon: <Dumbbell className={iconClass} /> },
  { label: "Swimming Pool", icon: <Waves className={iconClass} /> },
  { label: "Kids Play Area", icon: <Castle className={iconClass} /> },
  { label: "Elevators", icon: <PanelTopClose className={iconClass} /> },
  { label: "Underground Parking", icon: <ParkingCircle className={iconClass} /> },
  { label: "Property Management", icon: <ClipboardList className={iconClass} /> },
  { label: "Retail Stores", icon: <Store className={iconClass} /> },
  { label: "Restaurants", icon: <UtensilsCrossed className={iconClass} /> },
  { label: "Pharmacy", icon: <PlusSquare className={iconClass} /> },
];

const diplomatCarouselImages = [
  "/project/img-1.png", 
  "/project/img-2.png",
  "/project/img-3.png",
  "/project/img-4.png",
];

const propertyTypesData = [
  {
    title: "One Bedroom Executive", subtitle: "Apartment", imageUrl: "/project/img-1.png",
    details: [
      { icon: <BedDouble className={iconClass} />, label: "Bedrooms", value: "1" },
      { icon: <Bath className={iconClass} />, label: "Toilet", value: "1" },
      { icon: <Building className={iconClass} />, label: "Built Area", value: "63-67sqm" },
      { icon: <Tags className={iconClass} />, label: "Prices", value: "start from US$78,500" },
    ],
  },
  {
    title: "One Bedroom Premium", subtitle: "Apartment", imageUrl: "/project/img-2.png",
    details: [
      { icon: <BedDouble className={iconClass} />, label: "Bedrooms", value: "1" },
      { icon: <Bath className={iconClass} />, label: "Toilet", value: "1" },
      { icon: <Building className={iconClass} />, label: "Built Area", value: "81-82sqm" },
      { icon: <Tags className={iconClass} />, label: "Prices", value: "US$98,700 - US$115,000" },
    ],
  },
  {
    title: "Two Bedroom", subtitle: "Apartment", imageUrl: "/project/img-3.png",
    details: [
      { icon: <BedDouble className={iconClass} />, label: "Bedrooms", value: "2" },
      { icon: <Bath className={iconClass} />, label: "Toilet", value: "2" },
      { icon: <Building className={iconClass} />, label: "Built Area", value: "117sqm" },
      { icon: <Tags className={iconClass} />, label: "Prices", value: "start from US$140,500" },
    ],
  },
    {
    title: "Three Bedroom", subtitle: "Apartment", imageUrl: "/project/img-4.png",
    details: [
      { icon: <BedDouble className={iconClass} />, label: "Bedrooms", value: "3" },
      { icon: <Bath className={iconClass} />, label: "Toilet", value: "3" },
      { icon: <Building className={iconClass} />, label: "Built Area", value: "164sqm" },
      { icon: <Tags className={iconClass} />, label: "Prices", value: "start from US$214,500" },
    ],
  },
    {
    title: "Three Bedroom Penthouse", subtitle: "Type A", imageUrl: "/project/img-1.png",
    details: [
      { icon: <BedDouble className={iconClass} />, label: "Bedrooms", value: "3" },
      { icon: <Bath className={iconClass} />, label: "Toilet", value: "3" },
      { icon: <Building className={iconClass} />, label: "Built Area", value: "186sqm" },
      { icon: <Tags className={iconClass} />, label: "Prices", value: "Upon Request" },
    ],
  },
    {
    title: "Three Bedroom Penthouse", subtitle: "Type B", imageUrl: "/project/img-3.png",
    details: [
      { icon: <BedDouble className={iconClass} />, label: "Bedrooms", value: "3" },
      { icon: <Bath className={iconClass} />, label: "Toilet", value: "4" },
      { icon: <Building className={iconClass} />, label: "Built Area", value: "235sqm" },
      { icon: <Tags className={iconClass} />, label: "Prices", value: "Upon Request" },
    ],
  },
    {
    title: "Four Bedroom", subtitle: "Penthouse", imageUrl: "/project/img-4.png",
    details: [
      { icon: <BedDouble className={iconClass} />, label: "Bedrooms", value: "4" },
      { icon: <Bath className={iconClass} />, label: "Toilet", value: "3" },
      { icon: <Building className={iconClass} />, label: "Built Area", value: "284sqm" },
      { icon: <Tags className={iconClass} />, label: "Prices", value: "Upon Request" },
    ],
  },
];

const paymentTermsData = [
    {
        title: "Standard Payment Plan",
        terms: [
            "US $1,000 Booking Fee [Non-Refundable]",
            "20% [Less Booking Fee] within 7 days from Booking Date",
            "80% within 36 monthly or quarterly installments commencing 1st January 2023"
        ]
    },
    {
        title: "Down Payment Plan",
        subtitle: "- 5% OFF",
        terms: [
            "US $1,000 Booking Fee [Non-Refundable]",
            "50% [Less Booking Fee] within 7 days from Booking Date",
            "50% within 36 monthly or quarterly installments commencing 1st January 2023"
        ]
    },
    {
        title: "Outright Cash Payment Plan",
        subtitle: "- 10% OFF",
        terms: [
            "US $1,000 Booking Fee [Non-Refundable]",
            "100% [Less Booking Fee] within 7 days from Booking Date"
        ]
    }
];

const buttonIconClass = "w-5 h-5";
const projectResourcesData = {
  logoUrl: "/S GAMBIA.png",
  logoAlt: "The Diplomat Project Logo",
  title: "Project Resources",
  resources: [
    {
      mainIcon: <Newspaper className={iconClass} />,
      buttonIcon: <Download className={buttonIconClass} />,
      label: "Brochure",
      link: "/downloads/diplomat-brochure.pdf", 
    },
    {
      mainIcon: <ClipboardList className={iconClass} />,
      buttonIcon: <Download className={buttonIconClass} />,
      label: "Price List",
      link: "/downloads/diplomat-pricelist.pdf", 
    },
    {
      mainIcon: <PlaySquare className={iconClass} />,
      buttonIcon: <Play className={buttonIconClass} />,
      label: "Watch video",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],
};


// carousel gallery data
const galleryImages = [
  "/project/gallery-1.png",
  "/project/gallery-2.png",
  "/project/gallery-3.webp",
  "/project/gallery-4.webp",
  "/project/gallery-5.webp",
  "/project/gallery-6.png",
  "/project/gallery-7.png",
  "/project/gallery-8.png",
];

// --- DATA FOR THE FAQ SECTION ---
const faqsData = [
  {
    question: "Where is The Diplomat located?",
    answer: "The Diplomat is located at the Kanifing Institutional Area, Near Independence Stadium. Its righty opposite Social Security building and in close proximity to Fajara & Kairaba Avenue."
  },
  {
    question: "How many types of apartments are there in The Diplomat?",
    answer: "The Diplomat offers a variety of apartment types including One, Two, Three, and Four Bedroom apartments, as well as exclusive Penthouses."
  },
  {
    question: "What are the apartment sizes of The Diplomat?",
    answer: "Apartment sizes range from 63sqm for a One Bedroom Executive to 284sqm for a Four Bedroom Penthouse, with many options in between."
  },
  {
    question: "How many apartments are there in The Diplomat?",
    answer: "The development consists of numerous state-of-the-art residential apartments spread across two towers, offering a wide selection for potential buyers."
  },
  {
    question: "How many towers are there in the Diplomat?",
    answer: "The Diplomat consists of two towers, one with 7 floors and the other with 10 floors, combining both commercial and residential spaces."
  },
  {
    question: "What is the completion date of the Diplomat?",
    answer: "For the most up-to-date information on the completion and handover dates, please contact our sales team or download the project brochure."
  },
  {
    question: "What is the lease type for The Diplomat?",
    answer: "The properties at The Diplomat are offered on a long-term leasehold basis. For specific details on the lease terms, please refer to the sales agreement."
  },
];

// --- DATA FOR THE CONTACT SECTION ---
const contactData = {
  sectionTitle: "CONTACT US",
  headline: "Schedule a visit",
  description: "For more information about our properties including all of the latest availabilities, please complete the following form; visit our office or contact us via the details below to schedule a meeting or a tour of our show homes & apartments. We look forward to meeting you and showing you what makes us different.",
  contactImage: "/project/img-1.png", 
  companyName: "Swami India International Limited",
  phoneNumbers: ["+220 2082828", "+220 7990 998"], 
  email: "sales@swamiindiainternational.com",
  socialLinks: {
    facebook: "https://facebook.com/swamiindia",
    twitter: "https://twitter.com/swamiindia",
    instagram: "https://instagram.com/swamiindia",
    linkedin: "https://linkedin.com/company/swamiindia",
    youtube: "https://youtube.com/swamiindia", 
  },
};



export default function ProjectOnePage() {
    return (<>
        {/* Hero */}
        <HeroSection />
        
        {/* Project highlights section */}
        <DevelopmentHighlightSection {...diplomatProjectData} />

        {/* Image carousel and Amenities Section */}
      <AmenitiesSection
        title="Amenities"
        amenities={diplomatAmenities}
        images={diplomatCarouselImages}
        />
        
        
      {/* Project type and section */}
        <PropertyTypesSection title="Property Types" types={propertyTypesData} />
        {/* Project term and condition section */}
        <PaymentTermsSection title="PAYMENT TERMS" plans={paymentTermsData} />
        
        {/* Project Resource section */}
        <ProjectResourcesSection {...projectResourcesData} />
        
        {/* Carousel Gallery section */}
        <GallerySection title="Gallery" images={galleryImages} />
        
        {/* Faq section */}
        <FaqSection title="FREQUENTLY ASKED QUESTIONS" faqs={faqsData} />

        {/* Contact section */}
        <ContactSection {...contactData} />
        
    </>)
}