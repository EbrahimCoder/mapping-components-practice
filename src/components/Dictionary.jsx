import React from "react";
import Entry from "./Entry";

function renderItem(item) {
  return (
    <Entry
      id={item.name}
      name={item.name}
      emoji={item.emoji}
      meaning={item.meaning}
    />
  );
}

function Dictionary(prop) {
  return (
    <dl className="dictionary">
      {prop.items.map(renderItem)}
      {/* <Entry /> */}
    </dl>
  );
}

export default Dictionary;
