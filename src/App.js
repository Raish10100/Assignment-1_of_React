import './App.css';
import  Button  from './Button';
import Header from './Header';
import List from './List';
import Onclick  from './Onclick';
import  Person  from './Person';

function App() {
  
  return (

    <div className="App">

     <h1 className="mainTitle title">Assignment Of Walkthrough With React-1</h1>
     <hr />

{/*//? Problem Statement --> Create a component named "Person" that takes two props - "name" and "age". The component should display the person's name and age in a paragraph element */}
{/*//* Problem Statement-1 Solution */}
      <h2 className="subTitle title">Problem Statement-1 Solution</h2>
      <Person name="Raish" age="18" />
      <hr />

{/*//? Problem Statement -->Create a component named "Button" that takes two props - "text" and "onClick". The component should display a button element with the given text and call the onClick function when clicked  */}
{/*//* Problem Statement-2 Solution */}
      <h2 className="subTitle title">Problem Statement-2 Solution</h2>
      <Button text="Click" onClick={Onclick} />
      <hr/>

{/*//? Problem Statement -->Create a component named "Header" that takes one prop - "title". The component should display a header element with the given title.*/}
{/*//* Problem Statement-3 Solution */}
      <h2 className="subTitle title">Problem Statement-3 Solution</h2>
      <Header headerTitle="Welcome to My App" />
      <hr/>

{/*//? Problem Statement -->Create a component named "List" that takes one prop - "items". The component should display an unordered list element with the given list items*/}
{/*//* Problem Statement-4 Solution */}
      <h2 className="subTitle title">Problem Statement-4 Solution</h2>
      <List items={["Item 1","Item 2","Item 3"]} />
       
     
      <hr/>

    </div>
  );
}

export default App;
