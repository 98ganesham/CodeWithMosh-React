// import { useState } from "react";
// import ListGroup from "./2.Styling Components/ListGroup";
// import Buttons from "./1.Building Components/Components/Buttons";
// import Alert from "./1.Building Components/Exercise/Alert";
// import { BsFillCalendarFill } from "react-icons/bs";
// import Alert from "./1.Building Components/Components/Alert";
// import Buttons from "./1.Building Components/Components/Buttons";
import Like from "./2.Styling Components/Building A Like Component/Like";

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);
  // // const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <Like onClick={() => console.log("clicked")} />;
    </div>
  );
}
export default App;

// <div>
//   <BsFillCalendarFill color="lightgreen" />
// </div>
// app tsx for ListGroup
// <div>
//   <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
// </div>
// app tsx for MyAlert
// <div>
//   {alertVisible && (
//     <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
//   )}

//   <Buttons color="info" onClick={() => setAlertVisibility(true)}>
//     My Button
//   </Buttons>
//     // </div>
//   );
// }
// export default App;
