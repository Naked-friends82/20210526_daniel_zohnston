import React from 'react';
import folder from '../image/folder.png';



const List = ({list, changePageSta, value}) => {
return(
  <>
  <button className="lists" value={value} onClick={changePageSta}>
    <img className="file1 hide" src={folder} alt="fav" />{list}
  </button>
  </>
)
}

export default List;