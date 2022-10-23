export const DisplayEntries = ({entries}) => {
    
    return (<table>
        <thead>
        <tr>
            <th>Name:</th>
            <th>Phone Number:</th>
        </tr>

        </thead>
<tbody>
    {entries.map(entry =>(
        <tr>
            <td>{entry.name}</td>
            <td>{entry.number}</td>
        </tr>
    )  )}
</tbody>

    </table>)

    
}