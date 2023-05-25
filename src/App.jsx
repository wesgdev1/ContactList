import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./components/ContactList";
//import contacts from "./data/contacts";
import Form from "./components/Form";

const baseURL = "https://contacts-api-mjnc.onrender.com";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [contactslist, setContactslist] = useState([]);

  async function loadContacts() {
    try {
      const response = await fetch(`${baseURL}/contacts`);
      if (response.ok) {
        const contacts2 = await response.json();
        setContactslist(contacts2);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(function () {
    loadContacts();
  }, []);

  const toogleForm = (event) => {
    setShowForm(!showForm);
  };

  const addContact = async (name, email, phone) => {
    const data = {
      name,
      email,
      phone,
    };

    try {
      const response = await fetch(`${baseURL}/contacts`, {
        ///////////////////////////////////////1
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const newContact = await response.json();

        setContactslist([...contactslist, newContact]);
        toogleForm();

        //loadContacts();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async (index) => {
    const contactSelected = contactslist[index];
    const { id } = contactSelected;

    try {
      const response = await fetch(`${baseURL}/contacts/${id}`, {
        ///////////////////////////////////////1
        method: "DELETE",
      });

      if (response.ok) {
        let provisional = [...contactslist];
        provisional.splice(index, 1);
        setContactslist(provisional);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (name, email, phone, index) => {
    let temp = [...contactslist];
    const { id } = temp[index];
    temp[index] = { id, name, email, phone };

    const contactUpdate = temp[index];

    try {
      const response = await fetch(`${baseURL}/contacts/${id}`, {
        ///////////////////////////////////////1
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactUpdate),
      });

      if (response.ok) {
        ///////////
        setContactslist(temp);
      }
    } catch (error) {
      console.error(error);
    }

    // console.log("procedemos a actualizar");
    //let temp = [...contactslist];
    // temp[index] = { name, email, phone };
    //setContactslist(temp);
  };

  return (
    <>
      <h1>LISTA DE CONTACTOS</h1>
      <Form
        showForm={showForm}
        toogleForm={toogleForm}
        addContact={addContact}
      ></Form>
      <p>Aqui podras guardar tus contactos de manera rapida y facil</p>
      <div className="card">
        <ContactList
          contacts={contactslist}
          deleteContact={deleteContact}
          updateContact={updateContact}
        />
      </div>
      <p>Numero de contactos: {contactslist.length}</p>
    </>
  );
}

export default App;
