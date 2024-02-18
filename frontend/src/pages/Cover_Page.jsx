import Header from "../components/home_components/Header";
import Hero from "../components/home_components/Hero";
import About from "../components/home_components/About";
import Newsletter from "../components/home_components/Newsletter";
import Cards from "../components/home_components/Cards";
import Footer from "../components/home_components/Footer";

function Cover_Page() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}

export default Cover_Page;
