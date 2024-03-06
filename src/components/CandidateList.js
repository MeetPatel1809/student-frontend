// CandidateList.js
import React from 'react';

function CandidateList({ candidates }) {
    return (
        <div>
            <h2>Candidate List</h2>
            <ul>
                {candidates.map(candidate => (
                    <li key={candidate.id}>
                        ID: {candidate.id} - Name: {candidate.name} - Party: {candidate.party} - Age: {candidate.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CandidateList;
    