import { createRoot } from "react-dom/client";
import { useState } from "react";
import App from "./App.tsx";
import "./index.css";
import Preloader from "./components/Preloader.tsx";

const Main = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <App />
    </>
  );
};

createRoot(document.getElementById("root")!).render(<Main />);
