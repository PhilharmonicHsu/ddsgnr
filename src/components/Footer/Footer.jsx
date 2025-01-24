// import "./Footer.css"
import ddsgnr from "../../assets/logos/ddsgnr.png"
import facebook from "../../assets/icons/Facebook.png"
import twitter from "../../assets/icons/Twitter.png"
import linkedin from "../../assets/icons/Linkedin.png"
import instagram from "../../assets/icons/Instagram.png"
import {useEffect, useState} from "react";

const ICONS = [
  {
    href: "https://www.facebook.com",
    src: facebook,
    alt: "Facebook icon",
    title: "Facebook"
  },
  {
    href: "https://www.instagram.com",
    src: instagram,
    alt: "Instagram icon",
    title: "Instagram"
  },
  {
    href: "https://www.twitter.com",
    src: twitter,
    alt: "Twitter icon",
    title: "Twitter"
  },
  {
    href: "https://www.LinkedIn.com",
    src: linkedin,
    alt: "LinkedIn icon",
    title: "LinkedIn"
  },
]

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);

  return <>
    {windowWidth >= 1024 &&
      <footer className="p-10 h-[400px]">
        <div className="flex flex-row py-0 px-[80px] gap-[80px] h-[300px] items-center">
          <div className="flex flex-col gap-[16px] max-w-[640px]">
            <img src={ddsgnr} alt="Astro Logo" width={120} height={40}/>
            <p className="my-4 text-sm">Join our newsletter to stay up to date on features and releases.</p>
            <div>
              <form className="flex gap-4 w-full" action="/subscribe">
                <input
                  className="p-[15px] border-1 border-solid border-black rounded-md w-full text-sm"
                  type="email"
                  name="email"
                  placeholder="enter your email address"
                  required
                />
                <button className="py-[8px] px-[16px] mt-0 border-1 border-solid border-gray-400 rounded-md text-sm hover:bg-gray-100 hover:cursor-pointer" type="submit">Subscribe</button>
              </form>
            </div>
            <div className="text-normal font-light">By subscribing you agree to with our Privacy Policy and provide consent to
              receive updates from our company.</div>

          </div>
          <div className="flex gap-[80px] items-start">
            <div className="flex flex-col gap-[18px]">
              <h3 className="font-bold text-l w-[80px]">About us</h3>
              <ul className="flex flex-col gap-[18px]">
                <li><a className="font-light" href="/">Home</a></li>
                <li><a className="font-light" href="/about-us">About</a></li>
                <li><a className="font-light" href="/services">Services</a></li>
                <li><a className="font-light" href="/team">Teams</a></li>
                <li><a className="font-light" href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-[18px]">
              <h3 className="font-bold text-l w-[80px]">Services</h3>
              <ul className="flex flex-col gap-[18px]">
                <li><a className="font-light" href="windows">Windows</a></li>
                <li><a className="font-light" href="residential">Residential</a></li>
                <li><a className="font-light" href="commercial">Commercial</a></li>
                <li><a className="font-light" href="apartment">Apartment</a></li>
                <li><a className="font-light" href="residential">Residential</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-[18px]">
              <h3 className="font-bold text-l w-[80px]">Follow Us</h3>
              <ul className="flex flex-col gap-[18px]">
                {ICONS.map((icon, index) => (
                  <li key={index}>
                    <a
                      className="font-light flex gap-1 text-black"
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={icon.src} alt={icon.alt} width={24} height={24}/>
                      {icon.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-black my-6 z-100"></div>
        <div className="flex text-slate-600 text-sm justify-between px-[80px]">
          <span>2023 Ddsgnr. All rights reserved.</span>
          <nav className="flex justify-evenly gap-[20px]">
            <a className="whitespace-nowrap" href="/privacy-policy">Privacy Policy</a>
            <a className="whitespace-nowrap" href="#terms-of-service">Terms of Service</a>
            <a className="whitespace-nowrap" href="#cookies-settings">Cookies Settings</a>
          </nav>
        </div>
      </footer>}

    {windowWidth < 1024 && <footer className="inline-flex gap-[24px] w-full justify-center items-center">
      <div className="block">
        <div className="flex flex-col items-center mb-[40px]">
          <img src={ddsgnr} alt="Astro Logo"/>
        </div>

        <nav className="flex justify-center gap-6 mb-6">
          <a className="no-underline font-bold hover:text-sky-600" href="/about-us">About</a>
          <a className="no-underline font-bold hover:text-sky-600" href="/project">Project</a>
          <a className="no-underline font-bold hover:text-sky-600" href="/contact">Contact</a>
          <a className="no-underline font-bold hover:text-sky-600" href="/services">Services</a>
        </nav>
        <div className="flex justify-center gap-4 mb-6">
          {ICONS.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icon.src} alt={icon.alt} width={24} height={24}/>
            </a>
          ))}
        </div>
        <div className="border-t border-black my-6 z-100"></div>

        <div className="text-sm text-gray-500 items-center justify-items-center">
          <p className="w-fit mb-[24px]">2023 Ddsgnr. All rights reserved.</p>
          <nav className="flex justify-evenly gap-[20px]">
            <a className="underline" href="#privacy-policy">Privacy Policy</a>
            <a className="underline" href="#terms-of-service">Terms of Service</a>
            <a className="underline" href="#cookies-settings">Cookies Settings</a>
          </nav>
        </div>
      </div>
    </footer>}
  </>
}