import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

function Index({ toggle }) {
  const avatar ="/images/male_avatar.svg";

  return (
    <>
      <header className="">
        <div className="shadow-sm">
          <div className="relative bg-slate-50 flex w-full items-center px-5 py-2.5">
            <div className="flex-1">
              <p className="block md:hidden cursor-pointer">
                <FontAwesomeIcon icon={faBars} onClick={toggle} />
              </p>
            </div>
            <div className="">
              <ul className="flex flex-row gap-4 items-center">
                <li>
                  <span>
                    <Link to="/auth/profile">
                    <img
                      className="rounded-full h-12 w-12 border cursor-pointer"
                      src={avatar}
                      alt="Avatar"
                    />
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Index;
