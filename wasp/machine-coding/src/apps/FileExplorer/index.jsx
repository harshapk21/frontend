import React, { useState, useRef } from "react";

export default function List({ list, saveData }) {
  const [showInput, setShowInput] = useState("");
  const [showInputOptions, setShowInputOptions] = useState("");
  const [optionType, setOptionType] = useState("");
  const [openFolder, setOpenFolder] = useState([]);
  const handleSave = (parentId) => {
    let isFolder = optionType === "folder" ? true : false;
    let data = {
      title: document.querySelector(`[data-id="${parentId}"]`).value,
      isFolder,
      parentId,
    };
    if (isFolder) data.children = [];
    saveData(data);
    setShowInput(false);
    setShowInputOptions(false);
    setOptionType("");
  };
  return (
    <div>
      {list.map((item) => {
        const isExpanded = openFolder.includes(item.id);
        return (
          <div style={{ marginLeft: "1em", marginTop: "10px" }}>
            <div style={{ display: "flex" }}>
              {item?.isFolder ? (
                <button
                  style={{ margin: "0 5px" }}
                  onClick={() => {
                    if (isExpanded) {
                      setOpenFolder((openFolder) =>
                        openFolder.filter((folderId) => folderId !== item.id)
                      );
                    } else {
                      setOpenFolder((openFolder) => {
                        return [...openFolder, item.id];
                      });
                    }
                  }}
                >
                  {isExpanded ? "^" : ">"}
                </button>
              ) : null}
              <span>{item?.title}</span>
              {item?.isFolder ? (
                <div style={{ position: "relative" }}>
                  <button
                    onClick={() => !showInput && setShowInputOptions(item.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    +
                  </button>
                  {showInputOptions === item.id && (
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "20px",
                        backgroundColor: "white",
                        border: "1px solid black",
                        fontSize: "small",
                        width: "100px",
                        zIndex: "1",
                      }}
                      onClick={(e) => {
                        console.log(e.target.dataset.name, "name");
                        setShowInput(item.id);
                        setOptionType(e.target.dataset.name);
                        setShowInputOptions("");
                      }}
                    >
                      <p
                        role="button"
                        aria-label="create file"
                        data-name="file"
                      >
                        File
                      </p>
                      <p
                        role="button"
                        aria-label="create folder"
                        data-name="folder"
                      >
                        Folder
                      </p>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
            {showInput === item.id && (
              <>
                <input
                  style={{ margin: "1.2em" }}
                  aria-label="new-item"
                  aria-invalid={true}
                  data-id={item.id}
                />
                <button onClick={() => handleSave(item.id)}>Save</button>
                <button onClick={() => setShowInput(false)}>Discard</button>
              </>
            )}
            {item?.isFolder && openFolder.includes(item.id) && (
              <List list={item?.children} saveData={saveData} />
            )}
          </div>
        );
      })}
    </div>
  );
}
