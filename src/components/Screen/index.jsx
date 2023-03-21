import MainTask from '../MainTask';
import './Screen.css';

const Screen = ({title}) => {
    return(
        <>
        <h2>{title} :</h2>
        <div className="container screen">
            <MainTask title={'a fazer'}/>
            <MainTask title={'fazendo'}/>
            <MainTask title= {'concluído'}/>
        </div>
        </>
            
    )
}

export default Screen;