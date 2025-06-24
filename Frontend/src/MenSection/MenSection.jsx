import shirt1 from "../assets/shirt1.png";
import shirt2 from "../assets/shirt2.png";
import shirt3 from "../assets/shirt3.png";
import {useNavigate} from "react-router-dom"

function MenSection(){

    const navigate = useNavigate();

    function handleNavigation(){
        navigate("/about")
    }
    return (
        <>
          <section className="mt-50 w-[100vw] bg-gray-200">
            <section className="w-[95%] m-auto">
              <section>
                <h1 className="text-[1.2rem] sm:text-[1.5rem] mb-3">MEN</h1>
              </section>
              <section className="grid grid-cols-1 px-20 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt1} alt="" className="h-100 w-auto"/>
                </div>
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt2} alt="" className="h-100 w-auto"/>
                </div>
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt3} alt="" className="h-100 w-auto"/>
                </div>
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt1} alt="" className="h-100 w-auto"/>
                </div>
    
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt1} alt="" className="h-100 w-auto"/>
                </div>
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt2} alt="" className="h-100 w-auto"/>
                </div>
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt3} alt="" className="h-100 w-auto"/>
                </div>
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt1} alt="" className="h-100 w-auto"/>
                </div>
    
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt1} alt="" className="h-100 w-auto"/>
                </div>
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt2} alt="" className="h-100 w-auto"/>
                </div>
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt3} alt="" className="h-100 w-auto"/>
                </div>
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt1} alt="" className="h-100 w-auto"/>
                </div>
    
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt1} alt="" className="h-100 w-auto"/>
                </div>
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt2} alt="" className="h-100 w-auto"/>
                </div>
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt3} alt="" className="h-100 w-auto"/>
                </div>
                <div onClick={handleNavigation} className="cursor-pointer">
                    <img src={shirt1} alt="" className="h-100 w-auto"/>
                </div>
              </section>
            </section>
          </section>
        </>
      );
}

export default MenSection