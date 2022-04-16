import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '../img/kairosNew.jpg';


const  Navbar = () => {

    const [isOpen, setIsOpen] = useState(true);
    // const [navbar, setNavbar] = useState(false);
  
    const changeNavBar = () => {
        // console.log(window.scrollY);
      if (window.screenY > 500) {
        setIsOpen(true)
      } else if (window.screenY < 500){
        setIsOpen(false)
      }  
    }
  
    window.addEventListener('scroll', changeNavBar)
  
    
    
  return (
  <>    
        <nav className={!isOpen ? "bg-transparent h-28 z-20 fixed top-0 left-0 w-screen " : "bg-blue h-28 z-20 fixed top-0 left-0 w-screen "  }>

      {/* <nav className={
        
               !navbar ? "bg-blue h-26 z-10 fixed top-0 left-0 w-screen transition-all duration-200" : "bg-yellow h-26 z-10 fixed top-0 left-0 w-screen transition-all duration-200 "
             }

        > */}

{/* <nav className={`z-20 h-28 fixed top-0 left-0 w-screen transition-all duration-20
  ${!isOpen ? "bg-transparent" : "bg-blue"}`}> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-64 h-16 m-0">
                <img
                  
                  src={logo}
                  alt="logo kairos"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-6">
                  <a
                    href="##"
                    className="link  text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Inicio
                  </a>

                  <a
                    href="##"
                    className="hover:bg-white hover:text-blue text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Modelo Academico
                  </a>

                  <a
                    href="###"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </a>

                  <a
                    href="##"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Calendar
                  </a>

                  <a
                    href="##"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Nosotros
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="##"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Inicio
                </a>

                <a
                  href="##"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Modelo Academico
                </a>

                <a
                  href="##"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="##"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="##"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Nosotros
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      </>
  )
}

export default Navbar