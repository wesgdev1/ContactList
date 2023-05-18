import React from 'react'
import Contact from './contact'
import './contactList.css'

function ContactList({contacts}) {

  return (
    <div className='list'>


     {contacts.map(function(contact,i){

    return <Contact contact={contact} key={i}/>

     })}
   
    
            
    </div>
  )
}

export default ContactList
