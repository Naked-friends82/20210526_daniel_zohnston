import React, { useEffect, useState } from 'react';
import AppRouter from "./AppRouter";
import List from "./List";
import baby from '../image/baby.png';
import main from "../image/daniel_zohnston_main.jpg";
import "../css/univer.css";
import "../css_mobile/univer_mobile.css";

// import { authService } from "../myBase";


function App() {
  const [firstImp, setFirstImp] = useState(false);
  const [init, setInit] = useState(false);
  const [current, setCurrent] = useState("");
  const [pageList, setPageList] = useState([]);
  const [pageSta, setPageSta] = useState("0");

  const toggleImp = () => {
    setFirstImp(true);
  }
  const changePageSta = (e) => {
    const {target: {value}} = e;
    setPageSta(value);
  }
  useEffect(() => {
    if(pageList){
      setInit(true);
    }else{
      setInit(false);
    }
  },[pageList]);
  return  (
  <>
    {firstImp ? (
        <main>
          <section className="section_1">
            <div className="section_1_top">
              <h1>{current}</h1>
              <div className="section_1_top_lists">

                <img className="baby" src={baby} alt="baby" />
                  {init && 
                    pageList.map((list) =>
                    <List key={list} value={list} list={list} changePageSta={changePageSta} />
                    )}
              </div>
            </div>
            <div>
              <span className="section_1_bott">Daniel_Zohnston_</span>
            </div>
          </section>
          <section className="section_2">
            <AppRouter setCurrent={setCurrent} setPageList={setPageList} pageSta={pageSta} />
          </section>
        </main>
    ):(
      <img className="mainImg" src={main} alt="index" onClick={toggleImp} />
    )}

  </>)
}

export default App;


