import {
  faList,
  faHome,
  faBookOpen,
  faSignOut,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";

function Index() {
  const menus = useMemo(
    () => [
      {
        label: "Dashboard",
        icon: faHome,
        link: "/dashboard/",
        dis: "translate-x-0",
      },
      {
        label: "Simulacros",
        link: "/dashboard/simulacrums",
        icon: faList,
        dis: "translate-x-16",
      },
      {
        label: "Examenes",
        icon: faBookOpen,
        link: "/dashboard/exams/",
        dis: "translate-x-32",
      },
      {
        label: "Perfil",
        icon: faUserAlt,
        link: "/auth/profile/",
        dis: "translate-x-48",
      },
      {
        label: "Autenticación",
        icon: faSignOut,
        link: "/auth/logout",
        dis: "translate-x-64",
      },
    ],
    []
  );

  const { pathname } = useLocation();

  const [active, setActive] = useState(
    menus.findIndex((x) => x.link === pathname)
  );

  useEffect(() => {
    setActive(menus.findIndex((x) => x.link === pathname));
  }, [pathname, menus]);

  return (
    <div className="md:hidden flex justify-center fixed bottom-0 w-full bg-white left-0 z-20 h-16">
      <div className="flex text-gray-600 relative">
        {menus[active] && (
          <span
            className={`bg-emerald-400 border-8 border-white h-16 w-16 absolute -top-5 rounded-full duration-500 ${menus[active]?.dis}`}
          ></span>
        )}
        {menus.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.link}
            onClick={() => setActive(index)}
            className="buttonNavbarBottom"
          >
            <span
              className={`text-xl z-20 duration-500 ${
                index === active && "-mt-6 text-white"
              }`}
            >
              <FontAwesomeIcon icon={menu.icon} />
            </span>
            <span
              className={`text-xs font-semibold ${
                active === index
                  ? "translate-y-5 duration-500 opacity-100"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {menu.label}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Index;
