import React from 'react';

export default function Header(){
    return(
        <header className="header">
        <img 
            src="https://cdn0.iconfinder.com/data/icons/ultimate-flat-volume-2/30/ultimate_76-512.png" 
            alt='troll face'
            className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">Login</h4>
    </header>
    )
}