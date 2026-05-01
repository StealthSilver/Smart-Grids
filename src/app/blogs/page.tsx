import Navbar from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
export default function Blogs() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          <h1 className="font-ibm-plex-sans text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-4 sm:mb-6 md:mb-8 tracking-tight">
            Blogs
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-3xl">
            Discover our latest articles and insights on renewable energy, smart grid solutions, and energy management systems.
          </p>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
