import '../style/accordion.scss'
import capgemini from '../assets/capgemini.png';
import cisco from '../assets/cisco.png';

export default function Accordion(props: any) {
    return (<div className='accordion'>
        <h3>Work Experiences</h3>
        <div className="row">
            <div className="col">
                <div className="tabs shadow">
                    {props.experience.map((item, index) =>
                        <div className="tab">
                            <input type="checkbox" id={`chck${index + 1}`} />
                            <label className="tab-label border-bot" htmlFor={`chck${index + 1}`} ><span><img src={index === 0 ? capgemini : cisco} height='30' /><p>{item.duration}</p></span></label>
                            <div className="tab-content">
                                {item.projects.map(project => 
                                    <>
                                    <label><b>Title: </b>{project.title}</label>
                                    <div><b>Description: </b>{project.desc}</div>
                                    <div><b>Role:</b> {project.role}</div>
                                    <ul>
                                        {project.work.map(task=>
                                           <li>{task}</li>
                                        )}
                                    </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    )
}
