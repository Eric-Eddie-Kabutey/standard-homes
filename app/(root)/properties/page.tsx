import PropertyListings from '@/components/properties/PropertyListings';
import { sampleProperties } from '@/data/property-data';

export default function PropertiesPage() {
  // In a real app, you would fetch this data from your database or CMS
  const properties = sampleProperties;

  return (
    <main>
      <PropertyListings properties={properties} />
    </main>
  );
}