import { useSelector, useDispatch } from "react-redux";
import { realField, selectUserType } from "../features/dynamicDropSlice";
import { useState } from "react";
import View from "./view";

export default function InputField() {
  const dispatch = useDispatch();
  const userType = useSelector(selectUserType);
  const [stat, setStat] = useState(false);
  const [fieldVisibility, setFieldVisibility] = useState(false);

  const [formData, setFormData] = useState({
    userType: userType,
    displayName: "Name",
    name: "Text",
    fieldType: "String",
    validation: "",
    mandatory: "No",
    fieldData: [],
  });

  const handleSelectChange = (e) => {
    const selectField = e.target.value;
    setFormData({
      ...formData,
      name: selectField,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(realField(formData));
    setFormData({
      userType: userType,
      displayName: "Name",
      name: "Text",
      fieldType: "String",
      validation: "",
      mandatory: "No",
      fieldData: [],
    });
    setStat(!stat);
    setFieldVisibility(true);
  };

  const display = ["Dropdown", "Text", "Date"];
  const dataType = ["String", "Number", "Date"];
  const mandatory = ["Yes", "No"];

  return (
    <div className="space-y-5 flex flex-col">
      <form onSubmit={handleSubmit} className="flex gap-x-8">
        <div className="flex flex-col gap-2 ">
          <label>Field Type</label>
          <select
            value={formData.name}
            onChange={handleSelectChange}
            className="bg-slate-600 p-2 outline-none text-white rounded-md pr-6"
          >
            {display.map((field, index) => (
              <option key={index} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 ">
          <label>Field Name</label>
          <input
            type="text"
            placeholder={formData.displayName}
            className="p-1"
            onChange={(e) =>
              setFormData({ ...formData, displayName: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Field Data Type</label>
          <select
            value={formData.fieldType}
            onChange={(e) =>
              setFormData({ ...formData, fieldType: e.target.value })
            }
            className="bg-blue-600 p-2 outline-none text-white rounded-md pr-6"
          >
            {dataType.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label>Field Validation</label>
          <input
            type="number"
            className="p-1"
            placeholder={formData.validation}
            value={formData.validation}
            onChange={(e) =>
              setFormData({ ...formData, validation: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Mandatory</label>
          <select
            value={formData.mandatory}
            onChange={(e) =>
              setFormData({ ...formData, mandatory: e.target.value })
            }
            className="bg-blue-600 p-2 outline-none text-white rounded-md pr-6"
          >
            {mandatory.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label>Field Data</label>
          {formData.name === "Dropdown" ? (
            <>
              <small>Enter comma-separated values for Dropdown</small>
              <input
                type="text"
                className="p-1"
                placeholder="Enter the field data"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fieldData: e.target.value.split(","),
                  })
                }
              />
            </>
          ) : (
            <input
              type="text"
              className="p-1"
              placeholder="Enter the field data"
              onChange={(e) =>
                setFormData({ ...formData, fieldData: e.target.value })
              }
            />
          )}
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="border-2 bg-transparent p-1 px-3 border-black rounded-lg"
          >
            Confirm
          </button>
        </div>
      </form>
      {fieldVisibility && <View stat={stat} userType={userType} />}
    </div>
  );
}
