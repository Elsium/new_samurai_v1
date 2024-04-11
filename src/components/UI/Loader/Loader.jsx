import React from "react";
import loader from "./img/loader.svg";

const Loader = () => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <img style={{width: "100px"}} src={loader} alt="Loading..."/>
        </div>
    )
}
export default Loader;