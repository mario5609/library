import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Star.css"

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Star() {

    const [rating, setRating] = useState(0)

    const arr = Array(6)

    return (
        <>
            {[...arr].map((item, id) => {
                id += 1                
                return (
                    <>                    
                        <FontAwesomeIcon icon={faStar} className={(id <= rating) ? "shiny":"dim"} onClick={() =>setRating(id)} />
                    </>
                );
            })}
        </>
    );
}