import '../style/home.scss';
import Editor from './Editor/Editor';
import { useEffect, useRef } from 'react';

export default function Home() {
  const ed1 = useRef<HTMLElement>(null);
  const ed2 = useRef<HTMLElement>(null);
  const ed3 = useRef<HTMLElement>(null);
  const positionGenerator = () => {
    const position = `
      position: 'absolute',
      top: ${Math.floor(Math.random() * 400)},
      left: ${Math.floor(Math.random() * 100)}%,
      transform: 'translate(-50%, -50%)'`
    return position;
  }
  useEffect(() => {
    if (ed1 && ed2 && ed3 && ed1.current && ed2.current && ed3.current) {
      ed1.current.style.position = 'absolute';
      ed2.current.style.position = 'absolute';
      ed3.current.style.position = 'absolute';
      ed1.current.style.top = Math.floor(Math.random() * 70) + '%';
      ed2.current.style.top = Math.floor(Math.random() * 70) + '%';
      ed3.current.style.top = Math.floor(Math.random() * 70) + '%';
      ed1.current.style.left = Math.floor(Math.random() * 50) + 30 + '%';
      ed2.current.style.left = Math.floor(Math.random() * 50) + 20 + '%';
      ed3.current.style.left = Math.floor(Math.random() * 50) + 15 + '%';
    }
  }, [])
  const handleZindex = (index: string) => {
    if (ed1 && ed2 && ed3 && ed1.current && ed2.current && ed3.current) {
      switch (index) {
        case '1':
          ed1.current.style.zIndex = '99';
          ed2.current.style.zIndex = '1';
          ed3.current.style.zIndex = '1';
          break;
        case '2':
          ed1.current.style.zIndex = '1';
          ed2.current.style.zIndex = '99';
          ed3.current.style.zIndex = '1';
          break;
        case '3':
          ed1.current.style.zIndex = '1';
          ed2.current.style.zIndex = '1';
          ed3.current.style.zIndex = '99';
          break;
      }
    }
  }
  return (
    <div>
      <header>These terminals are crazy friends, most of the time they stay together, please drag them to separate</header>
      {/* <img src={coverPhoto} /> */}
      <div className='flex'>
        <Editor handleZindex={handleZindex} index='1' reference={ed1} />
        <div></div>
        <div></div>
      </div>
      <div className='flex'>
        <div></div>
        <Editor handleZindex={handleZindex} index='2' reference={ed2} />
        <div></div>
      </div>
      <div className='flex'>
        <div></div>
        <div></div>
        <Editor handleZindex={handleZindex} index='3' reference={ed3} />
      </div>
    </div>
  )
}
