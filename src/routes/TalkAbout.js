import React, { useEffect, useState } from 'react';
import { dbService } from '../myBase';
import "../css/talkabout.css";
import "../css_mobile/talkabout_mobile.css";

const TalkAbout = ({setCurrent, setPageList}) => {
  const [love, setLove] = useState("");
  const [hate, setHate] = useState("");
  const [loves, setLoves] = useState([]);
  const [hates, setHates] = useState([]);

  // const getLoves = async() =>{
  //   const dbLoves = await dbService.collection("TA_loves").get();
  //   dbLoves.forEach((document) => {
  //     const loveObj = {
  //       ...document.data(),
  //       id: document.id
  //     };
  //     setLoves((prev) => [loveObj, ...prev]);
  //   });
  // }
  const getLoves = async() => {
    await dbService.collection("TA_loves")
    .orderBy("createdAt","desc")
    .onSnapshot((snapshot) => {
      const loveArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLoves(loveArray);
    });
  }
  const getHates = async() => {
    await dbService.collection("TA_hates")
    .orderBy("createdAt","desc")
    .onSnapshot((snapshot)=> {
      const hateArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHates(hateArray);
    });
  }

  useEffect(() => {
    setCurrent("Let's talk about");
    setPageList([]);
    getLoves();
    getHates();
  
  }, []);

  const onChange = (e) => {
    const {target:{name, value}} = e;
    const filteredValue = value.replace(/[^A-Za-z]/ig, '');
    if(name === "love"){
      setLove(filteredValue);
    }else if(name === "hate"){
      setHate(filteredValue);
    };
  }
  const onSubmit = async(e) => {
    e.preventDefault();
    const {target:{name}} = e;
    if(name === "love"){
      await dbService.collection("TA_loves").add({
        love,
        createdAt: Date.now(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate(),
        hour: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds(),
      });
      setLove("");
      const loveInput = document.getElementById("loveInput");
      loveInput.value = "";
    }else if(name === "hate"){
      await dbService.collection("TA_hates").add({
        hate,
        createdAt: Date.now(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate(),
        hour: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds(),
      });
      setHate("");
      const hateInput = document.getElementById("hateInput");
      hateInput.value = "";
    };
  }

  return(
  <article className="TA">
    <div className="TA_1">
      <form name="love" onSubmit={onSubmit}>
        <span className="before">i love</span>
        <input 
          id="loveInput"
          name="love"
          type="text"
          maxLength={12}
          value={love}
          onChange={onChange} 
          required/>
          
        <input 
          className="TA_1_submit"
          type="submit"
          value="Enter★"/>
      </form>
      <div className="TA_love">
        {loves.map((eachLove) => (
          <div key={eachLove.id} className="eachLove">
            <h3>
              <span className="eachLove_time">
                {eachLove.month}/
                {eachLove.date}/
                {eachLove.year} 
              </span>
              <span className="eachLove_time">
                {eachLove.hour}:
                {eachLove.min}:
                {eachLove.sec} 
              </span>
              <span className="eachLove_contents">
                i love_{eachLove.love}
              </span>
            </h3>
          </div>
        ))}
      </div>
    </div>
    <div className="TA_betw"></div>
    <div className="TA_2">
      <form name="hate" onSubmit={onSubmit}>
        <span className="before">i hate</span>
        <input 
          id="hateInput"
          name="hate"
          type="text"
          maxLength={12}
          value={hate}
          onChange={onChange}
          required/>
        <input
          className="TA_2_submit"
          type="submit"
          value="Enter★"/>
      </form>
      <div className="TA_hate">
        {hates.map((eachHate) => (
          <div key={eachHate.id} className="eachHate">
            <h3>
              <span className="eachHate_time">
                  {eachHate.month}/
                  {eachHate.date}/
                  {eachHate.year} 
                </span>
                <span className="eachHate_time">
                  {eachHate.hour}:
                  {eachHate.min}:
                  {eachHate.sec} 
                </span>
                <span className="eachHate_contents">
                  i hate_{eachHate.hate}
                </span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  </article>
  )
}

export default TalkAbout;