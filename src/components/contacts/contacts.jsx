import React from "react";
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({massive, deleteButton,ContactsItem}) => (
<ul className={styles.list}>
{massive.map(element => (
    <React.Fragment key= {element.id}>
     <ContactsItem element = {element} deleteButton = {deleteButton}/>
     </React.Fragment>
))}
</ul>
)
Contacts.propTypes = {
    massive: PropTypes.array,
    deleteButton: PropTypes.func,
  }
export default Contacts;
