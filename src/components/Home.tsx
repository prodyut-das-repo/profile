import '../style/home.scss';
import { ReactComponent as Cover } from './../assets/cover.svg';
import TypeWriterEffect from 'react-typewriter-effect';
import Card from './Card';
import Footer from './Footer';
import team from './../assets/team-player.png';
import problem from './../assets/problem-solver.png';
import flexi from './../assets/flexi.png'
import expertise from './../assets/expertise-image.png'

import { IoDocumentText } from 'react-icons/io5';


export default function Home() {
  const resumeClick = () => {
    const a = document.createElement('a');
    a.href = 'https://drive.google.com/file/d/1M7ypLhKb7pdgVNqp31T6H42mV7fFnpmL/view?usp=sharing';
    a.target = "_blank";
    a.click();
  }
  return (
    <>
      <div className='home'>
        <span className='typing'>
          <h1 style={{ marginBottom: '10px' }}>Hey there, This is Prodyut Das!</h1>
          <button className="btn shadow" onClick={resumeClick}><IoDocumentText /><label className='pointer'>Download Resume</label></button>
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Courier New',
              color: '#98ffee',
              fontWeight: 700,
              fontSize: '0.7em',
            }}
            startDelay={100}
            cursorColor="white"
            text={`I'm a software engineer with over 4 years of experience working in the tech industry delivering top-notch app development and troubleshooting. Highly adept in leading engineer teams to achieve software development upgrades.`}
            typeSpeed={30}
          />
          <hr></hr>
          <br></br>
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Courier New',
              color: '#98ffee',
              fontWeight: 700,
              fontSize: '1.5em',
            }}
            startDelay={10000}
            cursorColor="white"
            text={`Ah great! please scroll now ^_^`}
            typeSpeed={30}
          />
        </span>
        <br />
        <Cover className='cover shadow' />
      </div>
      <br />
      <br/>
      <Card text='A team player is someone who actively contributes to their group in order to complete tasks, meet goals or manage projects. Team players actively listen to their coworkers, respect ideas and aim to improve the product or process at hand.' shield={team} image="team-image"/>
      <Card text='Generally, the problem could be in any one several places, and you have to devise experiments to narrow down where the problem is. Efficient problem solving requires coming up with experiments that each eliminate about half the possibilities, repeating until you pin down the exact cause.' shield={problem} image="solver-image"/>
      <Card text='An important capability for businesses to thrive and grow, and even survive, is the ability to react and adapt to change. This relates to customer needs, expansion into new markets, or utilizing the latest and greatest in technology.' shield={flexi} image="flexi-image"/>
      <Card text="When it comes to difficulties of software development, it's important to understand that sometimes, without true expertise, it is impossible to properly assess the core of the problem." shield={expertise} image="expertise-image"/>
      <Footer />
    </>
  )
}
