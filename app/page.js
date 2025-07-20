import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Cards from "@/components/pages/Cards";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <div className="w-full h-full mt-40  "  >
    <Navbar/>
    <Banner/>
    <Cards/>
    <Footer/>
    </div>
   
    </>
  )
}
