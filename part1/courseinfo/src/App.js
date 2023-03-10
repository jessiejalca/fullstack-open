const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => (
  <p>
    {props.part} {props.exercise}
  </p>
);

const Total = (props) => (
  <p>
    Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}
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
      <Total
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />
    </>
  );
};

export default App;
