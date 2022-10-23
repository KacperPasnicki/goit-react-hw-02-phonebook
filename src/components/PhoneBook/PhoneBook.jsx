export const DisplayEntries = ({Contacts }) => {
    
    return (<table>
        <thead>
        <tr>
            <th>Name:</th>
            <th>Phone Number:</th>
        </tr>

        </thead>
<tbody>
    {Contacts.map(contact =>(
        <tr>
            <td>{contact.name}</td>
            <td>{contact.number}</td>
        </tr>
    )  )}
</tbody>

    </table>)

    
}