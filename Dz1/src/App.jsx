import "./App.css";

function App() {
  const currentYear = new Date().getFullYear(); // Императивный стиль

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Декларативный стиль */}
        <p>Current Year: {currentYear}</p>
      </header>
    </div>
  );
}

export default App;
