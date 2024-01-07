import Landing from "@/components/Landing";
import Perks from "@/components/Perks";

export const metadata = {
  title: "DIVA design",
  description: "Diva design",
};
export default async function Home() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Landing />
      <Perks />
      
    </div>
  );
}
