import React, { useState, useRef, useEffect } from "react";
import { multiTabForm } from "./schema";

export default function TabbedForm() {
  const [tabs, setTabs] = useState([]);
  const [multiTabSchema, setMultiTabSchema] = useState({ ...multiTabForm });
  const [activeTabSchema, setActiveTabSchema] = useState({});
  const [activeTabIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setTabs(Object.keys(multiTabForm));
  }, [multiTabForm]);

  useEffect(() => {
    if (tabs.length) handleTabChange(tabs[activeTabIndex]);
  }, [activeTabIndex, tabs]);

  function handleTabChange(tab) {
    console.log(multiTabSchema, tab, "klm");
    setActiveTabSchema(multiTabSchema[tab]);
    //setFormItems(Object.values(multiTabForm[tab]));
  }

  const handleChange = (name, value) => {
    console.log(name, value);
    let temp = activeTabSchema[name];
    if (temp.isValid(value)) {
      temp.value = value;
    } else {
      temp.errorMsg = "something off";
    }
    setActiveTabSchema((activeTabSchema) => {
      return {
        ...activeTabSchema,
        [name]: temp,
      };
    });
  };

  return (
    <div>
      <nav style={{ display: "flex" }}>
        {tabs.map((tab, index) => (
          <button onClick={() => setActiveIndex(index)}>{tab}</button>
        ))}
      </nav>
      <main>
        {Object.values(activeTabSchema)?.map((formItem) => {
          switch (formItem.type) {
            case "input": {
              return (
                <>
                  <label>{formItem.label}</label>
                  <input
                    value={formItem.value}
                    onChange={(e) => {
                      handleChange(formItem.name, e.target.value);
                    }}
                  />
                </>
              );
            }
            case "select": {
              return (
                <>
                  <select
                    name="skill"
                    onChange={(e) => {
                      handleChange(formItem.name, e.target.value);
                    }}
                    value={formItem.value}
                  >
                    {formItem.options.map((option) => {
                      console.log(option);
                      return (
                        <option value={option.value}>{option.name}</option>
                      );
                    })}
                  </select>
                </>
              );
            }
            case "radio": {
              return (
                <fieldset>
                  <legend>{formItem.label}</legend>
                  {formItem.options.map((radioOption) => {
                    return (
                      <label>
                        <input
                          type="radio"
                          name="payment"
                          value={radioOption.value}
                          checked={radioOption.value === formItem.value}
                          onChange={(e) => {
                            handleChange(formItem.name, e.target.value);
                          }}
                        />
                        {radioOption.name}
                      </label>
                    );
                  })}
                </fieldset>
              );
            }
            default: {
              return "WIP";
            }
          }
        })}
      </main>
      <footer>
        <button
          disabled={!activeTabIndex}
          onClick={() => setActiveIndex((index) => index - 1)}
        >
          Prev
        </button>
        {activeTabIndex === tabs.length - 1 && <button>Submit</button>}
        {activeTabIndex !== tabs.length - 1 && (
          <button onClick={() => setActiveIndex((index) => index + 1)}>
            Next
          </button>
        )}
      </footer>
    </div>
  );
}
