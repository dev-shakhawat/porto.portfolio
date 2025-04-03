import React, { useEffect, useState } from "react";
import List from "./common/List";

// icons
import { TbShoppingBag } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        
        console.log(isScrolled);
      } else {
        setIsScrolled(false);
        console.log(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const navlist = [
    { list: "Home" },
    { list: "elements" },
    { list: "features" },
    { list: "pages" },
    { list: "portfolio" },
    { list: "blog" },
    { list: "shop" },
  ];

  const navright = [{ list: <IoSearchOutline /> }, { list: <TbShoppingBag /> }];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 border-b-1 border-primary/20 duration-[.4s] ${isScrolled ? "bg-white py-2  " : "bg-transparent py-7  "}    `}>
      <div className="container">
        <div className="flex items-center justify-between    ">
          <img src="/images/logo.png" alt="logo" className="w-[80px]"/>
          <div className="flex">
            <List
              listarr={navlist}
              liststyle="text-primary font-opensans uppercase font-bold text-[13px] leding-[24px] duration-[.4s] tracking-[-.5px] hover:text-brand  "
              boxstyle={"flex space-x-6 pr-4 border-r-2 border-secondary/10   "}
              link={"#"}
            />
            <List
              listarr={navright}
              liststyle="text-primary font-opensans uppercase  text-[20px] hover:text-brand  "
              boxstyle={"flex space-x-6 ml-4   "}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;