import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function AddVoter({ onAdd }) {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [contact, setContact] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const handleAddVoter = () => {
        const id = uuidv4(); // Generate random UUid
        onAdd({ id, name, city, state, contact, birthDate });
        setName('');
        setCity('');
        setState('');
        setContact('');
        setBirthDate('');
    };

    return (
        <div className="form">
            <h2>Add Voter</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
            <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
            <input type="date" placeholder="Birth Date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />

            <button onClick={handleAddVoter}>Add Voter</button>
        </div>
    );
}

export default AddVoter;
