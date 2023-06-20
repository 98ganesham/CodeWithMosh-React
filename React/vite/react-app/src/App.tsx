import { useState } from "react";
import Alert from "./1.Building Components/Components/Alert";
import Buttons from "./1.Building Components/Components/Buttons";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Buttons color="info" onClick={() => setAlertVisibility(true)}>
        My Button
      </Buttons>
    </div>
  );
}
export default App;
