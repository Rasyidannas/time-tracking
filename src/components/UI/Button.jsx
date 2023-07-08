import "./Button.css";

const Button = (props) => {
  return (
    <a href="#" className={"button" + " " + props.className} onClick={props.onClick}>
      {props.children}
    </a>
  );
};

export default Button;
