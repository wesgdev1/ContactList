import React from "react";
import "./Contact.css";

function Contact({ contact, deleteContact, index }) {
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
        <p>{index}</p>
        <img className="contact__profile" src={contact.image} alt="img" />
      </div>

      <div>
        <button>UPDATE</button>
        <button onClick={handlerClick}>DELETE</button>
      </div>
    </div>
  );
}

export default Contact;
