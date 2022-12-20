const App = () => {
  // Any JS code can run in component functions
  console.log("Hello from component");
  const now = new Date();
  const a = 10;
  const b = 20;

  // We can also render dynamic content inside components
  // Use { } to embed content in the HTML
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};

export default App;
