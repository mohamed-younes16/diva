import Landing from "@/components/Landing";
import Perks from "@/components/Perks";

export const metadata = {
  title: "E-commerce Store",
  description: "Storeapp",
};
export default async function Home() {

  return (
    <div className="min-h-screen">
      <Landing />
      <Perks />
      
    </div>
  );
}
