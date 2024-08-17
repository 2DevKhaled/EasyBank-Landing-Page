
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Footer() {
  const [navigator, setNavigator] = useState([
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Mission", href: "" },
    { title: "Blog", href: "" },
    { title: "FAQ", href: "" },
  ]);
  const [socialIcons, setSocialIcons] = useState([
    { key: 1, icon: "facebook" },
    { key: 2, icon: "twitter" },
    { key: 3, icon: "instagram" },
  ]);
  return (
    <footer className="bg-[#262626]">
      <div className="container pt-[150px] pb-[30px]">
        <div className="flex justify-around pt-[30px]">
          <div>
            <img src="/src/assets/icons/logo.svg" />
          </div>
          <div>
            <ul className="flex gap-[20px] flex-col">
              {navigator.map((item) => (
                <li
                  key={item.title}
                  className="text-base text-white font-light "
                >
                  <a
                    className="hover:text-[#46c47d] transition-all duration-200"
                    href={item.href}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex justify-center md:w-auto gap-[15px] text-text100">
              {socialIcons.map((item) => (
                <li key={item.key}>
                  <a
                    href=""
                    className="text-white hover:text-[#46c47d]transition-colors duration-200 text-base "
                  >
                    <div className="text-3xl element-center  border-none rounded-full">
                      {item.icon === "facebook" ? (
                        <FaFacebook />
                      ) : item.icon === "twitter" ? (
                        <FaTwitter />
                      ) : (
                        <FaInstagram />
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex justify-between rounded-md border border-black  w-[320px] h-[60px]">
            <p className="text-white p-4">Enter your email</p>
            <div>
              <button className="bg-[#2E8B57] rounded-md w-[140px] h-full">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
