import HeroSection from "../components/sections/HeroSection";
import Footer from "@/components/sections/Footer";
import PromptSection from "@/components/sections/PromptSection";
import { AudioPlayerProvider } from "@/components/AudioPlayerProvider";

export default function Home() {
  return (
    <div>
      <div className="px-8">
        <AudioPlayerProvider>
          <HeroSection />
          <PromptSection />
        </AudioPlayerProvider>
      </div>
      <Footer />
    </div>
  );
}
