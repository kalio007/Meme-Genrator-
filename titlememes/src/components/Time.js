import React from "react";

export default function Time(){
   function tellTime(){
    const date = new Date()
    const hours = date.getHours()
   }

    return(
        <div className="time">
            {tellTime}
        </div>

    )
}