
import { useState } from "react";

import ThemeProvider from "./context/ThemeContext";

import Loader from "./components/Loader/Loader";
import Home from "./pages/Home";

function App() {

  const [loading, setLoading] = useState(true);

  return (

    <ThemeProvider>

      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      {!loading && (
        <Home />
      )}

    </ThemeProvider>

  );

}

export default App;