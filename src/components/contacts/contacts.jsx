import styles from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({massive, deleteButton}) => (
<ul className={styles.list}>
{massive.map(element => (
    <li className={styles.item} key ={element.id} id= {element.id}>
        <p>{element.name}: </p>
        <a href=""  className={styles.link}>{element.number}</a> 
        <button id= {element.id} className={styles.deleteBtn} onClick={deleteButton}>Delete</button>
    </li>
))}
</ul>
)
Contacts.propTypes = {
    massive: PropTypes.array,
    deleteButton: PropTypes.func,
  }
export default Contacts;