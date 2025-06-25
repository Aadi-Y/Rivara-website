import shirt1 from "../assets/shirt1.png";
// import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function About() {

  const navigate = useNavigate();
  
  function handleCard(){
    navigate("/card")
  }
  return (
    <>
      <section className="h-[100vh] w-[100vw] mt-30">
        <section className="flex gap-10 m-auto w-[95%]">
          <section className="w-[50%] h-[100vh] flex flex-col gap-5">
            <section className="bg-gray-200 w-full h-full flex flex-col items-center justify-center">
              <div>
                <img src={shirt1} alt="" className="h-100 w-auto" />
              </div>
            </section>

            <section>
              <div className="">
                <h1 className="">Description: </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  obcaecati nostrum a numquam, soluta nihil in, quis quos id
                  esse, distinctio velit. Voluptatem, harum hic? Sapiente sint
                  temporibus maiores dolore. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Reiciendis nemo commodi magnam
                  autem quisquam totam dolorem possimus laudantium corrupti
                  ratione, obcaecati laborum et porro ab aut, eaque maxime odit
                  sequi?
                </p>
              </div>
            </section>
          </section>

          <section className="w-[50%] flex flex-col gap-10 py-25 ">
            <div>
              <h1 className="font-semibold text-2xl">Shirt</h1>
              <p className="font-semibold text-[1.2rem] flex items-center">Rs: 1249</p>
              <p>MPR inclusive of all taxes</p>
            </div>

            <div>
              COLOUR:
              <section className="grid grid-cols-5 w-[70%] h-60 overflow-y-auto">
                <div className="border border-gray-500 flex items-center justify-center h-30">
                  <img src={shirt1} alt="" className="h-30" />
                </div>
                <div className="border border-gray-500 flex items-center justify-center h-30">
                  <img src={shirt1} alt="" className="h-30" />
                </div>
                <div className="border border-gray-500 flex items-center justify-center h-30">
                  <img src={shirt1} alt="" className="h-30" />
                </div>
                <div className="border border-gray-500 flex items-center justify-center h-30">
                  <img src={shirt1} alt="" className="h-30" />
                </div>
                <div className="border border-gray-500 flex items-center justify-center h-30">
                  <img src={shirt1} alt="" className="h-30" />
                </div>
                <div className="border border-gray-500 flex items-center justify-center h-30">
                  <img src={shirt1} alt="" className="h-30" />
                </div>
                <div className="border border-gray-500 flex items-center justify-center h-30">
                  <img src={shirt1} alt="" className="h-30" />
                </div>
              </section>
            </div>

            <div>
              <h1>SIZE:</h1>
              <ul className="grid grid-cols-5 w-[70%]">
                <li className="border border-gray-500 flex items-center justify-center p-3">
                  XXS
                </li>
                <li className="border border-gray-500 flex items-center justify-center p-3">
                  XS
                </li>
                <li className="border border-gray-500 flex items-center justify-center p-3">
                  S
                </li>
                <li className="border border-gray-500 flex items-center justify-center p-3">
                  M
                </li>
                <li className="border border-gray-500 flex items-center justify-center p-3">
                  L
                </li>
                <li className="border border-gray-500 flex items-center justify-center p-3">
                  XL
                </li>
                <li className="border border-gray-500 flex items-center justify-center p-3">
                  XXL
                </li>
              </ul>
            </div>

            <div className="flex flex-col w-[50%] gap-2">
              <button className="border p-4 bg-black text-white cursor-pointer hover:text-black hover:bg-transparent rounded transition-all duration-200" onClick={handleCard}>ADD</button>
              <button className="border p-4 bg-black text-white cursor-pointer hover:text-black hover:bg-transparent rounded transition-all duration-200">BUY</button>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default About;
