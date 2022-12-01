import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event){
        const {name, value}= event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))

    }
    return (
        <main>
            <div className="form">

                <input className="form--input"
                type="text"
                placeholder="top text"
                name="topText"
                value= {meme.topText}
                onChange={handleChange}
                />

                <input className="form--input"
                type="text"
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
                
                <button className="form--button" onClick={getMemeImage} >
                    Get a New Image
                    </button>
            </div>

            <div className="meme">

            <img src={meme.randomImage} alt="please check you" className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text">{meme.bottomText}</h2>
            </div>

            

        </main>
    )
}