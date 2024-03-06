// VoterList.js
import React from 'react';

function VoterList({ voters }) {
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

