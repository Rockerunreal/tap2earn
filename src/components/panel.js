import { useState, memo } from "react";

const Panel = memo((props) =>{
    const [mainBtnAct, setMainBtnAct] = useState(true)
    const [earnBtnAct, setEarnBtnAct] = useState(false)
    const [ToDoBtnAct, setToDoBtnAct] = useState(false)
    const [ProfileBtnAct, setProfileBtnAct] = useState(false)
    const [friendsBtnAct, setFriendsBtnAct] = useState(false)


    const OnClickMain= () => {
        setMainBtnAct(true);
        setEarnBtnAct(false);
        setFriendsBtnAct(false);
        setProfileBtnAct(false);
        setToDoBtnAct(false);
    }
    const OnClickEarn= () => {
        setMainBtnAct(false);
        setEarnBtnAct(true);
        setFriendsBtnAct(false);
        setProfileBtnAct(false);
        setToDoBtnAct(false);

    }
    const OnClickProf= () => {
        setMainBtnAct(false);
        setEarnBtnAct(false);
        setFriendsBtnAct(false);
        setProfileBtnAct(true);
        setToDoBtnAct(false);
    }
    const OnClickToDo= () => {
        setMainBtnAct(false);
        setEarnBtnAct(false);
        setFriendsBtnAct(false);
        setProfileBtnAct(false);
        setToDoBtnAct(true);
    }
    const OnClickFriends= () => {
        setMainBtnAct(false);
        setEarnBtnAct(false);
        setFriendsBtnAct(true);
        setProfileBtnAct(false);
        setToDoBtnAct(false);
    }



    return (
        <ul className="panel">
            <li onClick={OnClickMain}>
                <img onClick={props.onClickMainLay} src={mainBtnAct ? "/img/Menu active.png" : "/img/Menu default.png"}/>
            </li>
            <li onClick={OnClickEarn}>
                <img onClick={props.onClickEarnLay} src={earnBtnAct ? "/img/Earn active.png" : "/img/Earn default.png"}/>
            </li>
            <li onClick={OnClickProf}>
                <img onClick={props.onClickProfLay} src={ProfileBtnAct ? "/img/Profile active.png" : "/img/Profile default.png"}/>
            </li>
            <li onClick={OnClickToDo}>
                <img onClick={props.onClickToDoLay} src={ToDoBtnAct ? "/img/Tasks active.png" : "/img/Tasks default.png"}/>
            </li>
            <li onClick={OnClickFriends}>
                <img onClick={props.onClickFriendsLay} src={friendsBtnAct ? "/img/Friends active.png": "/img/Friends default.png"}/>
            </li>
        </ul>

)});

export default Panel;