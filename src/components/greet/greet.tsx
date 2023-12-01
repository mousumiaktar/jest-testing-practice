import {GreetProps} from "./greet.type"

const Greet = (props:GreetProps) => {
    return (
      <div>
        <h1>Hello {props.name? props.name : "Guest"}</h1>
      </div>
    );
};

export default Greet;