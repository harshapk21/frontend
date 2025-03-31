import React, { useState, useCallback, useEffect, useRef } from "react";
import { debounce } from "./utils/debounce";
import { SuggestionList } from "./components/suggestion-list";
import { useCache } from "./hooks";

export default function AutoComplete() {
  const [inputValue, setInputValue] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { getCache, setCache } = useCache();
  const suggestionsContainerRef = useRef(null);

  useEffect(() => {
    const container = suggestionsContainerRef.current;
    const nodeList = container?.children;
    nodeList?.[selectedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    console.log(selectedIndex, nodeList?.[selectedIndex], "index-list");
  }, [selectedIndex]);

  const getSuggestions = async (value) => {
    if (getCache(value)) {
      setSuggestionsList(getCache(value));
      return;
    }
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${value}`);
    const result = await res.json();
    setCache(value, result.recipes);
    setSuggestionsList(result.recipes);
    setSelectedIndex(-1);
  };

  const debounedGetSuggestions = useCallback(debounce(getSuggestions), []);

  const handleChange = (value) => {
    setInputValue(value);
    debounedGetSuggestions(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((index) => index + 1);
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((index) => index - 1);
    }
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      {suggestionsList?.length ? (
        <SuggestionList
          suggestionsList={suggestionsList}
          ref={suggestionsContainerRef}
          selectedIndex={selectedIndex}
        />
      ) : null}
    </>
  );
}
