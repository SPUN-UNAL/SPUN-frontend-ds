import {useEffect, useState} from 'react';

import Exam from "components/Exam/Exam";
import axios from "axios";
import { useParams } from "react-router-dom";

const baseURL = "http://localhost:3000/api/";

function ExamTake() {
  // Fetch exam
  let {id} = useParams();
  const [data, setData] = useState(null);
  const examURL = baseURL  +  "exam/" +  id;

  useEffect(() => {
    axios.get(examURL).then((response)=>{
      setData(response.data.exam);
    })
  });

  if (!data){
    return (
      <>
        <div>
          <p>Error 404: No encontrado</p>
        </div>
      </>
    )
  }
  return (
    <>
      <main className="h-full">
        {/* Main Content */}
        <div className="">
          <p>Estas tomando el examen: {data.title} </p>
          <p>{data.description}</p>
        </div>
        <div className="mainCard">
          <div className="container">
            {/* Fetch of questions */}
            <Exam questionBlocks={data.questionBlocks}></Exam>
          </div>
        </div>
      </main>
    </>
  );
}

export default ExamTake;
