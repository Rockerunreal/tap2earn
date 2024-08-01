import { memo } from "react";

const ToDoList = memo((props) => {
    return (
    <div className="layout_td">
        <img className="td_img" src="img\Bitecoin2 1.png" />
        <div className="lay_td">
            {props.data.tasks.map((task) => (
                <div className="task">
                    <img src={task.img_url} className="task_image" />
                    <div className="task_text">
                        <span className="task_title">{task.title}</span>
                        <span className="task_description">{task.description}</span>
                        <div className="task_price">
                            <img className="mny" src="/img/Moneta3 1.png" />
                            <span>+ {task.cost}</span>
                        </div>
                    </div>
                    <button>Claim</button>
                </div>
            ))}
           
        </div>
        


    </div>

    
)});

export default ToDoList;