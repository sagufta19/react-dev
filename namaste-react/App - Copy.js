//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<h1>Hello, world!</h1>);
const heading = (
    <h1 id="h1" key="h1">
      This is JSX
    </h1>
  );
  const Title = () => {
    return (
      <h1 id="title" key="title">Namaste React in h1  tag</h1>
    )
  }
  const HeaderComponent = function (){
    return (
      <div>
        <Title/>
        {/* we can also use <Title()> */}
        {/* we can also use <Title></Title> */}
        {console.log(10)}
      <h1>Namaste React Functional component</h1>
      <h2>This is h2 tag</h2>
      </div>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);  