


export const ContactsList = ({ contacts }) => {
   
    return (
    
    <ul>
        {contacts.map(contact =>(
        <li  key={contact.id}>
           <span>  {contact.name}
             {contact.number} </span>
             </li>
     )  )}

</ul>)}
    
