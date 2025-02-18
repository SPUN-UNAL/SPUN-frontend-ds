import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function DashboardHeader({ user, avatar, toggle }) {
  return (
    <div className="px-3 sm:px-8 pt-9 pb-4 flex flex-wrap w-full justify-between items-center">
      <div className="flex flex-row gap-3">
        <Link to="/auth/profile">
          <p className="flex-shrink-0 rounded-full block md:hidden border border-emerald-400 p-[3px] shadow-lg">
            <img
              className="rounded-full md:h-14 md:w-14 h-10 w-10 border cursor-pointer"
              src={avatar}
              alt="Avatar"
            />
          </p>
        </Link>
        <div id="nameSection">
          <p className="text-sm font-semibold text-gray-500">
            Que genial verte de vuelta,
          </p>
          <h1 className="font-medium lg:text-3xl text-2xl text-gray-700">
            {user?.name}
          </h1>
        </div>
      </div>
      <div className="avaterSection flex items-center gap-2 sm:gap-6 text-slate-400">
        <p className="rounded-full hidden md:block border border-emerald-400 p-[3px] shadow-lg">
          <Link to="/auth/profile">
            <img
              className="rounded-full md:h-14 md:w-14 h-10 w-10 border cursor-pointer"
              src={avatar}
              alt="Avatar"
            />
          </Link>
        </p>

        <p className="cursor-pointer md:hidden text-2xl" onClick={toggle}>
          <FontAwesomeIcon icon={faBars} />
        </p>
      </div>
    </div>
  );
}

export default DashboardHeader;
