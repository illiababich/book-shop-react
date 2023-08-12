import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

interface CartDrawerProps {
  isDrawerOpen: boolean,
  handleButtonClicked: () => void,
  handleDrawerClose: () => void
}

const CartDrawer: React.FC<CartDrawerProps> = ({isDrawerOpen, handleDrawerClose, handleButtonClicked}) => {
  const tabIndex = -1;

  useEffect(() => {
    const closeDrawerOnOutsideClick = (event: MouseEvent) => {
      if (isDrawerOpen) {
        const drawerElement = document.getElementById('drawer-popup');
        if (drawerElement && !drawerElement.contains(event.target as Node)) {
          handleDrawerClose();
        }
      }
    };

    document.addEventListener('mousedown', closeDrawerOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeDrawerOnOutsideClick);
    };
  }, [isDrawerOpen, handleDrawerClose]);

  const drawerClassName = `fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} bg-white w-80 dark:bg-gray-800`;

  return <>
    <div className="text-center">
      <button
        onClick={handleButtonClicked}
        className="mx-4 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        type="button"
        data-drawer-target="drawer-popup"
        data-drawer-show="drawer-popup"
        data-drawer-placement="right"
        aria-controls="drawer-popup">
        Cart
        <span
          className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            0
          </span>
      </button>
    </div>

    <div id="drawer-popup"
         className={drawerClassName}
         tabIndex={tabIndex}
         aria-labelledby="drawer-right-label">
      <h5 id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
        Product Cart
      </h5>
      <button onClick={handleDrawerClose}
              data-drawer-hide="drawer-popup"
              aria-controls="drawer-popup"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        products</p>
      <div className="grid grid-cols-2 gap-4">
        <Link
          to={`/checkout`}
          onClick={handleDrawerClose}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700
           rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <span>Checkout</span>
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link>
      </div>
    </div>
  </>;
};

export default CartDrawer;