import React, { useEffect } from 'react';



const ImgList = ({each, currentImg ,setCurrentImg, setWsh}) => {
  
  const showImg = () => {
    setCurrentImg(each);
  };
  const adjustImg = () => {
    if(currentImg.wsh === "w"){
        console.log("width is more long");
        setWsh("w");
    } else if(currentImg.wsh === "s"){
        console.log("same");
        setWsh("s");
    } else if(currentImg.wsh === "h"){
        console.log("height is more long");
        setWsh("h");
    }
  }
  useEffect(() => adjustImg(),[currentImg]);
return(
  <li className={`li ${currentImg.title === each.title ? "currentList": ""}`}
    onClick={showImg}>
    {each.title}, {each.caption}
  </li>
)
}

export default ImgList;