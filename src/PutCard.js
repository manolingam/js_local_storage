import React from 'react';
import "./PutCard.css";

var storePass = () => {
    var key = document.getElementById('key').value.toLowerCase();
    var pass = document.getElementById('pass').value;
    document.getElementById('key').value = "";
    document.getElementById('pass').value = "";
    if(key === "" && pass === "") {
        alert("You need to have some value over there!")
    }else if(localStorage.hasOwnProperty(key)) {
        alert("That is in my memory already with a different key.");
    }else {
        localStorage.setItem(key, pass);
        if(localStorage.hasOwnProperty(key)) {
            alert("Got it!");
        }else {
            alert("Um, I don't get that!");
        }
    }
}

var PutCard = () => {

    return(
        <div className="putCard">
            <h2>Store something :)</h2>
            <p>Key:</p>
            <input id="key" placeholder="Enter key.." required/>
            <p>Value:</p>
            <input id="pass" placeholder="Enter any string.." required/>
            <button onClick={storePass}>STORE</button>
        </div>
    );
}

export default PutCard;