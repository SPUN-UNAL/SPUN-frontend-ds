import React from "react";
import { Link } from "react-router-dom";
import Datatables from "../components/Datatables/Table";
import TableCell from "../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";

function BaseTable({ loading, dataHeader, data, handleDelete }) {
  return (
    <Datatables loading={loading} dataHeader={dataHeader}>
      {data?.data?.map((row, index) => (
        <tr
          key={index}
          className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
        >
          <TableCell dataLabel="name" showLabel={true}>
            <Link to={"/take-exam/" + (row.id)} >
              <span className="font-medium text-sm text-gray-900 underline-offset-2 underline hover:text-green-700 hover:transition-all hover:shadow-lg visited:text-green-900 ">
                {row.name}
              </span>
            </Link>
          </TableCell>

          <TableCell dataLabel="time" showLabel={true}>
            <p className="font-normal text-sm text-gray-500">{row.time}</p>
          </TableCell>

          <TableCell dataLabel="date" showLabel={true}>
            <p className="font-normal text-sm text-gray-500">{row.date}</p>
          </TableCell>

          <TableCell dataLabel="subject" showLabel={true}>
            <span className=" space-x-1">
              {row.components?.map((component, index) => (
                <span
                  key={index}
                  className="rounded-full py-1 px-3 text-xs font-semibold bg-emerald-200 text-green-900"
                >
                  {component}
                </span>
              ))}
            </span>
          </TableCell>
        </tr>
      ))}
    </Datatables>
  );
}

export default BaseTable;
