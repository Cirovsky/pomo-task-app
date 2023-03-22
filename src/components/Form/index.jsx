import { useState } from "react";
import Button from "../Button";
import InputSelect from "../InputSelect";
import Input from "../Input";
import "./Form.css";

function Form({priorityList, progressList, newTask}){

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('média');
    const [progress, setProgress] = useState('a fazer');
    const [deadline, setDeadline] = useState('');
    const [deadlineHour, setDeadlineHour] = useState('12:00');
    return(
            <form className="container form" onSubmit={e => {
                e.preventDefault();
                newTask(title, priority, progress, deadline, deadlineHour);
                setTitle('');
                setPriority('média');
                setProgress('a fazer');
                setDeadline('');
                setDeadlineHour('12:00');

            }}>
                <h2>Adicionar nova Tarefa:</h2>

                <Input 
                    name={"tarefa"} 
                    type={'text'} 
                    placeholder={"ex: limpar o quarto"} 
                    value={title} 
                    setValue={value => setTitle(value)}
                    required={true}
                    
                />
                
                <InputSelect 
                    name={"prioridade"} 
                    options = {priorityList}
                    value={priority}
                    setValue={value => setPriority(value)}
                    required={false}
                />

                <InputSelect 
                    name={"progresso"} 
                    options = {progressList}
                    value={progress}
                    setValue={value => setProgress(value)}
                    required={false}
                />
                <fieldset>
                Prazo:
                    <Input 
                        name={'data'}
                        type={'date'}
                        value={deadline} 
                        setValue={value => setDeadline(value)}
                        required={false}
                    />
                    <Input 
                        name={'horário'}
                        type={'time'}
                        value={deadlineHour}
                        setValue={value => setDeadlineHour(value)}
                        required={false}
                    />
                </fieldset>
                               
                <Button>
                    add
                </Button>
            </form>
    );
}
export default Form;