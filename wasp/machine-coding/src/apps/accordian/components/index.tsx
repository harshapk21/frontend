// Compound Accordion with a11y and TypeScript
import React, {
  createContext,
  useContext,
  useState,
  Children,
  cloneElement,
  ReactNode,
  ReactElement,
} from "react";

// ---------- Accordion Types ----------
type AccordionContextType = {
  openIndexes: number[];
  toggleIndex: (index: number) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);
const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx)
    throw new Error("Accordion subcomponents must be used within <Accordion>");
  return ctx;
};

const AccordionRoot = ({
  children,
  allowMultiple = false,
}: {
  children: ReactNode;
  allowMultiple?: boolean;
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : allowMultiple
        ? [...prev, index]
        : [index]
    );
  };

  return (
    <AccordionContext.Provider value={{ openIndexes, toggleIndex }}>
      <div role="presentation">
        {Children.map(children, (child, index) =>
          React.isValidElement(child) ? cloneElement(child as ReactElement<{ index?: number }>, { index }) : child
        )}
      </div>
    </AccordionContext.Provider>
  );
};

const Item = ({ children, index }: { children: ReactNode; index: number }) => {
    return (
        <div>
            {Children.map(children, (child) =>
                React.isValidElement(child)
                    ? cloneElement(child as ReactElement<{ index?: number }>, { index }) // Add the 'index' prop to the cloneElement function call
                    : child
            )}
        </div>
    );
};

const Header = ({
  children,
  index,
}: {
  children: ReactNode;
  index?: number;
}) => {
  const { openIndexes, toggleIndex } = useAccordionContext();
  if (index === undefined) {
    throw new Error("Accordion.Header must be used within Accordion.Item");
  }

  const isOpen = openIndexes.includes(index);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleIndex(index);
    }
  };

  return (
    <button
      id={`accordion-header-${index}`}
      aria-controls={`accordion-panel-${index}`}
      aria-expanded={isOpen}
      onClick={() => toggleIndex(index)}
      onKeyDown={handleKeyDown}
      role="button"
    >
      {children}
    </button>
  );
};

const Panel = ({
  children,
  index,
}: {
  children: ReactNode;
  index?: number;
}) => {
  const { openIndexes } = useAccordionContext();
  if (index === undefined) {
    throw new Error("Accordion.Header must be used within Accordion.Item");
  }
  const isOpen = openIndexes.includes(index);

  return (
    <div
      id={`accordion-panel-${index}`}
      role="region"
      aria-labelledby={`accordion-header-${index}`}
      hidden={!isOpen}
    >
      {isOpen && children}
    </div>
  );
};

export const Accordion = Object.assign(AccordionRoot, {
  Item,
  Header,
  Panel,
});
