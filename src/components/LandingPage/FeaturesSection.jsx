import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturesSection = (props) => {
  return (
    <>
      <section className="bg-blue-100 py-12 md:py-16">
        <div className="px-4 mx-auto max-w-screen-xl sm:pt-6 pt-2 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 ">
              Diseñado para estudiantes berracos como tú
            </h2>
            <p className="text-gray-500 text-2xl sm:text-3xl ">
              Hemos mejorado la manera de realizar simulacros. Con nuestra ayuda
              estudiarás en la Universidad de tus sueños.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-2xl ">
            <div className="py-8">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                <FontAwesomeIcon icon={faListCheck} className="text-emerald-600 text-7xl pl-5 pb-5"></FontAwesomeIcon>
              </div>
              <h3 className="mb-4 text-3xl font-bold ">Mide tu pogreso</h3>
              <p className="text-gray-500 ">
                En nuestro dashboard podrás ver directamente los resultados de tus
                simulacros pasados.
              </p>
            </div>
            <div className="py-8">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                <FontAwesomeIcon icon={faComputer} className="text-emerald-600 text-7xl pl-5 pb-5"></FontAwesomeIcon>
              </div>
              <h3 className="mb-4 text-3xl font-bold ">Examenes interactivos</h3>
              <p className="text-gray-500 ">
                Toma examenes interactivos para probar tu conocimiento en un
                área específica del examen. 
              </p>
            </div>
            <div className="py-8">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                <FontAwesomeIcon icon={faBrain} className="text-emerald-600 text-7xl pl-5 pb-5"></FontAwesomeIcon>
              </div>
              <h3 className="mb-4 text-3xl font-bold ">Cinco áreas del examen</h3>
              <p className="text-gray-500 ">
                Tenemos pruebas disponibles en Matemáticas, Ciencias Naturales,
                Ciencias Sociales, Análisis textual, y Análisis de imagen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
