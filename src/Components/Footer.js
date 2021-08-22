import React from "react";
let year = new Date().getFullYear()

function Footer(){
    return (
        <div className="footer">
            <p>Copyright &copy; {year}, Jonathan Morris</p>
        </div>
    );
}

export default Footer;