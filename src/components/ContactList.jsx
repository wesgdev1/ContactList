import React from "react";
//import Contact from "./contact";
import Contact from "./Contact";
import "./contactList.css";

function ContactList({ contacts, deleteContact, updateContact }) {
  return (
    <div className="list">
      {contacts.map(function (contact, i) {
        return (
          <Contact
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
            index={i}
            updateContact={updateContact}
          />
        );
      })}
    </div>
  );
}

export default ContactList;
