import ddsgnr from "../../assets/logos/ddsgnr.png"
import {useEffect, useState} from "react";

export default function Header() {
  const [isClickHamburger, setIsClickHamburger] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  function handleClickRequestQuate() {
    window.location.href = "/contact";
  }

  function handleClickHamburger() {
    setIsClickHamburger(!isClickHamburger);
  }

  const desktopATagClass = "flex items-center py-0 px-4 no-underline text-black"
  const hamburgerMenuClass = "flex flex-col justify-between h-[20px] w-[25px] cursor-pointer relative"

  const mobileATagClass = "px-[20px] py-[10px] text-black text-center w-full"

  const lineClass = (position, isClickHamburger) => {
    const topClass = "rotate-45 translate-x-[1px] origin-top-left"
    const centerClass = "opacity-0"
    const BottomClass = "-rotate-45 translate-x-[-1px] origin-top-left"

    let line = "w-full h-[3px] bg-black transition-all duration-300 ease-in-out ";

    if (isClickHamburger) {
      switch (position) {
        case "top": line += topClass; break;
        case "center": line += centerClass; break;
        case "bottom": line += BottomClass; break;
      }
    }

    return line;
  }

  const dropdownMenuClass = (isClickHamburger) => {
    const leftPosition = isClickHamburger
      ? "left-0"
      : "left-[-100%]";

    return `flex flex-col absolute w-full top-[72px] ${leftPosition} bg-white transition-all duration-700 ease-in-out`
  }

  return <header className="sticky top-0 z-1000">
    <nav className="px-16 py-0 flex h-[72px] justify-between items-center border-t-1 border-t-solid border-t-black border-b-1 border-b-solid border-b-black bg-white">
      <img src={ddsgnr} alt="Logo" width={130.6}/>
      {windowWidth >= 1024 && <div className="flex">
        <a className={desktopATagClass} href="/">Home</a>
        <a className={desktopATagClass} href="/about-us">About</a>
        <a className={desktopATagClass} href="/services">Services</a>
        <a className={desktopATagClass} href="/team">Teams</a>
        <a className={desktopATagClass} href="/contact">Contact</a>
        <button onClick={handleClickRequestQuate}
                className="ml-4 w-[160px] h-[40px] text-normal bg-black text-white rounded-lg hover:bg-gray-800 hover:cursor-pointer"
        >Request A Quote</button>
      </div>}
      {windowWidth < 1024 &&
        <div onClick={handleClickHamburger}
             className={hamburgerMenuClass}
        >
          <span className={lineClass("top", isClickHamburger)}></span>
          <span className={lineClass("center", isClickHamburger)}></span>
          <span className={lineClass("bottom", isClickHamburger)}></span>
        </div>
      }
    </nav>
    <div className={dropdownMenuClass(isClickHamburger)}>
      <div className="flex flex-col items-center">
        <a className={mobileATagClass} href="/">Home</a>
        <a className={mobileATagClass} href="/about-us">About</a>
        <a className={mobileATagClass} href="/services">Services</a>
        <a className={mobileATagClass} href="/team">Teams</a>
        <a className={`${mobileATagClass} border-b-none`} href="/contact">Contact</a>
        <button onClick={handleClickRequestQuate}
                className="w-[160px] h-[40px] text-normal bg-black text-white rounded-lg hover:bg-gray-800 hover:cursor-pointer"
        >Request A Quote</button>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-4/5 text-center px-0 py-[0.5rem]"><strong>For emergency cases: 567 123 45 67</strong></div>
        <div className="w-4/5 text-center px-0 py-[0.5rem]">Location: 121 Wallstreet Street, NY , USA</div>
        <div className="w-4/5 text-center px-0 py-[0.5rem]">Open hours: 9.00-24.00 Mon-Sat</div>
        <div className="w-4/5 text-center px-0 py-[0.5rem]">Email:info@ddsgnr.com</div>
      </div>
    </div>
  </header>
}