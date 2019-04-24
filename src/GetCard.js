import React from 'react';
import './GetCard.css';

var getPass = () => {
    var query = document.getElementById('query').value.toLowerCase();
    var answer = localStorage.getItem(query)
    document.getElementById('query').value = "";
    if(answer !== null) {
        document.getElementById('answer').innerHTML = localStorage.getItem(query);
    } else if(answer === null) {
        alert("Hmm, I didn't find anything on that key!")
    }
}

var GetCard = () => {

    return(
        <div className="getCard">
            <h2>Get my blah blah :)</h2>
            <p>Key:</p>
            <input id="query" placeholder="Enter key.." required/>
            <button onClick={getPass}>RETRIEVE</button>
            <p id="answer">--</p>
        </div>
    );
}

export default GetCard;