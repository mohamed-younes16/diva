import Faq from "@/components/Faq";
import Landing from "@/components/Landing";
import Perks from "@/components/Perks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default async function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Landing />
      <Perks />
      <Testimonials />
      <Pricing />
      <Faq />
    </div>
  );
}
