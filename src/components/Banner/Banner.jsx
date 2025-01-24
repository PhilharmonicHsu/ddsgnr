import facebook from "../../assets/icons/Facebook.png"
import twitter from "../../assets/icons/Twitter.png"
import linkedin from "../../assets/icons/Linkedin.png"
import instagram from "../../assets/icons/Instagram.png"
import {useEffect, useState} from "react";

export default function Banner() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (windowWidth < 1024) {
    return <></>
  }

  return <section id="banner" className="h-[54px] px-16 py-0 contant-center flex items-center">
    <div className="flex h-[30px] justify-between w-full">
      <div className="flex h-full">
        <div className="flex items-center py-0 px-4 border-l-0 border-black"><strong>For emergency cases: 567 123 45 67</strong></div>
        <div className="flex items-center py-0 px-4 border-l border-black ">Location: 121 Wallstreet Street, NY , USA</div>
        <div className="flex items-center py-0 px-4 border-l border-black ">Open hours: 9.00-24.00 Mon-Sat</div>
        <div className="flex items-center py-0 px-4 border-l border-black ">Email:info@ddsgnr.com</div>
      </div>
      <div className="flex gap-[0.5rem] items-center">
        <img className="hover:cursor-pointer" src={facebook} alt="Facebook Logo" width={24} height={24}/>
        <img className="hover:cursor-pointer" src={instagram} alt="Instagram Logo" width={24} height={24}/>
        <img className="hover:cursor-pointer" src={linkedin} alt="Linked In Logo" width={24} height={24}/>
        <img className="hover:cursor-pointer" src={twitter} alt="Twitter Logo" width={24} height={24}/>
      </div>
    </div>
  </section>
}