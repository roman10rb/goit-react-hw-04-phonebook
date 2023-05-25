import css from './ContactList.module.css'
import PropTypes from 'prop-types';



const ContactList = ({todos, onDeleteTodo}) => {
    return (<div>
        <ul>
    {todos.map(({ id, name, number}) => (
      <li key={id}>
        <span className={css.contactName}>{name}</span>  <span className={css.contactNumber}>: {number}</span>
            
            <button
          type="button"
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
    </div>)

    
}


ContactList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
}
export default ContactList;


