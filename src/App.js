import { useState } from "react";
import './App.css'

function Library() {
  const [data, setmydata] = useState([]);

  const getAPI = () => {
    const headers = {'Authorization': "Bearer your-api-key-123"};
    fetch("https://the-one-api.dev/v2/", { headers })
    .then((Response) => Response.json())
    .then((json) => {
      console.log(json);
      setmydata(json);
    })
  }
  return (
    <div>
      <button onClick={getAPI}>Fetch API</button>
      {JSON.stringify()}
    </div>
  );
}




function App() {

}

export default App;
