import {React, useState} from 'react'
import Box from './Box'
import Popup from './Popup'
import Header from './Header';
import Footer from './Footer';

function Game ()  {
    const[val,setVal] = useState(Array(9).fill(""));
    const[cur,setCur] = useState("O");
    const[result,setResult] = useState("");
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    function refresh() {
        const newVal = Array(9).fill("");
        setVal(newVal);
        setCur("O");
        setResult("");
    }
    function toogle(i) {
        if(val[i] !== "") return;
        const newVal = [...val];
        newVal[i]=cur;
        setVal(newVal);
        setCur((cur === "X"|| cur === "") ? "O":"X");
        setResult("Pending");
        let count=1;
        for(let i=0;i<9;i++) if(val[i] !== "") count++;
        if(count === 9) setResult("DRAW");
        for (let i=0; i< lines.length; i++) {
        let [a, b, c] = lines[i];
        if (newVal[a] !== "" && newVal[a] === newVal[b] && newVal[a] === newVal[c]) {
             if(newVal[a] === "O") setResult("Player 1 Wins");
             else setResult("Player 2 Wins");         
            }
        }
    }
    return(
        <div className="body">
        <Header result={result} onClick = {refresh}></Header>
        <div className="Board" >
        { val.map((_,i)=><Box key={i}  name={i} value={val[i]} iscur={cur} onClick={()=>toogle(i)  }/>) } 
        </div>
        <Popup content = {result} onClick = {refresh} ></Popup>       
        <Footer/>
        </div>
    );
	
};

export default Game;