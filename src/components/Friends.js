import { memo } from "react";

const Friends = memo((props) => {
    return (
    <div className="layout_fr">
        <span className="fr_main_title">Приглашайте друзей!</span>
        <span className="fr_main_description">Вы и ваш друг получите награду</span>
           <div className="card_fr">
            <img className="fr_image" src="img\Подарок 2.png"/>
            <div className="fr_text">
                <span className="fr_title">Пригласите друга</span>
                <span className="fr_description">Вы и ваш друг получите по </span>
                <div className="fr_price">
                    <img className="mny" src="/img/Монета3 1.png" />
                    <span>+ 100 000</span>
                </div>
            </div>
        </div>
        
        <span className="fr_second_title">Список ваших друзей</span>

        <div className="fr_list">
            {props.data.friends.map((friend) => (
                <div className="fr_card">
                    <img src={friend.img_url}/>
                    <span>{friend.name}</span>
                </div>
            ))}
            
        </div>


    </div>

    
)});

export default Friends;