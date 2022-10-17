import './../style/card.scss';
import TypeWriterEffect from 'react-typewriter-effect';

interface ICard {
    text?: string;
    shield?: string;
}
export default function Card(props: ICard) {
    return (
        <>
        <div className="container-card mobile">
            <div className="card cover">
                <label className='text-on-card'>Touch me</label>
                <div className="overlay">
                    <div className="overlay-text">
                        <img src={props.shield} height="200" />
                        <p className='text'>
                            <TypeWriterEffect
                                textStyle={{
                                    fontFamily: 'Courier New',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '0.7em',
                                  }}
                                startDelay={100}
                                cursorColor="white"
                                text={props.text}
                                typeSpeed={30}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className="flex-card big-screen">
            <div className="card cover">
            </div>
            <div className="overlay-text">
                        <img src={props.shield} height="200" className='cover' />
                        <p className='text'>
                            <TypeWriterEffect
                                textStyle={{
                                    fontFamily: 'Courier New',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '0.7em',
                                  }}
                                startDelay={100}
                                cursorColor="white"
                                text={props.text}
                                typeSpeed={30}
                            />
                        </p>
                    </div>
        </div>
        </div>
        </>
    )
}
