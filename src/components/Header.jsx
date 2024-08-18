import { useState } from "react";
import ButtonCTA from "./ButtonCTA";
import logo from '/src/assets/icons/logo.svg';
export default function Header() {
  const [navigator, setNavigator] = useState([
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Mission", href: "#mission" },
    { title: "Blog", href: "#blog" },
    { title: "FAQ", href: "#faq" },
  ]);
  return (
    <header  className="pt-[20px] top-0 z-50 left-0 scroll-smooth">
      <div className="container mx-auto flex justify-between items-center gap-[30px] px-[90px]">
      <a href="" >
        <img className="w-[250px] " src={logo} />
      </a>
      <nav className="flex items-center gap-[80px]">
        <ul className="flex gap-[20px]">
          {navigator.map((item) => (
            <li key={item.title} className="text-lg text-white font-medium">
              <a className="hover:text-[#46c47d] transition-all duration-200" href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      <ButtonCTA>Request Inivte</ButtonCTA>
      </nav>
      </div>
    </header>

  );
}
