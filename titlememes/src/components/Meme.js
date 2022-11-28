import React from "react";

export default function Meme() {
    return (
        <main>
            <form className="form">
                <input className="form--input"
                type="text"
                placeholder="top text"
                />

                <input className="form--input"
                type="text"
                placeholder="Bottom text"
                />
                <button className="form--button" >
                    Get a New Image
                    </button>
            </form>
        </main>
    )}