import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./header.css";
import UserNav from "./UserNav/UserNav";
import { serviceLocalStorageUser } from "../../util/demoLocalStorage/demoLocalStorage";
import LanguageConfig from "../../Components/LanguageConfig/LanguageConfig";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [curDT, setCurDT] = useState();
  // let dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      let time = new Date()
        .toLocaleTimeString()
        .replace("/.*(d{2}:d{2}:d{2}).*/", "$1");
      setCurDT(time);
    }, 1000);
  }, []);

  let userInfor = serviceLocalStorageUser.user.get();

  let renderUserNav = () => {
    if (userInfor) {
      return <UserNav />;
    } else {
      return (
        <>
          <NavLink to={`/login`}>
            <button className="inline-flex items-center bg-red-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 hover:text-white rounded text-base mt-4 md:mt-0 font-bold duration-500">
              {t("Login.1")}
            </button>
          </NavLink>
          <NavLink to={`/registration`}>
            <button className="inline-flex items-center border-2 border-transparent py-1 px-3 ml-2 focus:outline-none rounded text-base mt-4 md:mt-0 hover:text-red-500 hover:border-red-500 duration-500">
              {t("Sign up.1")}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </NavLink>
        </>
      );
    }
  };

  return (
    <header id="Header" className="text-gray-600 body-font bg-transparent py-3">
      <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center justify-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <NavLink
            to={`/`}
            className="mr-5 font-bold text-lg hover:text-red-500 duration-300"
          >
            {t("Home.1")}
          </NavLink>
          <NavLink
            to={`/aboutUs`}
            className="mr-5 font-bold text-lg hover:text-red-500 duration-300"
          >
            {t("About us.1")}
          </NavLink>
          <NavLink
            to={`/myService`}
            className="mr-5 font-bold text-lg hover:text-red-500 duration-300"
          >
            {t("My service.1")}
          </NavLink>
          <NavLink
            to={`/contact`}
            className="mr-5 font-bold text-lg hover:text-red-500 duration-300"
          >
            {t("Contact.1")}
          </NavLink>
        </nav>
        <Link
          to={"/"}
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <img src="/imgs/luceteLogo.svg" className="w-48" alt="logo" />
        </Link>

        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 items-center">
          <span className="text-red-500 text-base font-bold text-center mr-4">
            {curDT}
          </span>
          <LanguageConfig />
          {renderUserNav()}
        </div>
      </div>
    </header>
  );
}
