import styles from '../contacts/Contacts.module.css';
const ContactsItem = ({element, deleteButton,key}) => (
    <li className={styles.item} key ={key} id= {element.id}>
    <p>{element.name}: </p>
    <button className={styles.link}>{element.number}</button>
    <button id= {element.id} className={styles.deleteBtn} onClick={deleteButton}>Delete</button>
</li>
);
export default ContactsItem;