import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/caroline-flora-knight-48a24b118">
            Caroline Knight
          </a>{" "}
          and is open-sourced on{" "}
          <a href="https://github.com/carolineflora95/react-dictionary-app">
            Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
