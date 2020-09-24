import Wrapper from "../../hoc/wrapper/wrapper";
import React from "react";
import ContentFood from "./contentFood";

const Food = props => {
  if (props.materials.length <= 0) {
    return <p>مواد مورد نظر خود را انتخاب کنید</p>;
  }
  return (
    <Wrapper>
      <ContentFood materials={props.materials} />
    </Wrapper>
  );
};

export default Food;
