import React from "react";

function LinkButton({link , text}){
    return(
        <div className="d-grid gap-2">
            <a href={link} target="_blank" rel="noreferrer">
                <button className="btn btn-outline-dark btn-block" type="button">
                    {text}
                </button>
            </a>
        </div>
    );
}

export default LinkButton;