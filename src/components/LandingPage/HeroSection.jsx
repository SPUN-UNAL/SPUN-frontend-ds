import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const HeroSection = () => {
  return (
    <>
      <section className="">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-16 md:py-20 lg:px-12 overflow-hidden">
          <h1 className="text-5xl sm:text-8xl font-extrabold ">
            Bienvendos a{" "}
            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-emerald-500 to-green-900">
              SPUN <FontAwesomeIcon icon={faGraduationCap} className="text-emerald-600 py-auto"></FontAwesomeIcon>
            </span>
          </h1>
          <div className="my-8">
            <span className="text-4xl text-gray-700">
              La plataforma perfecta para preparar tu acceso a la Universidad
              Nacional de Colombia
            </span>
          </div>
        </div>

      </section>
    </>
  );
};

export default HeroSection;
