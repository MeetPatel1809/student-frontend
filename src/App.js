import React, { useState } from 'react';
import AddVoter from './components/AddVoter';
import RemoveVoter from './components/RemoveVoter';
import UpdateVoter from './components/UpdateVoter';
import VoterList from './components/VoterList';
import Voting from './components/Voting';
import AddCandidate from './components/AddCandidate';
import RemoveCandidate from './components/RemoveCandidate';
import UpdateCandidate from './components/UpdateCandidate';
import CandidateList from './components/CandidateList';
import './App.css';

function App() {
    const [voters, setVoters] = useState([]);
    const [candidates, setCandidates] = useState([]);

    const handleAddVoter = (newVoter) => {
        setVoters([...voters, newVoter]);
    };

    const handleRemoveVoter = (idToRemove) => {
        setVoters(voters.filter(voter => voter.id !== idToRemove));
    };

    const handleUpdateVoter = (updatedVoter) => {
        setVoters(voters.map(voter => {
            if (voter.id === updatedVoter.id) {
                return { ...voter, name: updatedVoter.name };
            }
            return voter;
        }));
    };

    const handleAddCandidate = (newCandidate) => {
        setCandidates([...candidates, newCandidate]);
    };

    const handleRemoveCandidate = (idToRemove) => {
        setCandidates(candidates.filter(candidate => candidate.id !== idToRemove));
    };

    const handleUpdateCandidate = (updatedCandidate) => {
        setCandidates(candidates.map(candidate => {
            if (candidate.id === updatedCandidate.id) {
                return { ...candidate, name: updatedCandidate.name };
            }
            return candidate;
        }));
    };

    const handleVote = () => {
        // Logic for handling voting
        // This function will be implemented later
    };

    return (
        <div className="container">
            <h1 className="header">Online Voting System</h1>
            <div className="section">
                <h2 className="votersName">Voters</h2>
                <AddVoter onAdd={handleAddVoter} />
                <RemoveVoter onRemove={handleRemoveVoter} />
                <UpdateVoter onUpdate={handleUpdateVoter} />
                <VoterList voters={voters} />
            </div>
            <div className="section">
                <h2 className="candidatenames">Candidates</h2>
                <AddCandidate onAdd={handleAddCandidate} />
                <RemoveCandidate onRemove={handleRemoveCandidate} />
                <UpdateCandidate onUpdate={handleUpdateCandidate} />
                <CandidateList candidates={candidates} />
            </div>
            <h2 className="votes">Voting</h2>
                <Voting onVote={handleVote} voters={voters} candidates={candidates} />
            
        </div>
    );
}

export default App;
