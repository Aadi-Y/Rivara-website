import { IoMdSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
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
                  <a href="#" >Men</a>
                </li>

                <li className="text-[1.1rem] cursor-pointer hover:underline">
                  <a href="#">Perfume</a>
                </li>
              </ul>
            </section>
          </section>

          <section className="flex items-center justify-between w-[15%]">
            <IoMdSearch className="text-2xl cursor-pointer" />
            <CiUser className="text-2xl cursor-pointer" />
            <CiHeart className="text-2xl cursor-pointer" />
            <IoBagCheckOutline className="text-2xl cursor-pointer" />
          </section>
        </section>
      </section>
    </>
  );
}

export default Navbar;
