import React, { useState, useEffect } from "react";
import logo from './ParcsAndRecImage.png';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

const MyLogo = [
  {id: 1, image: logo, width: '658', height: '969'},
]

function App() {
  const ParksAndRec = MyLogo.map(parks =>
    <>
    <h2 >The Show's Cover:</h2>
    {parks.image &&
    <img className="Logo" src= {parks.image} alt = '' style = {{width: parks.width, height: parks.height}}></img>
    }
    </>
  );
  const [show, setTVShow] = useState([]);
  const fetchTV = () => {
    return fetch("https://api.tvmaze.com/lookup/shows?imdb=tt1266020")
          .then((response) => response.json())
          .then((data) => setTVShow(data));
  }
  useEffect(() => {
    fetchTV();
  },[])
  const [quote, setQuote] = useState([]);

  const fetchData = () => {
    return fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
          .then((response) => response.json())
          .then((data) => setQuote(data));
  }
  useEffect(() => {
    fetchData();
  },[])
  //fetch method barrowed from https://statusneo.com/different-ways-to-fetch-data-from-api-in-reactjs/

  return (
   <div className="App">
      <header className="App-header">
        <h1 className="Head">
          Parks and Rec, a Brief Overview
        </h1>
        <div className="Cover">{ParksAndRec}</div>
        <div class="grid text-center" style={{display: "grid"}}>
          <div class="g-col-4">Summary: <br></br>
            {show.summary?.replace("<p>", "")}
          </div>
          <div class="g-col-4"> The Show's Runtime: <br></br>
            Show began: {show.premiered} <br></br>
            Show ended: {show.ended} </div>
        </div>
        <div>
        <p className="Quote">"{quote}" - Ron Swanson (AKA my favorite character)</p></div>
      </header> </div>
  );
}

export default App;
