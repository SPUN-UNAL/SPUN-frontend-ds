import React, { useState } from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";

import data from "./../data/simulacrum-list.json"

import BaseTable from "./BaseTable";

function Table() {
  const [sidebarToggle] = useOutletContext();

  const [loading] = useState(false);

  const dataHeader = [
    {
      key: "nombre",
      label: "Nombre",
    },
    {
      key: "time",
      label: "Tiempo",
    },
    {
      key: "date",
      label: "Fecha de Creación",
    },
    {
      key: "components",
      label: "Componentes",
    },
  ];

  const handleDelete = () => {};

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <BaseTable
              loading={loading}
              dataHeader={dataHeader}
              data={data}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Table;
