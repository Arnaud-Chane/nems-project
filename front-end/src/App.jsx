import { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState("");

  const API_URL = "http://localhost:8000/message";

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  },[]);

  return (
    <div className="App">
      <h1 className="message">{message}</h1>
    </div>
  )
}

export default App;