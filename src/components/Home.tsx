import '../style/home.scss';
import { ReactComponent as Cover } from './../assets/cover.svg';
import TypeWriterEffect from 'react-typewriter-effect';
import Card from './Card';

export default function Home() {

  return (
    <>
      <div className='home'>
        <span className='typing'>
          <h1>Hey there, I'm Prodyut Das</h1>
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Courier New',
              color: 'white',
              fontWeight: 700,
              fontSize: '1.2rem',
            }}
            startDelay={2000}
            cursorColor="black"
            multiText={[
              'Hey there, This is a type writer animation package',
              'it consist of two types...',
              'Single text display and multi text display',
              'Fonts can be customized.',
              'The type speed can be customized as well',
            ]}
            multiTextDelay={1000}
            typeSpeed={70}
          />
        </span>
        <Cover className='cover' />
      </div>
      {/* <div className='padding-section cover'>
        <div className='team'>
          <div className='card-title'>Team Player</div>
        </div>
      </div> */}
        <Card/>
        <Card/>
        <Card/>
    </>
  )
}
