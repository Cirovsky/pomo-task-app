import Task from "../Task";
import './MainTask.css';

const MainTask = ({title}) =>{
    return(
        <ul className="container main-task">
            <h2>{title}</h2>
            <Task/>
        </ul>
    )
}

export default MainTask;