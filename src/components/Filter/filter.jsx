import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
const formId = nanoid(5);
const Filter = ({inputUpdate}) => ( 
    <form action={formId} className={styles.form}>
    <label htmlFor={formId}  className= {styles.label}>
    Find contacts by name
    <input type="text"
    onChange={inputUpdate}
    className= {styles.input} />
    </label>
</form>
)
Filter.propTypes = {
    inputUpdate: PropTypes.func
  }
export default Filter;