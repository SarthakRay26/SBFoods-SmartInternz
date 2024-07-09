import Header from "@/components/Header";
import Body from "@/components/Body";
import { BentoGridDemo } from "@/components/Items";
import { Reviews } from "@/components/Reviews";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Body />
      <center>
        <BentoGridDemo />
      </center>
      <div className="flex flex-col justify-center items-center">
        <div className="text-white mt-16 text-6xl">
          <p>Reviews</p>
        </div>
        <Reviews />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
