import React, { useEffect } from 'react';
import "../css/contact.css"
import "../css_mobile/contact_mobile.css"


const Contact = ({setCurrent, setPageList}) => {

  useEffect(() => {
    setCurrent("Contact Daniel");
    setPageList([]);
  },[]);

  return(
    <>
    <article className="contact">
      <div className="contact_email">rlterjonas77@gmail.com</div>
    </article>
    </>
  )
}

export default Contact;