import React from "react";
let a = {};
function App() {
  let time = new Date().toLocaleTimeString();
  const [t, up] = React.useState(time);

  function update() {
    const newTime = new Date().toLocaleTimeString();
    up(newTime);
  }
  function run() {
    a = setInterval(update, 1000);
  }
  function stop() {
    clearInterval(a);
  }

  return (
    <div className="container">
      <h1>{t}</h1>
      <button onClick={update}>Get Time</button>
      <button onClick={run}>Run Time</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}

export default App;
