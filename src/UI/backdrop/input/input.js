import React from "react";
import Classes from "./input.module.css";

const Input = props => {
  let input = null;
  const classesInput = ["form-control"];
  if (!props.valid && props.touched) {
    classesInput.push(Classes.input);
  }
  switch (props.types) {
    case "input":
      input = (
        <input
          {...props.elementConfig}
          className={classesInput.join(" ")}
          value={props.val}
          onChange={props.getData}
        />
      );
      break;
    case "textarea":
      input = <textarea></textarea>;
      break;
    case "select":
      input = (
        <select
          className={props.Classes}
          onChange={props.getData}
          value={props.value}
        >
          {props.elementConfig.map(item => (
            <option defaultValue={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      );
      break;
    default:
      input = <input></input>;
  }
  return (
    <div>
      <label>{props.label}</label>
      {props.star ? (
        <span className={Classes.alert}>لطفا فیلد مورد نظر را پر کنید</span>
      ) : null}
      {input}
    </div>
  );
};

export default Input;
