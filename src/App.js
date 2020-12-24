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
        <img src="/images/onewoorks2015.jpg" alt="onewoork solutions" />
      <Lottie options={defaultOption} height={350} width={600} />
      <div style={{fontSize:'1.2em', textTransform:"uppercase", lineHeight:'1.2em'}}>
      <div>Modul ini belum diaktifkan</div>
      <div>Hubungi Kami</div>
      </div>
      <div style={{marginTop:10, textDecoration:'italic', fontSize:'0.6em'}}><i>Onewoorks Solutions | Web Application Developer</i></div>
      <a style={{fontSize:'0.6em', textDecoration:'none', marginTop:15}} href="https://apps.pengurusanemas.my">Kembali ke Cental Apps</a>
      </div>
    </div>
  );
}

export default App;
