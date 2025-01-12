import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Provider/Authcontext";
import { MdOutlineShoppingCart } from "react-icons/md";
import UseCart from "../../Hooks/UseCart";

export default function Header() {
  const { logOut, user } = useContext(AuthContext);
  const [cart] = UseCart()
  console.log([cart])

  return (
    <header className="flex fixed bg-black text-white bg-opacity-50 flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-3">
      <nav className="relative container w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6  mx-auto">
        <div className="md:col-span-3">
          {/* <!-- Logo --> */}
          <NavLink
            to="/"
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          >
            BISTRO BOSS
          </NavLink>
          {/* <!-- End Logo --> */}
        </div>
        {/* 
    <!-- Button Group --> */}
        <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <NavLink to="/login">
            <button
              type="button"
              className="py-2 px-3 inline-flex uppercase  items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200  text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white"
            >
              Sign in
            </button>
          </NavLink>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              id="hs-navbar-hcail-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-hcail"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-hcail"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- End Button Group -->

    <!-- Collapse --> */}
        <div
          id="hs-navbar-hcail"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
          aria-labelledby="hs-navbar-hcail-collapse"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
              <NavLink to="/">
                <a
                  className="relative uppercase inline-block text-white focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white"
                  href="#"
                  aria-current="page"
                >
                  Home
                </a>
              </NavLink>
            </div>
            <div>
              <a
                className="inline-block uppercase text-white hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                href="#"
              >
                Contact
              </a>
            </div>
            <div>
              <NavLink to="our-menu">
                <a
                  className="inline-block uppercase text-white hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="#"
                >
                 Menu
                </a>
              </NavLink>
            </div>
            <div>
              <a
                className="inline-block uppercase text-white hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                href="/"
              >
               shop
              </a>
            </div>
            <div>
              <a
                className="inline-block uppercase text-white hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                href="/secrates"
              >
                Secrates
              </a>
            </div>
            <div>
              <NavLink to="/order/:category">
                <a
                  className="inline-block  uppercase text-white hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="#"
                >
                  Order
                </a>
              </NavLink>
            </div>
            <div>
              <NavLink to="/login">
                <a
                  className="inline-block  uppercase text-white hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="#"
                >
                  Login
                </a>
              </NavLink>
            </div>
            <div>
              <NavLink to="/deshbord/cart">
                <div className="relative ">
                  <a
                    className="uppercase flex items-center gap-2 text-white hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                    href="#"
                  > <MdOutlineShoppingCart className="text-2xl" /></a>
                  <span className="absolute -top-2 -right-5 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">{cart?.length}</span>
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink onClick={logOut}>
                <a
                  className="inline-block  uppercase text-white hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="#"
                >
                  Log Out
                </a>
              </NavLink>
            </div>
            <div className="relative inline-block">
              {user && (
                <img
                  className="inline-block  size-[46px] rounded-full"
                  src={user?.photoURL}
                />
              )}
              <span className="absolute bottom-0 end-0 block p-2 rounded-full transform translate-y-1/2 translate-x-1/2 bg-white dark:bg-neutral-900 dark:ring-neutral-900">
                <svg
                  className="shrink-0 size-5"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7326 0C9.96372 0.00130479 8.53211 1.43397 8.53342 3.19935C8.53211 4.96473 9.96503 6.39739 11.7339 6.39869H14.9345V3.20065C14.9358 1.43527 13.5029 0.00260958 11.7326 0C11.7339 0 11.7339 0 11.7326 0M11.7326 8.53333H3.20053C1.43161 8.53464 -0.00130383 9.9673 3.57297e-06 11.7327C-0.00261123 13.4981 1.4303 14.9307 3.19922 14.9333H11.7326C13.5016 14.932 14.9345 13.4994 14.9332 11.734C14.9345 9.9673 13.5016 8.53464 11.7326 8.53333V8.53333Z"
                    fill="#36C5F0"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32 11.7327C32.0013 9.9673 30.5684 8.53464 28.7995 8.53333C27.0306 8.53464 25.5976 9.9673 25.5989 11.7327V14.9333H28.7995C30.5684 14.932 32.0013 13.4994 32 11.7327ZM23.4666 11.7327V3.19935C23.4679 1.43527 22.0363 0.00260958 20.2674 0C18.4984 0.00130479 17.0655 1.43397 17.0668 3.19935V11.7327C17.0642 13.4981 18.4971 14.9307 20.2661 14.9333C22.035 14.932 23.4679 13.4994 23.4666 11.7327Z"
                    fill="#2EB67D"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.2661 32C22.035 31.9987 23.4679 30.566 23.4666 28.8007C23.4679 27.0353 22.035 25.6026 20.2661 25.6013H17.0656V28.8007C17.0642 30.5647 18.4972 31.9974 20.2661 32ZM20.2661 23.4654H28.7995C30.5684 23.4641 32.0013 22.0314 32 20.266C32.0026 18.5006 30.5697 17.068 28.8008 17.0654H20.2674C18.4985 17.0667 17.0656 18.4993 17.0669 20.2647C17.0656 22.0314 18.4972 23.4641 20.2661 23.4654V23.4654Z"
                    fill="#ECB22E"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.93953e-07 20.266C-0.00130651 22.0314 1.43161 23.4641 3.20052 23.4654C4.96944 23.4641 6.40235 22.0314 6.40105 20.266V17.0667H3.20052C1.43161 17.068 -0.00130651 18.5006 8.93953e-07 20.266ZM8.53342 20.266V28.7993C8.53081 30.5647 9.96372 31.9974 11.7326 32C13.5016 31.9987 14.9345 30.566 14.9332 28.8007V20.2686C14.9358 18.5032 13.5029 17.0706 11.7339 17.068C9.96372 17.068 8.53211 18.5006 8.53342 20.266C8.53342 20.2673 8.53342 20.266 8.53342 20.266Z"
                    fill="#E01E5A"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        {/* <!-- End Collapse --> */}
      </nav>
    </header>
  );
}
