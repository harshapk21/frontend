import React, { useState, useRef, useEffect } from "react";

export default function CustomSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(0);
  const buttonRef = useRef(null);
  const listRef = useRef(null);
  const options = ["India", "United States", "Japan"];

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleOptionClick = (option: string) => {
    setSelected(option);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev - 1 + options.length) % options.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleOptionClick(options[focusedIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
      buttonRef.current?.focus();
    }
  };

  // 🧼 Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        listRef.current &&
        !listRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) {
      listRef.current
        ?.querySelectorAll('[role="option"]')
        [focusedIndex]?.focus();
    }
  }, [focusedIndex, open]);

  return (
    <div>
      <button
        ref={buttonRef}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="country-listbox"
        onClick={toggleDropdown}
      >
        {selected || "Select a country"}
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          id="country-listbox"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          style={{
            border: "1px solid #000",
            padding: "0.5rem",
            marginTop: "5px",
          }}
        >
          {options.map((option, index) => (
            <div
              key={option}
              role="option"
              aria-selected={focusedIndex === index}
              tabIndex={-1}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: "4px",
                background: focusedIndex === index ? "#ddd" : undefined,
                cursor: "pointer",
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
