import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
function App() {
  return (
    <div className="bg-transparent ">
      <Header />
      <Home/>
    </div>
  );
}

export default App;
