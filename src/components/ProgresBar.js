import { memo } from "react";

const ProgresBar = memo((props) => {
    return (
        <div className="progress_panel">
            <div className="progress_text">
                <span className="league">League</span>
                <span className="level">Level</span>
            </div>
            <div className="pr_lay">
                <progress id="file" max="100" value={props.data.level}></progress>
            </div>
            
        </div>
        

)});

export default ProgresBar;