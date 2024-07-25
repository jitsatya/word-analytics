import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function MainContainer() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  // The last word will be '' so we have to remove that from the count
  const numberOfWords = text.split(" ").filter((word) => word !== "").length;
  return (
    <main className="container">
      <TextArea setText={setText} text={text} />
      <Stats
        numberOfCharacters={numberOfCharacters}
        numberOfWords={numberOfWords}
      />
    </main>
  );
}
