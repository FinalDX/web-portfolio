import React from "react";

import classes from "./Contact.module.css";

const contact = (props) => (
  <div className={classes.Contact}>
    <a id="Contact" />
    <div className={classes.Header}>
      <h2>Contact</h2>
    </div>
    <div className={classes.Line}></div>
    <form action="https://formspree.io/fennersean@yahoo.com" method="post">
      <p>To: fennersean@yahoo.com</p>
      <input
        className={classes.InputEmail}
        type="email"
        name="_replyto"
        placeholder="Your email"
      />
      <textarea
        className={classes.InputMessage}
        name="message"
        placeholder="Your message"
      ></textarea>
      <input className={classes.SendBtn} type="submit" value="Send" />
    </form>
  </div>
);

export default contact;
