import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegUser } from "react-icons/fa";

import { setUserType, selectUserType } from "../features/dynamicDropSlice";
import Button from "./button";
import InputField from "./inputField";

export default function Field() {
  const dispatch = useDispatch();
  const userType = useSelector(selectUserType);
  const [but, setBut] = useState(true);
  const [butType, setButType] = useState(false);

  const handleSelect = (e) => {
    dispatch(setUserType(e.target.value));
    setBut(false);
  };

  const list = ["Please select any", "Student", "Self-employed", "Business"];

  return (
    <div>
      <div className="space-y-2 flex flex-col items-center justify-center w-screen">
        <h1 className="text-gray-500 text-sm">Add Dynamic Fields</h1>
        <div className="w-fit p-2 rounded-lg bg-blue-600 flex items-center">
          <FaRegUser className="inline-block mr-2 text-white" />
          <select
            value={userType}
            onChange={handleSelect}
            className="bg-blue-600 p-2 outline-none text-white"
          >
            {list.map((item, index) => (
              <option key={index} value={item} className="">
                <div className="">{item}</div>
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-10 flex-between p-3">
          <Button but={but} setBut={setBut} setButType={setButType} />
          {butType ? (
            <>
              <p className="underline">
                On Select of field type in the drop down the data collection
                <br />
                fields will be displayed dynamically as below{" "}
              </p>
            </>
          ) : (
            <div className="underline">
              Select the field you want to generate first
            </div>
          )}
        </div>
        {butType ? (
          <div className="">
            <InputField />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
