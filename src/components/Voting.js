import React, { useState } from 'react';
import './Voting.css';

function Voting({ onVote, voters, candidates }) {
    const [voterId, setVoterId] = useState('');
    const [candidateId, setCandidateId] = useState('');
    const [votes, setVotes] = useState([]);
    const [showVotes, setShowVotes] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [candidateVotes, setCandidateVotes] = useState([]);

    const handleVote = () => {
        // Check if both voter ID and candidate ID are valid
        const validVoter = voters.some(voter => voter.id === voterId);
        const validCandidate = candidates.some(candidate => candidate.id === candidateId);

        // Check if the voter has already voted
        const alreadyVoted = votes.some(vote => vote.voterId === voterId);

        if (validVoter && validCandidate) {
            if (!alreadyVoted) {
                onVote(voterId, candidateId);
                setVotes([...votes, { voterId, candidateId }]);
                alert(`Voter ID: ${voterId} voted for Candidate ID: ${candidateId}`);
                setVoterId('');
                setCandidateId('');
            } else {
                alert('You have already voted.');
            }
        } else {
            alert('Invalid voter ID or candidate ID');
        }
    };

    const handleShowVotes = () => {
        setShowVotes(true);
    };

    const handleShowResult = () => {
        const result = {};
        votes.forEach(vote => {
            if (result[vote.candidateId]) {
                result[vote.candidateId]++;
            } else {
                result[vote.candidateId] = 1;
            }
        });
        setCandidateVotes(result);
        setShowResult(true);
    };

    return (
        <div>
            <div>
                <label htmlFor="voterId">Voter ID:</label>
                <input type="text" id="voterId" value={voterId} onChange={(e) => setVoterId(e.target.value)} />
            </div>
            <div>
                <label htmlFor="candidateId">Candidate ID:</label>
                <input type="text" id="candidateId" value={candidateId} onChange={(e) => setCandidateId(e.target.value)} />
            </div>
            <button onClick={handleVote}>Vote</button>
            
            <br /><br /> {/* Line break */}
            <h2 className="showvotes">Show Voting</h2>
            <button onClick={handleShowVotes}>Show Votes</button>

            {showVotes && (
                <>
                    <h3>Vote List:</h3>
                    <ul>
                        {votes.map((vote, index) => (
                            <li key={index}>
                                Voter ID: {vote.voterId} - Candidate ID: {vote.candidateId}
                            </li>
                        ))}
                    </ul>
                </>
            )}

            <br /><br /> {/* Line break */}
            <button onClick={handleShowResult}>Show Result</button>

            {showResult && (
                <>
                    <h3>Candidate Votes:</h3>
                    <ul>
                        {Object.keys(candidateVotes).map(candidateId => (
                            <li key={candidateId}>
                                Candidate ID: {candidateId} - Votes: {candidateVotes[candidateId]}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default Voting;
