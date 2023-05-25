import { useState } from 'react'
import css from'./Form.module.css'


const Form = ({submitContact}) => {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const options = {
        name,
        number,
 }

  const  handleChange = (event) => {
        setName(event.currentTarget.value)
    };

  const  handleChangeNumber = (event) => {
        setNumber(event.currentTarget.value)
    };

  const  reset = () => {
        setName('');
        setNumber('')
    }

   const  handleSubmit = (event) => {
        event.preventDefault();
        submitContact(options);
        reset();
    }


    
        return (<div>
            <div> 
         <h2>Name</h2>
        <form onSubmit={handleSubmit}>
            <label>
            <input
                onChange={handleChange}
               value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                        /></label>
                    <h2>Number</h2>
                    <label>
                        <input
                            value={number}
                            onChange={handleChangeNumber}
                        type="tel"
                        name="number"
                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                    <p>
                        <input type="submit" value={'add contact'} className={css.addContact}/>
                    </p>
                
            </form>
        </div></div>
       )  
    

}

export default  Form;