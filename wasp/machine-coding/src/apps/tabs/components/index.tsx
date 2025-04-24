import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  KeyboardEvent,
  ReactElement,
} from "react";

type TabsContextType = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

const useTabsContext = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("Tabs components must be used within <Tabs>");
  }
  return ctx;
};

type TabsProps = {
  children: ReactNode;
  defaultIndex?: number;
};

export const Tabs = ({ children, defaultIndex = 0 }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div role="tablist">{children}</div>
    </TabsContext.Provider>
  );
};

type TabsListProps = {
  children: ReactNode;
};

function List({ children }: { children: ReactNode }) {
  return (
    <div role="tablist">
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<{ index?: number }>, {
            index,
          });
        }
        return child;
      })}
    </div>
  );
}

type TabsTriggerProps = {
  children: ReactNode;
  index?: number;
};

function Trigger({ children, index }: TabsTriggerProps) {
  const { activeIndex, setActiveIndex } = useTabsContext();
  const isSelected = activeIndex === index;

  if (index === undefined) {
    throw new Error("Tabs.Trigger must receive an index via Tabs.List");
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight") {
      setActiveIndex((prev) => prev + 1);
    } else if (e.key === "ArrowLeft") {
      setActiveIndex((prev) => Math.max(0, prev - 1));
    }
  };

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      aria-controls={`panel-${index}`}
      id={`tab-${index}`}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => setActiveIndex(index)}
      onKeyDown={handleKeyDown}
    >
      {children}
    </button>
  );
}

type TabsPanelProps = {
  children: ReactNode;
  index?: number;
};

function Panel({ children, index }: TabsPanelProps) {
  const { activeIndex } = useTabsContext();

  if (index === undefined) {
    throw new Error("Tabs.Panel must receive an index via Tabs.List");
  }

  const isSelected = activeIndex === index;

  return (
    <div
      role="tabpanel"
      hidden={!isSelected}
      id={`panel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {isSelected && children}
    </div>
  );
}

type TabsListCompoundProps = {
  children: ReactNode;
};

function ItemList({ children }: TabsListCompoundProps) {
  return (
    <>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<{ index?: number }>, {
            index,
          });
        }
        return child;
      })}
    </>
  );
}

// Compound exports
Tabs.List = ({ children }: { children: ReactNode }) => (
  <List>
    <ItemList>{children}</ItemList>
  </List>
);
Tabs.Trigger = Trigger;
Tabs.Panel = Panel;
