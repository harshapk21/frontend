import React, { useState } from "react";
import List from "./components";
import "./style.css";

export default function FileExplorer() {
  const [state, setState] = useState([
    {
      id: "1",
      children: [
        {
          id: "1.1",
          children: [
            {
              id: "1.1.1",
              children: [],
              title: "root2 - file",
              isFolder: false,
            },
          ],
          title: "root1.1",
          isFolder: true,
        },
        {
          id: "1.2",
          children: [
            {
              id: "1.2.1",
              children: [],
              title: "root2 - file",
              isFolder: false,
            },
          ],
          title: "root1.2",
          isFolder: true,
        },
      ],
      title: "root",
      isFolder: true,
    },
  ]);

  const saveData = (data) => {
    const path = data.parentId.split(".");
    const parent = path.reduce((acc, curr) => {
      return acc.children[curr - 1];
    }, state[path.shift() - 1]);
    let id = data.parentId + "." + (parent.children.length + 1);
    parent.children.push({
      id,
      ...data,
    });
    setState(state);
  };
  return (
    <div>
      <List list={state} saveData={saveData} />
    </div>
  );
}
