import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRealList,
  createField,
  selectCreateList,
} from "../features/dynamicDropSlice";

export default function Dropdown({ lord }) {
  const fList = useSelector(selectCreateList);
  const realList = useSelector(selectRealList);
  const [state, setState] = useState([]);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const filteredItems = realList.filter((item) => item.userType === lord);
    setState(filteredItems);
    console.log(filteredItems);
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
    console.log(fList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {state.map((item, index) => (
          <div key={index}>
            <div>
              <label>{item.displayName}</label>
              {item.name === "Dropdown" ? (
                <select
                  name={item.displayName}
                  onChange={(e) =>
                    handleInputChange(item.displayName, e.target.value)
                  }
                >
                  {item.fieldData.map((data, dataIndex) => (
                    <option key={dataIndex}>{data}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.fieldType}
                  placeholder={item.name.toLowerCase()}
                  onChange={(e) =>
                    handleInputChange(item.displayName, e.target.value)
                  }
                />
              )}
            </div>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
