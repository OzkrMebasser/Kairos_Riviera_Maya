import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '../img/transparent.png';
import Slider from '../components/Slider';

import '../App.css';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/ecommerce-nodejs-94449.appspot.com/o/img_2.jpg?alt=media&token=d4e0c622-8080-4c2c-a36c-5c3dbd563125',
  'https://firebasestorage.googleapis.com/v0/b/ecommerce-nodejs-94449.appspot.com/o/img_3.jpg?alt=media&token=f3018691-db2d-4763-bfba-f2de89950de9',
  // 'https://source.unsplash.com/random/1920x960?random=3',
]


function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <nav className="bg-blue ">
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
     

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Kairos Riviera Maya</h1>
        </div>
      </header>
      
      <main>
      <Slider images={images}/>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        
          {/* <div className="px-4 py-6 sm:px-0">
            <Slider images={images}/>
          </div> */}
          {/* <!-- /End replace --> */}
          
        </div>
      </main>
    </div>
  );
}

export default Home;
