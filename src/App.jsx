import "./App.css";
import Counter from "./counter";

import Friends from "./friends";
import Team from "./team";
import User from "./user";


function App() {

  // function handleClick() {
  //   alert("clicked");
  // }
 
  // const handleClickAgain = () => {
  //   alert("clicked again");
  // }


  // const handleClickFourth = (num) => {
  //   alert(num + 5);
  // }
  

  return (
    <>
      <h3>React core concepts</h3>
      <Friends></Friends>
      
      <User></User>
      <Counter></Counter>
      <Team></Team>
      
      {/* <button onClick={handleClick}>Click me</button>
      <button onClick={handleClickAgain}>Click again</button>
      <button onClick={ () => {alert("clicked again again")}}>Click again again</button>
      <button onClick={ () => handleClickFourth(5)}>Click fourth</button> */}
    </>
  );
}

export default App;
