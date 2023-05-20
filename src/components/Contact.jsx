import React, { useState } from "react";
import "./Contact.css";

function Contact({ contact, deleteContact, index }) {
  const [update, setUpdate] = useState(false);
  const handlerClick = (event) => {
    deleteContact(index);
  };

  const select = () => {
    //alert("jola");
  };

  return (
    <div className="contact" onClick={select}>
      <div>
        <strong>{contact.name}</strong>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        {/* <img
          className="contact__profile"
          src="https://cdn-icons-png.flaticon.com/512/2444/2444440.png"
          alt="img"
        /> */}
      </div>

      <div>
        <button>UPDATE</button>
        <button onClick={handlerClick}>DELETE</button>
      </div>
    </div>
  );
}

export default Contact;
