import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRealList } from "../features/dynamicDropSlice";
import { useNavigate } from "react-router-dom";

const TableView = ({ stat, userType }) => {
  const navigate = useNavigate();
  const realList = useSelector(selectRealList);
  const [state, setState] = useState([]);

  useEffect(() => {
    const filteredItems = realList.filter((item) => item.userType === userType);
    setState(filteredItems);
  }, [stat, userType, realList]);

  return (
    <div>
      <div className="border-2 p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Field Name</th>
              <th className="border px-4 py-2">Field Type</th>
              <th className="border px-4 py-2">Field Data Type</th>
              <th className="border px-4 py-2">Field Validation</th>
              <th className="border px-4 py-2">Field Data</th>
              <th className="border px-4 py-2">Mandatory</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item) => (
              <tr key={item.displayName}>
                <td className="border px-4 py-2">{item.displayName}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.fieldType}</td>
                <td className="border px-4 py-2">{item.validation}</td>
                <td className="border px-4 py-2">{item.fieldData}</td>
                <td className="border px-4 py-2">{item.mandatory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          className="border-2 bg-transparent p-1 px-3 border-black rounded-lg"
          onClick={() => {
            navigate("/output");
          }}
        >
          Submit
        </button>
        <button
          className="border-2 bg-transparent p-1 px-3 border-black rounded-lg"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TableView;
