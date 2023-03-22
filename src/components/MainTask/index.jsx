import TaskCard from "../TaskCard";
import './MainTask.css';
import {MdKeyboardArrowRight} from 'react-icons/md'

const MainTask = ({title}) =>{
    return(
        <div className="container main-task">
                <div className="container top__main-task">
                    <h2 className="title__main-task">{title}</h2>
                    <MdKeyboardArrowRight className="arrow"/>
                </div>
            
            <TaskCard title={'tarefa'} />
        </div>
    )
}

export default MainTask;