import React,{useState, useEffect} from 'react';


import { construct, constructOutline } from 'ionicons/icons';
import { Component } from 'react';



function User({ value = 'RIccardo' }) {
    const [Utenti,setUtenti] = useState();
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/rokity/BuyTomorrow/master/risorse/users.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            setUtenti(data[0])
            
            
        });
    },[])
    
    return (
        <div>
            <h1>Ciao, mondo!</h1>
            <h2>Sono le {JSON.stringify(Utenti)}.</h2>
        </div>
    );
}

export default User;