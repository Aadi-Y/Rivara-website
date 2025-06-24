import shirtItem from "../assets/shirtItem.jpg";
import tshirtItem from "../assets/tshirtItem.jpg";
import pantItem from "../assets/pantItem.jpg";
import trouserItem from "../assets/trousersItem.jpg";
import landingBanner from "../assets/landingBanner.jpg";
import {Link} from "react-router-dom"

function Landing() {
  return (
    <>
      <section className="h-auto w-[100vw] pb-100">
        <section className="flex flex-col gap-40">
          <section>
            <div>
              <img src={landingBanner} alt="" />
            </div>
          </section>

          <section className="w-[100%] lg:w-[80%] m-auto grid md:grid-cols-2 gap-y-5 gap-x-0">
            <section>
              <div>
                <img src={shirtItem} alt="" className=" w-full md:h-100 md:w-200"/>
              </div>
              <div>
                <p className="font-semibold text-[1.1rem]">SHIRTS</p>
                <Link to="/mens" className="text-gray-700">EXPLORE</Link>
              </div>
            </section>

            <section>
              <div>
                <img src={tshirtItem} alt="" className="w-full md:h-100 md:w-200"/>
              </div>
              <div>
                <p className="font-semibold text-[1.1rem]">T-SHIRTS</p>
                <Link to="/mens" className="text-gray-700">EXPLORE</Link>
              </div>
            </section>

            <section>
              <div>
                <img src={pantItem} alt="" className="w-full md:h-100 md:w-200" />
              </div>
              <div>
                <p className="font-semibold text-[1.1rem]">PANTS</p>
                <Link to="/mens" className="text-gray-700">EXPLORE</Link>
              </div>
            </section>

            <section>
              <div>
                <img src={trouserItem} alt="" className="w-full md:h-100 md:w-200"/>
              </div>
              <div>
                <p className="font-semibold text-[1.1rem]">TROUSERS</p>
                <Link to="/mens" className="text-gray-700">EXPLORE</Link>
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Landing;
