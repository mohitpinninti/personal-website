import { useState } from "react";

const WipAlert = () => {

    const [visibility, setVisibility] = useState("visible");

    const changeStyle = () => {
        console.log("button clicked");
        setVisibility("hidden");
    }

    return (
        <div className={{visibility: visibility}}>
            <h1>Note: This website is a work in progress</h1>
            {/* <button onClick={changeStyle}>Okay</button> */}
            <button onClick={changeStyle}>Okay</button>
        </div>
    );
}



export default WipAlert;