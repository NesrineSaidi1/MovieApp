import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";

function App() {
  const [text, settext] = useState("");
  const [rate, setrate] = useState("");
  return (
    <div>
      <NavBar settext={settext} setrate={setrate} />
      <MovieList text={text} rate={rate} />
    </div>
  );
}

export default App;
