import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../routes/About';
import Drawing from '../routes/Drawing';
import TalkAbout from '../routes/TalkAbout';
import Text from '../routes/Text';
import Contact from '../routes/Contact';
import Navig from './Navig';


const AppRouter = ({setCurrent, setPageList, pageSta}) => {

return (
  <Router>
    <Routes>
      <Route path="/" element={<Drawing setCurrent={setCurrent} setPageList={setPageList} pageSta={pageSta} />} />
      <Route path="/about" element={<About setCurrent={setCurrent} setPageList={setPageList}/>} />
      {/* <Route path="/talkabout" element={<TalkAbout setCurrent={setCurrent} setPageList={setPageList}/>} /> */}
      <Route path="/text" element={<Text setCurrent={setCurrent} setPageList={setPageList} pageSta={pageSta} />} />
      <Route path="/contact" element={<Contact setCurrent={setCurrent} setPageList={setPageList}/>} />
    </Routes>
    <Navig />
  </Router>
  )
}
export default AppRouter;