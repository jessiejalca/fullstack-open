const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

// Usually there's a root component called App at the top of the component tree of a given application
const App = () => {
  // Any JS code can run in component functions
  console.log("Hello from component");
  const name = "Peter";
  const age = 21;

  // We can also render dynamic content inside components
  return (
    // We can use fragments to avoid "extra" div elements in the DOM
    <>
      <h1>Greetings</h1>
      {/* Components can be used multiple times & combined in other components */}
      <Hello name={name} age={age} />
      {/* Use { } to embed content in the JSX/HTML */}
      <Hello name="Maya" age={26 + 10} />
    </>
  );
};

export default App;
