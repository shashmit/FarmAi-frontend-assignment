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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-10">
        <select
          value={realList.name}
          onChange={handleSelect}
          className="p-2 border-2 border-black rounded-lg"
        >
          <option value="">Select</option>
          <option value="Student">Student</option>
          <option value="Self-employed">Self-Employed</option>
          <option value="Business">Business</option>
        </select>
      </div>
      <Dropdown lord={stit} />
    </div>
  );
}
