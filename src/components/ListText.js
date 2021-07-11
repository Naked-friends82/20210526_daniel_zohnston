import React from "react";

const ListText = ({eachT,currenText, setCurrentText}) => {
  const showText = () => {
    setCurrentText(eachT);
  }
  return(
    <div className="text_list">
      <h3 className={`
      text_list_title ${currenText.title === eachT.title ? "currentListT": ""}`} onClick={showText}>{eachT.title}</h3>
  </div>
  );
}

export default ListText;