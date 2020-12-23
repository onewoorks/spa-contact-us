import './App.css';
import Lottie from 'react-lottie'
import animationData from './lotties/contact-us'

function App() {

  const defaultOption = {
    loop: true,
    autoPlay: true,
    animationData: animationData,
    rendererSettings: {
      preservedAspectRatio: "xMidYMid slice"
    }
  }
  return (
    <div className="App">
      <div className="App-header">
      <Lottie options={defaultOption} height={500} width={750} />
      <div style={{fontSize:'1.2em', textTransform:"uppercase", lineHeight:'1em'}}>
      <div>Modul ini belum diaktifkan</div>
      <div>Hubungi Kami</div>
      </div>
      <div style={{marginTop:10, textDecoration:'italic', fontSize:'0.6em'}}><i>Onewoorks Solutions | Web Application Developer</i></div>
      </div>
    </div>
  );
}

export default App;
