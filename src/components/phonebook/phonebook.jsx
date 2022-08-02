import styles from './Phonebook.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
const nameLabelId = nanoid(5);
const telLabelId = nanoid(5);

const Phonebook = ({handleSubmit}) => (
 <form className= {styles.form} onSubmit = {handleSubmit}>
    <label htmlFor={nameLabelId} className= {styles.label}>
    Name
    <input
    htmlFor={nameLabelId}
    className= {styles.input}
     type="text"
     name="name"
     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
     required/>
    </label>
    <label htmlFor={telLabelId} className= {styles.label}>
    Phone
    <input
    htmlFor={telLabelId}
    className= {styles.input}
     type="tel"
     name="number"
     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
     required
     />
    </label>
    <button className= {styles.btn}>Add contact</button>
 </form>

);
Phonebook.propTypes = {
   handleSubmit: PropTypes.func
 }
export default Phonebook;