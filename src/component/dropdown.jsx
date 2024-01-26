import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRealList, createField } from "../features/dynamicDropSlice";

export default function Dropdown({ lord }) {
  const realList = useSelector(selectRealList);
  const [state, setState] = useState([]);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const filteredItems = realList.filter((item) => item.userType === lord);
    setState(filteredItems);
  }, [lord]);

  const handleInputChange = (fieldName, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createField(form));
    alert("Data Submitted");
  };

  return (
    <div>
      {state.length > 0 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="border-2 border-gray-200 p-8 rounded-lg">
            {state.map((item, index) => (
              <div key={index} className="p-5">
                <div className="flex gap-3 justify-between">
                  <label className="flex items-center">
                    {item.displayName}
                  </label>
                  {item.name === "Dropdown" && (
                    <div>
                      <select
                        name={item.displayName}
                        onChange={(e) =>
                          handleInputChange(item.displayName, e.target.value)
                        }
                        className="border-2 border-gray-600 rounded-md"
                      >
                        {item.fieldData.map((data, dataIndex) => (
                          <option key={dataIndex}>{data}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  {item.name == "Text" && (
                    <div className="flex gap-3 justify-between items-center">
                      <input
                        type={item.fieldType === "Number" ? "number" : "text"}
                        placeholder={item.name.toLowerCase()}
                        required={item.mandatory.toLowerCase() === "yes"}
                        max={item.validation}
                        onChange={(e) =>
                          handleInputChange(item.displayName, e.target.value)
                        }
                        className="border-2 border-gray-600 rounded-md p-1"
                      />
                    </div>
                  )}
                  {item.name === "Date" && (
                    <div className="flex gap-3 justify-between">
                      <input
                        type="date"
                        min={item.dateRange.from}
                        max={item.dateRange.to}
                        onChange={(e) =>
                          handleInputChange("from", e.target.value)
                        }
                        className="rounded-md  border-gray-600"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="border-2 bg-transparent p-3 border-black rounded-lg w-fit self-center"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
