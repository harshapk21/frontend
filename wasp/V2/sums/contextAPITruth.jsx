import React, {
  createContext,
  useContext,
  memo,
  useState,
  useCallback,
  useEffect,
} from "react";

export default function App() {
  return (
    <ToastProvider>
      <ReRenderLogger />
      <PageContent />
    </ToastProvider>
  );
}

const ToastContext = createContext();

export const ToastProvider = memo(({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "info", duration = 3000) => {
    const id = message;
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  /**
   * Generally everytime when a parent is re-rendered , all its children gets re-rendered but In this case , children(i.e entire application) won't 
   * get re-rendered bcos these children are not defined here but else where , this component just receives reference of that through props , as along 
   * as the main app won't re-render due to cascading effect , it won't re-render due to state change within provider component.
   * But any component which is defined within will re-render ex: Toast , you have to save it with React.memo
   */
  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <div className="toast-wrapper">
        {toasts.map((toast) => (
          <div key={toast.id} timeout={300} classNames="toast" unmountOnExit>
            <Toast {...toast} removeToast={removeToast} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
});

const Toast = memo(({ id, message, type, duration, removeToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => removeToast(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, removeToast]);

  return (
    <div
      style={{ position: "fixed", top: 0, right: 0 }}
      className={`toast toast-${type}`}
    >
      <span>{message}</span>
      <button onClick={() => removeToast(id)} className="toast-close">
        ×
      </button>
    </div>
  );
});

export const useToast = () => useContext(ToastContext);

function ReRenderLogger() {
  useEffect(() => {
    console.log("Main app content rendered!");
  });

  return null;
}

function PageContent() {
  const { showToast } = useToast();

  return (
    <div className="app-content">
      <h1>Toast Notification Test</h1>
      <button onClick={() => showToast("Default toast!")}>
        Show Default Toast
      </button>
      <button onClick={() => showToast("Success!", "success", 2000)}>
        Show Success Toast
      </button>
      <button onClick={() => showToast("Error!", "error", 5000)}>
        Show Error Toast
      </button>
    </div>
  );
}
