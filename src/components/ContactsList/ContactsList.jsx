


export const ContactsList = ({ contactsList }) => {
   
    return (
    
    <ul>
        {contactsList.map(contact =>(
        <li  key={contact.id}>
           <span>  {contact.name}
             {contact.number} </span>
             </li>
     )  )}

</ul>)}
    
