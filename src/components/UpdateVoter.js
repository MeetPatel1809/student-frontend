import React, { useState } from 'react';


function UpdateVoter({ onUpdate }) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [contact, setContact] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const handleUpdateVoter = () => {
        onUpdate({ id, name, city, state, contact, birthDate });
        setId('');
        setName('');
        setCity('');
        setState('');
        setContact(''); 
        setBirthDate('');
    };

    return (
        <div>
            <h2>Update Voter</h2>
            <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="text" placeholder="New Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
            <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
            <input type="date" placeholder="Birth Date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            <button onClick={handleUpdateVoter}>Update Voter</button>
        </div>
    );
}

export default UpdateVoter;
