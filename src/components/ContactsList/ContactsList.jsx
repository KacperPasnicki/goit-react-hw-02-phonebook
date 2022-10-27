import PropTypes from 'prop-types';


export const ContactsList = ({onDelete, filterArray}) => {
   
    return (
    
    <ul>
        {filterArray().map(contact =>(
        <li  key={contact.id}>
           <span className='contact'>  {contact.name}:   </span>
           <span className='contact'>    {contact.number} </span>
             
             <button type="button" className='btn'
             onClick={()=> onDelete(contact.id)}>
              Remove Contact

             </button>
             </li>
     )  )}

</ul>)}
    
    ContactsList.propTypes = {
      onDelete: PropTypes.func.isRequired,
      filterArray: PropTypes.func.isRequired
        }