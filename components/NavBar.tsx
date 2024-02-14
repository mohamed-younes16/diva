import Link from "next/link";

const NavBar = () => {
  const links = [
    { name: "Work", id: "work" },
    { name: "Benifits", id: "benifits" },
    { name: "testimonials", id: "testimonials" },
    { name: "Pricing", id: "pricing" },
  ];

  return (
    <div className=" backdrop-blur-md bg-neutral-800/30  border-b-[1px] border-neutral-500/60 z-50 flexcenter gap-4 max-md:gap-2  fixed w-full top-0 ">
      {links.map((e) => (
        <Link
          key={e.id}
          href={"#" + e.id}
          className="md:text-lg transition group relative overflow-hidden hover:text-red-600 py-8 max-md:px-4 max-sm:px-2 px-6"
        >
          {e.name}
          <div className="absolute h-[2px] bg-red-500 transition-all w-full bottom-4  -left-[120%] group-hover:left-0" />
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
