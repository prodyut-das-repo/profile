import { useState } from 'react'
import './../style/about.scss'
import Accordion from './Accordion'
import data from '../data/data.json';
export default function About() {
  const [state, setState] = useState(data);
  return (
    <div className='card-about'>
      <h3>PERSONAL PROFILE</h3>
      <ul>
        {state.data.profile.map(item =>
          <li>{item}</li>
        )}
      </ul>
      <Accordion experience={state.data.work_experience} />
    </div>
  )
}
