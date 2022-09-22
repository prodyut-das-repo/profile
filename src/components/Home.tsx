import '../style/home.scss';
import coverPhoto from '../assets/cover-photo.png'
import Editor from './Editor/Editor';
export default function Home() {
  return (
    <div>
      <header>Code is like humor. When you have to explain it, it’s bad.</header>
      <img src={coverPhoto} />
      <div className='flex'>
        <div></div>
        <Editor/>
      </div>
    </div>
  )
}
