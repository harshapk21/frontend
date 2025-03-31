import React, { forwardRef } from "react";
import "./suggestion-list.css";
export const SuggestionList = forwardRef(
  ({ suggestionsList, selectedIndex }, ref) => {
    return (
      <div className="suggestion-list-container" ref={ref}>
        {suggestionsList?.map((suggestion, index) => {
          return (
            <div
              className={`suggestion-list-item ${
                index === selectedIndex ? "active" : ""
              }`}
            >
              {suggestion.name}
            </div>
          );
        })}
      </div>
    );
  }
);
