function App() {

  const someFunc = () => {
    return console.log(2 + 3);
  };

  return (
    <div className="App">
      <div>
        <button onClick={someFunc}>ADD</button>
      </div>
    </div>
  );
}

export default App;
