// UpdateCandidate.js
import React, { useState } from 'react';

function UpdateCandidate({ candidates, onUpdate }) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [party, setParty] = useState('');
    const [age, setAge] = useState('');

    const handleUpdateCandidate = () => {
        onUpdate({ id, name, party, age });
        setId('');
        setName('');
        setParty('');
        setAge('');
    };

    return (
        <div>
            <h2>Update Candidate</h2>
            <input type="text" placeholder="Candidate ID" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="text" placeholder="New Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="New Party" value={party} onChange={(e) => setParty(e.target.value)} />
            <input type="text" placeholder="New Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <button onClick={handleUpdateCandidate}>Update Candidate</button>
        </div>
    );
}

export default UpdateCandidate;
