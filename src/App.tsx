import { useState } from "react";
import Section from "./Section";

export default function App() {
  const [sections, setSections] = useState<Array<any>>([
    "1",
    "2",
    "3",
  ]);
  const [newSection,setNewSection] = useState<any>();

  function createSection(e: any) {
    e.preventDefault()
    if (newSection === "") return

    setSections(sections => [...sections, newSection])

    setNewSection("")
  }

  return (
    <div className="wraper">
      {sections.map((sect) => {
        return <Section>{sect}</Section>;
      })}
      {sections.length < 5 && (
        <form onSubmit={createSection}>
          <h2>add section</h2>
          <input value={newSection} onChange={e => setNewSection(e.target.value)} type="text"></input>
          <button>Add</button>
        </form>
      )}
    </div>
  );
}
