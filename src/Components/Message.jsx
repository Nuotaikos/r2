import { useContext } from "react";
import ScooterContext from "./ScooterContext";


function Message() {

  const { message } = useContext(ScooterContext);

  if (null === message) {
    return null;
  }

  return (
    <div className="show-message">
      <div className={'alert alert-' + message.type} role="alert">
        {message.text}
      </div>
    </div>
  );

}

export default Message;