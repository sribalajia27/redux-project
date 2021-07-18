import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import { Button } from 'react-bootstrap';


function App() {

  const state = useSelector((state) => state); // Returns key value pair used in reducers
  const accountState = useSelector((state) => state.account); // Returns only value 
  const dispatch = useDispatch();

  const AC = bindActionCreators(actionCreators, dispatch);
  console.log(AC);
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  console.log(state);
  return (
    <div className="App">
      <h1> Hey Sribalaji.. Lets learn Redux!!</h1>
      <Button variant="primary" onClick={() => depositMoney(1000)} > Deposit</Button>{' '}
      <Button variant="secondary" onClick={() => withdrawMoney(1000)}>Withdraw</Button>{' '}
      <h2>Total amount: {state.account}</h2>
    </div >
  );
}

export default App;
