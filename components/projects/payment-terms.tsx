import React from 'react';

interface PaymentPlan {
  title: string;
  subtitle?: string;
  terms: string[];
}

interface PaymentTermsSectionProps {
  title: string;
  plans: PaymentPlan[];
}

const PaymentTermsSection: React.FC<PaymentTermsSectionProps> = ({ title, plans }) => {
  return (
    <section className="bg-stone-50 pb-16 sm:pb-24">
      <div className="max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A3850] sm:text-5xl mb-8">
          {title}
        </h2>
        <div className="space-y-8">
          {plans.map((plan, index) => (
            <div key={index}>
              <h3 className="font-medium text-lg text-gray-800">
                {plan.title}
                {plan.subtitle && <span className="ml-2 font-semibold text-green-700">{plan.subtitle}</span>}
              </h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                {plan.terms.map((term, termIndex) => (
                  <li key={termIndex} className="flex">
                    <span className="text-yellow-500 font-bold mr-3">»</span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="mt-12 border-gray-300" />
      </div>
    </section>
  );
};

export default PaymentTermsSection;