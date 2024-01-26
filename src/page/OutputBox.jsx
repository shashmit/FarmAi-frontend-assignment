import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRealList } from "../features/dynamicDropSlice";
import Dropdown from "../component/dropdown";

export default function OutputBox() {
  const realList = useSelector(selectRealList);
  const [stit, setStit] = useState();

  const handleSelect = (e) => {
    setStit(e.target.value);
  };

  return (
    <>
      <select value={realList.userType} onChange={handleSelect}>
        <option value="Student">Student</option>
        <option value="Self-employed">Self-Employed</option>
        <option value="Business">Business</option>
      </select>
      <Dropdown lord={stit} />
    </>
  );
}
