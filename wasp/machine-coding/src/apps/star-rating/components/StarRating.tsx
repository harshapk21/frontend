import { useState } from "react";
import "./star-rating.css";

const SATISFACTION_INDEX_DESC: Record<number, string> = {
  "-1": "",
  0: "Very Bad",
  1: "Bad",
  2: "Okayish",
  3: "Good",
  4: "Great",
};

const SATISFACTION_INDEX_COLOR: Record<number, string> = {
  "-1": "",
  0: "red",
  1: "orange",
  2: "yellow",
  3: "lawngreen",
  4: "ForestGreen",
};

export const Rating = ({
  rating,
  setRating,
  limit = 5,
}: {
  rating: number;
  setRating: (rating: number) => void;
  limit?: number;
}) => {
  const [hoverId, setHoverId] = useState<number>(-1);
  // observe syntax for style prop , key: value (key is mostly auto-suggestion & no need quotes, value is quote based)
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        {Array.from({ length: limit }).map((_, index) => {
          const star = hoverId >= index;
          return (
              <button
                key={index}
                className={`${star ? "star" : ""} ${
                  index === hoverId ? "active" : ""   // can dynamically add multiple class names , observe syntax only 1 {}
                }`}
                onClick={() => setRating(index)}
                data-hover-desc={SATISFACTION_INDEX_DESC[hoverId]} // You can add data-* property & can access its value in css file using attr(direct name no quotes) , very handy
                onMouseEnter={() => setHoverId(index)} // Mouse Enter, Mouse Leave events are only triggered only once in the mouse journey within parent-child containers, 
                onMouseLeave={() => setHoverId(rating)} // Mouse Over, Mouse Out - (OohOoh) events bubble up everytime mouse is over/out of a child in container.
                style={{
                  "--dynamic-bg-color": SATISFACTION_INDEX_COLOR[hoverId],
                  "--dynamic-hover-desc": `"${SATISFACTION_INDEX_DESC[hoverId]}"`, // If content of pseudo ele needs to be passed dynamically , wrap it with quotes as shown else it wont work. this syntax can also be used else where if needed.
                  "--dynamic-hover-index": hoverId, // Observe how we are passing dynamic data to as many css variables as possible , observe syntax , variable is wrapped in "" & value is dynamic
                }} // Observe style syntax , it's like accepting object i.e {{}}
              >
                &#9734;
                <p className="star-description">
                  {SATISFACTION_INDEX_DESC[hoverId]}
                </p>
              </button>
          );
        })}
      </div>
      <p // Since this is a flex container , i realised i could use marginTop/Bottom: auto to make flex item align vertically & it worked
        // Also give line items to items so that there is no height irregularities atleast w.r.t layout
        style={{ marginTop: "auto", marginBottom: "auto", lineHeight: "25px" }}
      >
        {SATISFACTION_INDEX_DESC[hoverId]}
      </p>
    </div>
  );
};
