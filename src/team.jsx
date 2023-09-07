import { useState } from "react";

export default function Team() {
    const [team, setTeam] = useState(11)

    const handleClick = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleClickRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
        
    }

    const teamStyle = {
        border: '2px solid yellow',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'

    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleClickRemove}>Remove</button>
        </div>
    );
    
}