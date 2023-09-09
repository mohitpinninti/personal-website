import { useState } from "react";

const WipAlert = () => {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            {isVisible && <div className="wipAlert">
            <h1>Note: This website is a work in progress. <br /> <span>Much of what you see is unfinished!</span></h1>
            <button className="wipAlertButton" onClick={() => setIsVisible(false)}>Dismiss</button>
        </div>}
        </div>

        
    );
}





export default WipAlert;