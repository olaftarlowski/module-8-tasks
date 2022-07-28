// import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import Movies from "./components/Movies";
import PassphraseForm from "./components/PassphraseForm";
import Places from "./components/Places";
import { AppContextProvider } from "./components/store/AppContext";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <h1>entry: 123</h1>
        <div>
          <nav style={{ marginBottom: 24 }}>
            <Link
              to="/"
              style={{ margin: 20, padding: 12, border: "1px solid lightgray" }}
            >
              home
            </Link>
            <Link
              to="/content"
              style={{ margin: 20, padding: 12, border: "1px solid lightgray" }}
            >
              content
            </Link>
            <Link
              to="/movies"
              style={{ margin: 20, padding: 12, border: "1px solid lightgray" }}
            >
              movies
            </Link>
            <Link
              to="/places"
              style={{ margin: 20, padding: 12, border: "1px solid lightgray" }}
            >
              places
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<PassphraseForm />} />
            <Route path="/content" element={<Content />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/places" element={<Places />} />
          </Routes>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
