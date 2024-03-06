    import React, { useState } from 'react';
    

    function RemoveVoter({ onRemove }) {
        const [id, setId] = useState('');

        const handleRemoveVoter = () => {
            onRemove(id);
            setId('');
        };

        return (
            <div>
                <h2>Remove Voter</h2>
                <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
                <button onClick={handleRemoveVoter}>Remove Voter</button>
            </div>
        );
    }

    export default RemoveVoter;
