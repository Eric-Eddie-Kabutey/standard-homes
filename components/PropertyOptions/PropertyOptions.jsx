'use client';

export default function PropertyOptions() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#A7795D] p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full"> {/* Increased max-w */}
        <OptionCard title="Do you own a property?" buttonText="List Property" buttonColor="blue" />
        <OptionCard title="Do you need an Apartment?" buttonText="Book a Stay" buttonColor="green" />
      </div>
    </div>
  );
}

function OptionCard({ title, buttonText, buttonColor }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center"> {/* Increased padding */}
      <h2 className="text-xl font-semibold mb-4">{title}</h2> {/* Increased font size */}
      <button className={`bg-${buttonColor}-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-${buttonColor}-700 transition`}> {/* Increased button size */}
        {buttonText}
      </button>
    </div>
  );
}