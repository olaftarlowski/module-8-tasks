import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Content,
  Movies,
  Navigation,
  PassphraseForm,
  Places,
} from "./components";
import { AppContextProvider } from "./components/store/AppContext";

function App() {
  const contentStyle = {
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
  };

  return (
    <AppContextProvider>
      <div className="App">
        <h1>entry: 123</h1>
        <div style={contentStyle}>
          <div>
            <Navigation />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<PassphraseForm />} />
              <Route path="/content" element={<Content />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/places" element={<Places />} />
            </Routes>
          </div>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
