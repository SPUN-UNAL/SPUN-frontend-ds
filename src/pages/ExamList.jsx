import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import ExamCard from "../components/Widget/ExamCard";
import data from "../data/exam-list.json";

function Exam() {
  const [sidebarToggle] = useOutletContext();

  // Card color available at /src/index.css
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-7 gap-y-4 gap-x-2  md:w-9/12 w-full mx-auto">

              {data?.data?.map((data, index) => (
                <div className="col-auto w-full">
                    <ExamCard key={index} data={data} className="w-full mx-auto"/>
                </div>
              ))}

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Exam;
