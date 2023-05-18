import React, { useState } from 'react'
import './form.css'

function Form({showForm,toogleForm,addContact}) {

  const[name,setname]=useState('');
  const[email,setEmail]=useState('');

  const onSubmit=(event)=>{
    event.preventDefault();

    addContact(name,email);
    console.log("entre por agregar");

  }

  const handlerChangeName=(event)=>{
    setname(event.target.value);

  }
  const handlerChangeEmail=(event)=>{
    setEmail(event.target.value);
    
  }




  return (
    <div>
       {showForm===false?
        (<div>
          <button onClick= {toogleForm}>AGREGAR</button>
          </div>
          )
        :
      (<form className='form-register'>

          <h3>Agregar nuevo contacto</h3>
          <div>
            <input onChange={handlerChangeName} className='controls' type='text' name='name' placeholder='Ingrese el nombre'/>
            < input onChange={handlerChangeEmail}className='controls' type='text' name='email'placeholder='Ingrese el Email'/>
          </div>
          <div className='buttons'>
            <button onClick={onSubmit}type='submit'>Guardar</button>
            <button type='button' onClick={toogleForm}>Cancelar</button>
          </div>  

      </form>)
      }
      
    </div>
  )
}

export default Form
