import { IoMdSearch } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <section className="flex h-[12vh] border border-gray-400 w-[100vw] fixed top-0 bg-white z-50">
        <section className="flex w-[95%] justify-between m-auto items-end">
          <section className="flex items-center w-[25%] justify-between">
            <section>
              <h1 className="text-2xl">Rivara</h1>
            </section>

            <section>
              <ul className="flex items-center gap-3">
                <li className="text-[1.1rem] cursor-pointer hover:underline">
                  <a href="#" >MEN</a>
                </li>

                <li className="text-[1.1rem] cursor-pointer hover:underline">
                  <a href="#">PERFUME</a>
                </li>
              </ul>
            </section>
          </section>

          <section className="flex items-center justify-between w-[15%]">
            <IoMdSearch className="text-2xl cursor-pointer" />
            <FiUser className="text-2xl cursor-pointer" />
            <FiHeart className="text-2xl cursor-pointer" />
            <IoBagCheckOutline className="text-2xl cursor-pointer" />
          </section>
        </section>
      </section>
    </>
  );
}

export default Navbar;
