


export const ContactsList = ({onDelete, filterArray}) => {
   
    return (
    
    <ul>
        {filterArray().map(contact =>(
        <li  key={contact.id}>
           <span>  {contact.name}
             {contact.number} </span>
             
             <button type="button"
             onClick={()=> onDelete(contact.id)}>
              Remove Contact

             </button>
             </li>
     )  )}

</ul>)}
    
