
import './App.css';
import Friends from './components/Friends';
import Earnings from './components/layouts/earnings';
import Machine from './components/Machine';
import Money_info from './components/money_info';
import Panel from './components/panel';
import ProgresBar from './components/ProgresBar';
import ToDoList from './components/ToDoList';
import { useEffect, useState, useContext, memo } from "react";
let data = await fetch('https://api.spin2win.tech/GetUser/0');
let user = await data.json();

const App = memo(() => {

  const [MainPageOpenned, setMainPageOpenned] = useState(true);
  const [ToDoListOpenned, setToDoListOpenned] = useState(false);
  const [EarningsOpenned, setEarningsOpenned] = useState(false);
  const [FriendsOpenned, setFriendsOpenned] = useState(false);
  const [ProfileOpenned, setProfileOpenned] = useState(false);
  const [balance, setBalance] = useState(user.balance);

 

  const EarnLay = () => {
    setEarningsOpenned(true);
    setFriendsOpenned(false);
    setToDoListOpenned(false);
    setProfileOpenned(false);
  }
  const ToDoLay = () => {
    setEarningsOpenned(false);
    setFriendsOpenned(false);
    setToDoListOpenned(true);
    setProfileOpenned(false);
  }
  const FriendsLay = () => {
    setEarningsOpenned(false);
    setFriendsOpenned(true);
    setToDoListOpenned(false);
    setProfileOpenned(false);
  }
  const ProfLay = () => {
    setEarningsOpenned(false);
    setFriendsOpenned(false);
    setToDoListOpenned(false);
    setProfileOpenned(true);
  }
  const MainLay = () => {
    setEarningsOpenned(false);
    setFriendsOpenned(false);
    setToDoListOpenned(false);
    setProfileOpenned(false);
  }
  const increment = (num) =>{
    setBalance(balance + num);
  }


   
  return (
    <div className="App">
      <Money_info data={balance}/>
      <ProgresBar data={user} />
      <Machine data={user} balance={increment}/>


      <img className='cat1' src='img\Cat1.png' />
      <img className='cat2' src='img\Cat2.png' />

      {EarningsOpenned ? <Earnings data={user}/> : null}
      {ToDoListOpenned ? <ToDoList data={user} /> : null}
      {FriendsOpenned ? <Friends data={user}/> : null}


      <Panel  
        onClickEarnLay={EarnLay} 
        onClickProfLay={ProfLay}
        onClickToDoLay={ToDoLay} 
        onClickFriendsLay={FriendsLay} 
        onClickMainLay={MainLay}
      />
    </div>
  );
})

export default App;

