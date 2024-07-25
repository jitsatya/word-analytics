import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ setText, text }) {
  const [warning, setWarning] = useState("");
  const handleChange = (event) => {
    if (event.target.value.includes("<script>")) {
      setWarning("<script> tags are not allowed");
      setText(event.target.value.replace("<script>", ""));
      return;
    } else if (event.target.value.includes("@")) {
      setWarning("@symbols are not allowed");
      setText(event.target.value.replace("@", ""));
      return;
    } else {
      setWarning("");
    }
    setText(event.target.value);
  };
  return (
    <div className="textarea">
      <textarea
        onChange={handleChange}
        value={text}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warning && <Warning message={warning} />}
    </div>
  );
}
