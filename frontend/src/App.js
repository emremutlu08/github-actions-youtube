import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/names");
    console.log(response, "response");
    setUserName(response.data);
  };

  return <div>Username: {userName}</div>;
}

export default App;
