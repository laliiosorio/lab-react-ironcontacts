const ContactCard = ({ name, pictureUrl, popularity, deleteContact }) => {

    return (

        <tbody>
            <tr>
                <td><img src={pictureUrl} alt={name} /></td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td><button onClick={deleteContact}>Delete</button></td>
            </tr>
        </tbody>
    )
}

export default ContactCard