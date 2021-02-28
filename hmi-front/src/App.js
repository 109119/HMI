import React, {useState, useEffect} from 'react';
import './App.css';
import {ReactComponent as HMIFrame} from './hmi.svg';

function App() {
  const [lastVoltIn1, setLastVoltIn1] = useState("");
  const [lastVoltIn2, setLastVoltIn2] = useState("");
  const [newVoltIn1, setVoltIn1] = useState("");
  const [newVoltIn2, setVoltIn2] = useState("");
  const [newState1, setState1] = useState(0);
  const [newState2, setState2] = useState(0);

  useEffect(() => {
    getVoltIn();
    getNum();
  }, []);

  const handleNewVoltIn1 = (e) => setVoltIn1(e.currentTarget.value);
  const handleNewVoltIn2 = (e) => setVoltIn2(e.currentTarget.value);
  const handleNewState1 = () => addState(1);
  const handleNewState2 = () => addState(2);
  const handleNewVoltSub = (event) => {
    if (event.key === 'Enter') {
      addVoltIn();
      alert("Input has been saved");
    }
  }
  

  function getVoltIn() {
    fetch('http://localhost:3001/voltIn')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setLastVoltIn1(data[data.length-1].voltin1);
        setVoltIn1(data[data.length-1].voltin1);
        setLastVoltIn2(data[data.length-1].voltin2);
        setVoltIn2(data[data.length-1].voltin2);
      });
  }

  function getNum() {
    fetch('http://localhost:3001/num')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setState1(data[data.length-1].state1);
        setState2(data[data.length-1].state2);
      });
  }

  function addVoltIn() {
    let voltIn1 = newVoltIn1;
    let voltIn2 = newVoltIn2;
    fetch('http://localhost:3001/voltIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({voltIn1, voltIn2}),
      })
      .then(response => {
        return response.text();
      })
      .then(data => {
        getVoltIn();
      });
  }

  function addState(num) {
    let state1 = newState1;
    let state2 = newState2;

    if(num==1){
      state1 = (newState1==1 ? 0 : 1);
    }
    else if(num==2){
      state2 = (newState2==1 ? 0 : 1);
    }
    
    fetch('http://localhost:3001/num', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({state1, state2}),
      })
      .then(response => {
        return response.text();
      })
      .then(data => {
        getNum();
      });
  }

  return (
    <div>      
      <svg width="1000" height="400" style={{ fill: '#0066CC' }}>
        <HMIFrame />

        <foreignObject x="24%" y="13%" width="60" height="50">
          <form onClick={e => {e.preventDefault();}}>
            <button className="output-size">{lastVoltIn1}</button>
          </form><br/>
        </foreignObject>
        
        <foreignObject x="64%" y="13%" width="60" height="50">
        <form onClick={e => {e.preventDefault();}}>
            <button className="output-size">{lastVoltIn2}</button>
          </form><br/>
        </foreignObject>

        <foreignObject x="48%" y="10%" width="60" height="50">
          <form onSubmit={e => {e.preventDefault();}}>
            <input type="text" className="input-size" onChange={handleNewVoltIn1} onKeyDown={handleNewVoltSub} placeholder={newVoltIn1}/>
          </form><br/>
        </foreignObject>

        <foreignObject x="88%" y="10%" width="60" height="50">
          <form onSubmit={e => {e.preventDefault();}}>
            <input type="text" className="input-size" onChange={handleNewVoltIn2} onKeyDown={handleNewVoltSub} placeholder={newVoltIn2}/>
          </form><br/>
        </foreignObject>
        
        <foreignObject x="6%" y="50%" width="50" height="50">
          <form onClick={e => {e.preventDefault();}}>
            <button className={newState1===0 ? "button-size1" : "button-size2" } onClick={handleNewState1}></button>
            {" " + newState1}
          </form><br/>      
        </foreignObject>

        <foreignObject x="45.4%" y="50%" width="50" height="50">
          <form onClick={e => {e.preventDefault();}}>
            <button className={newState2===0 ? "button-size1" : "button-size2" } onClick={handleNewState2}></button>
            {" " + newState2}
          </form>
        </foreignObject>
      </svg>
    </div>
  );
}
export default App;