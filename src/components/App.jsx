import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function renderItem(item) {
  return (
    <Entry
      key={item.id}
      id={item.name}
      name={item.name}
      emoji={item.emoji}
      meaning={item.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(renderItem)}</dl>
    </div>
  );
}

export default App;
