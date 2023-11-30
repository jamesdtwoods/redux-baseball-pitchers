import { useDispatch } from 'react-redux';
import {useState} from 'react';


function PitcherForm () {
    const [newPitcher, setNewPitcher] = useState('');
    
    const dispatch = useDispatch()

    const handlePitcherNameChange = event => {
        setNewPitcher(event.target.value);
    };

    const handlePitcherSubmit = (e) => {
        e.preventDefault()
        setNewPitcher('');

        dispatch({
            type: 'ADD_PITCHER',
            payload: newPitcher
        })
    }

    return(
        <form onSubmit={handlePitcherSubmit}>
            <input
            type="text"
            value={newPitcher}
            onChange={handlePitcherNameChange}
            placeholder="New Pitcher Name"
            />
            <button type="submit">Add Pitcher</button>
        </form>
    )
}

export default PitcherForm