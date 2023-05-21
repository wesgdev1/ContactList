import React, { useState } from "react";
import "./Contact.css";

function Contact({ contact, deleteContact, index, updateContact }) {
  const [update, setUpdate] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newEmail, setNewEmail] = useState(contact.email);
  const [newPhone, setNewPhone] = useState(contact.phone);

  const handlerClick = (event) => {
    deleteContact(index);
  };

  const toogleUpdate = () => {
    console.log("hola");
    setUpdate(!update);
  };

  const handlerChangeUp = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setNewName(value);
    }

    if (name === "email") {
      setNewEmail(value);
    }

    if (name === "phone") {
      setNewPhone(value);
    }
  };
  const handleClickUpdate = () => {
    console.log(update);
    toogleUpdate();
    console.log(update);

    if (update) {
      updateContact(newName, newEmail, newPhone, index);
      console.log();
      console.log(newName);
      console.log(newEmail);
    }
  };

  return (
    <div className="contact">
      {update ? (
        <div>
          <input
            name="name"
            onChange={handlerChangeUp}
            placeholder={contact.name}
          />
          <input
            name="email"
            onChange={handlerChangeUp}
            placeholder={contact.email}
          />
          <input
            name="phone"
            onChange={handlerChangeUp}
            placeholder={contact.phone}
          />
        </div>
      ) : (
        <div>
          <p>
            <strong>{contact.name}</strong>
          </p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </div>
      )}

      {/* <img
          className="contact__profile"
          src="https://cdn-icons-png.flaticon.com/512/2444/2444440.png"
          alt="img"
        /> */}

      <div>
        <button onClick={handleClickUpdate}>
          {update ? "SAVE" : "UPDATE"}
        </button>
        <button onClick={handlerClick}>DELETE</button>
      </div>
    </div>
  );
}

export default Contact;
