import '../style/home.scss';
import { ReactComponent as Cover } from './../assets/cover.svg';
import TypeWriterEffect from 'react-typewriter-effect';
import Card from './Card';
import Footer from './Footer';
import team from './../assets/team-player.png'


export default function Home() {

  return (
    <>
      <div className='home'>
        <span className='typing'>
          <h1>Hey there, This is Prodyut Das!</h1>
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
        <Cover className='cover' />
      </div>
      {/* <div className='padding-section cover'>
        <div className='team'>
          <div className='card-title'>Team Player</div>
        </div>
      </div> */}
      <Card text='A team player is someone who actively contributes to their group in order to complete tasks, meet goals or manage projects. Team players actively listen to their coworkers, respect ideas and aim to improve the product or process at hand.' shield={team} />
      <Card text='' />
      <Card text='' />
      <Footer />
    </>
  )
}
