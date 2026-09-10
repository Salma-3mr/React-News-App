import bugleLogo from "./images/Daily-Bugle-Emblem.png";
function Title(){
    return(
        <header className="ttl">
            <div className="ttl_el" id="el1">
                <h1>Daily</h1>
            </div>  

            <div className="ttl_el" id="el2">
                <img src={bugleLogo} />
            </div>

            <div className="ttl_el" id="el3">
                <h1>Bugle</h1>
            </div>
        </header>
    )
}

export default Title