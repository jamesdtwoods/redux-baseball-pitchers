import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TotalPitchers from '../TotalPitchers/TotalPitchers';
import TotalCatchers from '../TotalCatchers/TotalCatchers';
import OnTheMound from '../OnTheMound/OnTheMound';
import BehindThePlate from '../BehindThePlate/BehindThePlate';
import PitcherForm from '../PitcherForm/PitcherForm';

function App() {
  // const [currentPitcher, setCurrentPitcher] = useState('Maud Nelson');
  // const [currentCatcher, setCurrentCatcher] = useState('Elston Howard');

  
  // const [newPitcher, setNewPitcher] = useState('');
  const [newCatcher, setNewCatcher] = useState('');

  const pitcherList = useSelector((store) => store.pitcherList)
  const catcherList = useSelector((store) => store.catcherList)

  const dispatch = useDispatch()

  // const handlePitcherNameChange = event => {
  //   setNewPitcher(event.target.value);
  // };

  // add new pitcher to the array. this will move to the pitcher reducer!
  // const handlePitcherSubmit = event => {
  //   event.preventDefault();
    // spread: give me everything in pitcherList, then add this new thing
    // setPitcherList([...pitcherList, newPitcher]);
    // setNewPitcher('');
  // };
  
  const handleCatcherNameChange = event => {
    setNewCatcher(event.target.value);
  };

  // add new catcher to array. this will move to the catcher reducer!
  // const handleCatcherSubmit = event => {
  //   event.preventDefault();
    // spread: give me everything in catcherList, then add this new thing
    // setCatcherList([...catcherList, newCatcher]);
    // setNewCatcher('');
  // };


  // const handlePitcherSubmit = (e) => {
  //   e.preventDefault()
  //   setNewPitcher('');

  //   dispatch({
  //     type: 'ADD_PITCHER',
  //     payload: newPitcher
  //   })
  // }

  const handleCatcherSubmit = (e) => {
    e.preventDefault()
    setNewCatcher('');

    dispatch({
      type: 'ADD_CATCHER',
      payload: newCatcher
    })
  }

  const setCurrentPitcher = (pitcher) => {

    dispatch({
      type: 'SET_CURRENT_PITCHER',
      payload: pitcher
    })
  }

  const setCurrentCatcher = (catcher) => {

    dispatch({
      type: 'SET_CURRENT_CATCHER',
      payload: catcher
    })
  }

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <OnTheMound />
      <BehindThePlate />
      <TotalPitchers />
      <TotalCatchers />
      <h3>All Pitchers</h3>
      {/* <form onSubmit={handlePitcherSubmit}>
        <input
          type="text"
          value={newPitcher}
          onChange={handlePitcherNameChange}
          placeholder="New Pitcher Name"
        />
        <button type="submit">Add Pitcher</button>
      </form> */}
      <PitcherForm />
      <ul>
        {pitcherList.map(pitcher => (
          <li
            onClick={() => setCurrentPitcher(pitcher)}
          >
            {pitcher}
          </li>
        ))}
      </ul>
      <h3>All Catchers</h3>
      <form onSubmit={handleCatcherSubmit}>
        <input
          type="text"
          value={newCatcher}
          onChange={handleCatcherNameChange}
          placeholder="New Catcher Name"
        />
        <button type="submit">Add Catcher</button>
      </form>
      <ul>
        {catcherList.map(catcher => (
          <li
            onClick={() => setCurrentCatcher(catcher)}
          >
            {catcher}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
