// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import PassphraseForm from "./components/PassphraseForm";
import { AppContextProvider } from "./components/store/AppContext";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <h1>entry: 123</h1>
        <div>
          <Routes>
            <Route path="/" element={<PassphraseForm />} />
            <Route path="/content" element={<Content />} />
          </Routes>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
