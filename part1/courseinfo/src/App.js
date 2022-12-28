const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => (
  <p>
    {props.part} {props.exercise}
  </p>
);

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  );
};

export default App;
