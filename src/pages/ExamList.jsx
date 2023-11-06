import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ExamCard from "../components/Widget/ExamCard";
import data from "../data/exam-list.json";
import { getExams } from "api/exams";
import Navbar from "../components/Navbar/Index";

function ExamList() {
  const [sidebarToggle] = useOutletContext();
  const [data, setData] = useState(null);

  useEffect(()=>{
    const setExams = async ()=>{
      const dump = await getExams();
      setData(dump.data.exams)
    }
    setExams();
  })

  // Card color available at /src/index.css
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-7 gap-y-4 gap-x-2  md:w-9/12 w-full mx-auto">

              {data?.map((exam, index) => (
                <div className="col-auto w-full">
                  <ExamCard key={index} data={exam} className="w-full mx-auto"/>
                </div>
              ))}

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ExamList;
