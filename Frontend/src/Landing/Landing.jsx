import shirt1 from "../assets/shirt1.png";
import shirt2 from "../assets/shirt2.png";
import shirt3 from "../assets/shirt3.png";

function Landing() {
  return (
    <>
      <section className="mt-50 w-[100vw] bg-gray-200">
        <section className="w-[95%] m-auto">
          <section>
            <h1 className="text-[1.5rem] mb-3">Men</h1>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div>
                <img src={shirt1} alt="" className="h-100 w-auto"/>
            </div>
            <div>
                <img src={shirt2} alt="" className="h-100 w-auto"/>
            </div>
            <div>
                <img src={shirt3} alt="" className="h-100 w-auto"/>
            </div>
            <div>
                <img src={shirt1} alt="" className="h-100 w-auto"/>
            </div>

            <div>
                <img src={shirt1} alt="" className="h-100 w-auto"/>
            </div>
            <div>
                <img src={shirt2} alt="" className="h-100 w-auto"/>
            </div>
            <div>
                <img src={shirt3} alt="" className="h-100 w-auto"/>
            </div>
            <div>
                <img src={shirt1} alt="" className="h-100 w-auto"/>
            </div>

            <div>
                <img src={shirt1} alt="" className="h-100 w-auto"/>
            </div>
            <div>
                <img src={shirt2} alt="" className="h-100 w-auto"/>
            </div>
            <div>
                <img src={shirt3} alt="" className="h-100 w-auto"/>
            </div>
            <div>
                <img src={shirt1} alt="" className="h-100 w-auto"/>
            </div>

            <div>
                <img src={shirt1} alt="" className="h-100 w-auto"/>
            </div>
            <div>
                <img src={shirt2} alt="" className="h-100 w-auto"/>
            </div>
            <div>
                <img src={shirt3} alt="" className="h-100 w-auto"/>
            </div>
            <div>
                <img src={shirt1} alt="" className="h-100 w-auto"/>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default Landing;
