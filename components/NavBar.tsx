import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { name: "Work", id: "work" },
    { name: "Benifits", id: "benifits" },
    { name: "Process", id: "process" },
    { name: "Pricing", id: "pricing" },
  ];

  return (
    <div className=" backdrop-blur-md z-50 flexcenter gap-4 fixed w-full top-0 ">
      {links.map((e) => (
        <Link key={e.id} href={e.id} className=" py-8 max-md:px-4 px-6">
          {e.name}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
