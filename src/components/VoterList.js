import React, { useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

function VoterList({ voters }) {
    useEffect(() => {
        voters.forEach(async voter => {
            const { id, name, city, state, contact, birthDate } = voter;
            try {
                await axios.post('http://localhost:8080/api/voter', { id, name, city, state, contact, birthDate }); // Update the URL to point to port 8080
                console.log(`Voter ${id} data sent to the backend successfully.`);
            } catch (error) {
                console.error(`Error sending data for voter ${id}:`, error);
            }
        });
    }, [voters]);

    return (
        <div>
            <h2>Voter List</h2>
            <ul>
                {voters.map(voter => (
                    <li key={voter.id}>
                        Name: {voter.name} - ID: {voter.id} - City: {voter.city} - State: {voter.state} - Contact: {voter.contact} - Birth Date: {voter.birthDate}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VoterList;
