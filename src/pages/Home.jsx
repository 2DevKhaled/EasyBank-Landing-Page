import About from "../components/About";
import Landing from "../components/Landing";
import Mission from "../components/Mission";
import Blog from "../components/Blog";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function Home(){
    return (
        <div >
        <Landing/>
        <About />
        <Mission />
        <Blog/>
        <Faq />
        <Contact />
        <Footer />
        </div>
    )
}