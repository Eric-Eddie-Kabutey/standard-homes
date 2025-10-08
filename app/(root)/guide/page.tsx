import GuideTabs from "@/components/guide/GuideTabs";

export default function GuidePage() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Standard Homes Guides
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Whether you are buying, selling, or renting, our expert guides are here to help you navigate every step of your real estate journey.
          </p>
        </div>

        <div className="mt-16 md:mt-32">
          <GuideTabs />
        </div>
      </div>
    </main>
  );
}