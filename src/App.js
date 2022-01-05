import React,{useRef,useEffect} from "react";
import "./App.css";
import WebWorker from "./workerSetup";
import webWorker from "./webWorker";

function App() {
  let worker = undefined;

  const hr = useRef(0);
  const min = useRef(0);
  const sec = useRef(0);
  useEffect(() => {
   hr.current.innerText = parseInt(0);
   min.current.innerText = parseInt(0);
   sec.current.innerText = parseInt(0);
  }, [])

  const onStart = () => {
    if (typeof (Worker !== undefined)) {
      if (typeof (worker === undefined)) {
        worker = new WebWorker(webWorker)
        worker.onmessage =  (event) => {
              hr.current.innerText = event.data.hr
              min.current.innerText = event.data.min
              sec.current.innerText = event.data.sec
          };
      }
    }
  }

  const onStop = () => {
   worker.terminate();
   worker = undefined;
  }

  const onReset = () => {
    worker.terminate();
    worker = undefined;
    hr.current.innerText = parseInt(0);
   min.current.innerText = parseInt(0);
   sec.current.innerText = parseInt(0);

   }
 
  return (
    <div className="App">
      <div id="stopwatch">
      <div ref={hr}/> : <div ref={min} /> : <div ref={sec}/>
      </div>
      <div id="buttons">
      <button  onClick={() => onStart()}>Start</button>
      <button onClick={() => onStop()}>Stop</button>
      <button onClick={() => onReset()}>reset</button>
      </div>
    </div>
  );
}

export default App;
