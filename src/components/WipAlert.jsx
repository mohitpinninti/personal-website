import { useState } from "react";
import useFirestoreDocument from "../hooks/useFirestoreDocument";

const WipAlert = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { data: alert } = useFirestoreDocument("content", "wipAlert");

  if (!isVisible || !alert) {
    return null;
  }

  return (
    <div>
      <div className="wipAlert">
        <h1>{alert.heading} <br /> <span>{alert.subheading}</span></h1>
        <button className="wipAlertButton" onClick={() => setIsVisible(false)}>{alert.dismissLabel}</button>
      </div>
    </div>
  );
};

export default WipAlert;
