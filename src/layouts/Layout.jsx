import Banner from "../components/Banner/Banner.jsx"
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"

// eslint-disable-next-line react/prop-types
export default function Layout({children}) {
  return <>
    <Banner/>
    <Header/>
      {children}
    <Footer/>
  </>
}