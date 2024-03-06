// RemoveCandidate.js
import React, { useState } from 'react';

function RemoveCandidate({ candidates, onRemove }) {
    const [id, setId] = useState('');

    const handleRemoveCandidate = () => {
        onRemove(id);
        setId('');
    };

    return (
        <div>
            <h2>Remove Candidate</h2>
            <input type="text" placeholder="Candidate ID" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={handleRemoveCandidate}>Remove Candidate</button>
        </div>
    );
}

export default RemoveCandidate;
