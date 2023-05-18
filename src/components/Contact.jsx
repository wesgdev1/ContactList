import React from 'react'
import './Contact.css'



function Contact({contact,index}) {


  const select=()=>{

    alert("jola");


  }


  return (
    <div className='contact' onClick={select} >
      <div>
        <strong>{contact.name}</strong>
        <p>{contact.email}</p>
        <img className='contact__profile' src={contact.image} alt="img" />
        
        </div>

        <div>
          <button>UPDATE</button>
          <button>DELETE</button>
        </div>

    </div>
  )
}

export default Contact
