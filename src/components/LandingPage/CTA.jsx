import { Link } from "react-router-dom";
import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Study from "assets/images/study.jpg";

const CTA = () => {
  return (
    <>
      <div className="mx-auto my-12 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="my-auto">
            {/* CTA text */}
            <div className="text-4xl md:text-6xl uppercase font-bold text-center my-4">
              <div className="flex justify-center items-center flex-col">
                <span>¿Estas listo</span>
                <span className="text-emerald-600 ">
                  para empezar la aventura?
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center my-4 md:my-8 flex-col sm:flex-row">
              <div className="sm:flex-1 text-center my-3 py-6 sm:py-6">
                <Link
                  to="/auth/login"
                  className="py-4 text-xl md:text-2xl text-slate-200 rounded-full bg-emerald-600 hover:bg-emerald-500  shadow-lg "
                >
                  <span className="px-6">
                    Accede
                    <FontAwesomeIcon
                      icon={faRightToBracket}
                      className="pl-3"
                    ></FontAwesomeIcon>
                  </span>
                </Link>
              </div>
              <div className="sm:flex-1 text-center my-3 py-4 sm:py-6">
                <Link
                  to="/auth/register"
                  className="py-4 text-xl md:text-2xl text-slate-200 rounded-full bg-emerald-600 hover:bg-emerald-500 shadow-lg"
                >
                  <span className="px-6">
                    Registrate
                    <FontAwesomeIcon
                      icon={faUser}
                      className="pl-3"
                    ></FontAwesomeIcon>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center my-6 md:my-2 px-4 sm:px-2">
            <img
              src={Study}
              className="w-full max-w-lg rounded-lg shadow-lg"
              alt="Girl studying"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
