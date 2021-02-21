import React, {useState, useEffect} from 'react';
import './App.css';
function App() {
  const [newVolt1, setVolt1] = useState("");
  const [newVolt2, setVolt2] = useState("");
  const [newVoltIn1, setVoltIn1] = useState("");
  const [newVoltIn2, setVoltIn2] = useState("");
  const [newState1, setState1] = useState(0);
  const [newState2, setState2] = useState(0);

  useEffect(() => {
    getVolt();
    getVoltIn();
    getNum();
  }, []);

  const handleNewVolt1 = (e) => setVolt1(e.currentTarget.value);
  const handleNewVolt2 = (e) => setVolt2(e.currentTarget.value);
  const handleNewVoltIn1 = (e) => setVoltIn1(e.currentTarget.value);
  const handleNewVoltIn2 = (e) => setVoltIn2(e.currentTarget.value);
  const handleNewState1 = () => addState(1);
  const handleNewState2 = () => addState(2);

  function getVolt() {
    fetch('http://localhost:3001/volt')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setVolt1(data[data.length-1].voltage1);
        setVolt2(data[data.length-1].voltage2);
      });
  }

  function getVoltIn() {
    fetch('http://localhost:3001/voltIn')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setVoltIn1(data[data.length-1].voltin1);
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
  
  function addVolt() {
    let volt1 = newVolt1;
    let volt2 = newVolt2;
    fetch('http://localhost:3001/volt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({volt1, volt2}),
      })
      .then(response => {
        return response.text();
      })
      .then(data => {
        getVolt();
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
        <rect
          x="10%"
          y="10%"
          width="10"
          height="300"
        />
        
        <rect
          x="47%"
          y="10%"
          width="10"
          height="300"
        />

        <rect
          x="10%"
          y="22%"
          width="750"
          height="10"
        />

        <foreignObject x="27%" y="13%" width="60" height="50">
          <form onSubmit={addVolt}>
            <input type="text" className="input-size" onChange={handleNewVolt1} placeholder={newVolt1}/>
          </form><br/>
        </foreignObject>
        
        <foreignObject x="66%" y="13%" width="60" height="50">
          <form onSubmit={addVolt}>
            <input type="text" className="input-size" onChange={handleNewVolt2} placeholder={newVolt2}/>
          </form><br/>
        </foreignObject>

        <foreignObject x="49%" y="10%" width="60" height="50">
          <form onSubmit={addVoltIn}>
            <input type="text" className="input-size" onChange={handleNewVoltIn1} placeholder={newVoltIn1}/>
          </form><br/>      
        </foreignObject>

        <foreignObject x="85%" y="10%" width="60" height="50">
          <form onSubmit={addVoltIn}>
            <input type="text" className="input-size" onChange={handleNewVoltIn2} placeholder={newVoltIn2}/>
          </form><br/>
        </foreignObject>
        
        <foreignObject x="9%" y="45%" width="50" height="50">
          <form onClick={e => {e.preventDefault();}}>
            <button className="button-size" onClick={handleNewState1}>{newState1}</button>
          </form><br/>      
        </foreignObject>

        <foreignObject x="46%" y="45%" width="50" height="50">
          <form onClick={e => {e.preventDefault();}}>
            <button className="button-size" onClick={handleNewState2}>{newState2}</button>
          </form>
        </foreignObject>
      </svg>
    </div>
  );
}
export default App;