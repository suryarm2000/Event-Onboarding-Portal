function About({values}){
    return(
        <div className="page-heading">
            <header className="heading">
                <h1>Event Registration Form</h1>
            </header>
            <h2>About this Event</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Event Name</th>
                        <td id="name-replacement">{values.nameReplacement}</td>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <td id="date-replacement">{values.dateReplacement}</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td>2:00 PM - 4:00 PM</td>
                    </tr>
                    <tr>
                        <th>Speaker</th>
                        <td>Sarah Johnson (Digital Marketing Expert)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default About;