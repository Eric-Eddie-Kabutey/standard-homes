import React from 'react';
import FaqAccordion from './FaqAccordion';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  faqs: FaqItem[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ title, faqs }) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#1A3850] mb-12">
          {title}
        </h2>
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
};

export default FaqSection;