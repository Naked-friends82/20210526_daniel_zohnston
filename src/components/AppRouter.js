import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import About from '../routes/About';
import Drawing from '../routes/Drawing';
import TalkAbout from '../routes/TalkAbout';
import Text from '../routes/Text';
import Contact from '../routes/Contact';
import Navig from './Navig';

// import Auth from '../routes/Auth';
// import Home from '../routes/Home';
// import Profile from '../routes/Profile';
// import Navigation from './Navigation';


const AppRouter = ({setCurrent, setPageList, pageSta}) => {

return (
  <Router>
    <Switch>
      <Route exact path="/">
        <Drawing setCurrent={setCurrent} setPageList={setPageList} pageSta={pageSta} />
      </Route>
      <Route exact path="/about">
        <About setCurrent={setCurrent} setPageList={setPageList}/>
      </Route>
      <Route exact path="/talkabout">
        <TalkAbout setCurrent={setCurrent} setPageList={setPageList}/>
      </Route>
      <Route exact path="/text">
        <Text setCurrent={setCurrent} setPageList={setPageList} pageSta={pageSta} />
      </Route>
      <Route exact path="/contact">
        <Contact setCurrent={setCurrent} setPageList={setPageList}/>
      </Route>
    </Switch>
    <Navig />
  </Router>



 // <Router>
 //     {isLoggedIn && <Navigation />}
 //     <Switch>
 //         {isLoggedIn ? (
 //         <>
 //         <Route exact path="/">
 //             <Home userObj={userObj} />
 //         </Route>
 //         <Route exact path="/profile">
 //             <Profile />
 //         </Route>
 //         <Redirect from="*" to="/" />
 //         </>
 //         ) : (
 //             <>
 //             <Route exact path="/">
 //                 <Auth />
 //             </Route>
 //             <Redirect from="*" to="/" />
 //             </>
 //         )}
 //     </Switch>
 // </Router>
  )
}
export default AppRouter;