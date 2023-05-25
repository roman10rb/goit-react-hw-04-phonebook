import css from './Filter.module.css'
import PropTypes from 'prop-types';


const Filter = ({value, onChange}) => {
    return (
        
            <label>
                   <span className={css.filter}>Finde contacts by name</span>  <input className={css.filterInput} type="text" value={value} onChange={onChange} />
                </label>
        
    )
}

Filter.propTypes = {
     value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
export default Filter;