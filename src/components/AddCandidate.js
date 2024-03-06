import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddCandidate({ onAdd }) {
    const [name, setName] = useState('');
    const [party, setParty] = useState('');
    const [age, setAge] = useState('');

    const handleAddCandidate = () => {
        const id = uuidv4(); // Generate random UUID
        onAdd({ id, name, party, age });
        setName('');
        setParty('');
        setAge('');
    };

    return (
        <div>
            <h2>Add Candidate</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Party" value={party} onChange={(e) => setParty(e.target.value)} />
            <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <button onClick={handleAddCandidate}>Add Candidate</button>
        </div>
    );
}

export default AddCandidate;
