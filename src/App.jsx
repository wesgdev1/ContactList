import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./components/ContactList";
import contacts from "./data/contacts";
import Form from "./components/Form";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [contactslist, setContactslist] = useState(contacts);

  const toogleForm = (event) => {
    setShowForm(!showForm);
  };

  const addContact = (name, email, phone) => {
    const newContact = {
      name,
      email,
      phone,
    };

    setContactslist([...contactslist, newContact]);
    toogleForm();
  };

  const deleteContact = (index) => {
    let provisional = [...contactslist];
    provisional.splice(index, 1);
    setContactslist(provisional);
  };

  const updateContact = (name, email, phone, index) => {
    console.log("procedemos a actualizar");
    let temp = [...contactslist];
    temp[index] = { name, email, phone };
    setContactslist(temp);
  };

  return (
    <>
      <h1>LISTA DE CONTACTOS</h1>
      <Form
        showForm={showForm}
        toogleForm={toogleForm}
        addContact={addContact}
      ></Form>
      <div className="card">
        <ContactList
          contacts={contactslist}
          deleteContact={deleteContact}
          updateContact={updateContact}
        />
      </div>
    </>
  );
}

export default App;
