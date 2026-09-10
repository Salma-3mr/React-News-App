import { useState, useEffect } from "react";
import spidey from "./images/main1.png";
function Header() {

    function getDate() {
        return new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    function getClock() {
        return new Date().toLocaleTimeString("en-US");
    }

    const [time, setTime] = useState(getClock());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getClock());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="hd">
            <div className="hd_t" id="fst_el">
                <p>{getDate()}</p>
                
                <p>{time}</p>
            </div>

            <div className="hd_t" id="scd_el">
                <img src={spidey} alt="Spider-Man" />
            </div>
             
        </header>
    );
}

export default Header;