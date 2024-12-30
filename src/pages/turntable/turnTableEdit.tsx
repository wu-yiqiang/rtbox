import "@/styles/TurntableEdit.scss";
import { useState, useEffect } from "react";
import { RTBOX } from "@/common/enums.ts";
import { getCache } from "@/utils/getCache.ts";
import { isEmpty } from "lodash-es";
function TurntableEdit(props: any) {
  const [parts, setparts] = useState([]);
  useEffect(() => {
    if (!isEmpty(getCache(RTBOX))) setparts(getCache(RTBOX));
  }, []);
  const handleAdd = () => {
    setparts(parts.concat([{ background: "", fonts: [{ text: "" }] }]));
  };
  const handleSave = () => {};
  return (
    <div className="TurntableEdit">
      <div className="add" onClick={handleAdd}>
        Save
      </div>
      {parts.map((item) => {
        return <div className="item">item</div>;
      })}
      <div className="save" onClick={handleSave}>
        Save
      </div>
    </div>
  );
}

export default TurntableEdit;
