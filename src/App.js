 
import './App.css';
import myImage from './image/imag.jpg';
import React,{useState} from 'react';

function App() {
  const styles = [
    "blur(5px)",
    "brightness(150%)",
    "contrast(150%)",
    "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))",
    "grayscale(50%)",
    "hue-rotate(90deg)",
    "invert(100%)",
    "opacity(0.8)",
    "saturate(200%)",
    "sepia(50%)"
  ];
  
  const imgEffect={
    filter: styles.join(' ')
  }
  const [imageChange,setImageChange]=useState(imgEffect)
  const [blurs, setBlurs] = useState(0);
  const [contrast,setContrast]=useState(0);

  const handleBlurness = (event) => {
    setBlurs(event.target.value);
    setImageChange(()=>{
      let blurness=(5/100)*event.target.value
      return {filter:`blur(${blurness}px)`}
    })
  };

  const handleContrast=(e)=>{
    setContrast(e.target.value);
    setContrast(()=>{
      return{filter:`contrast(${e.target.value}%`}
    })
  }

  return (
    <>
    <div className="container ">
     <img src={myImage} height="400"alt="" style={imageChange}/>
     <hr />
    <div className="container">
      <label for="volume">Blur: </label>
      <input type="range" id="volume" name="volume" min="0" max="100" value={blurs} onChange={handleBlurness}/>
         <span id="volumeValue">{blurs}</span>
    </div>
    <div className="container">
      <label for="volume">contrast: </label>
      <input type="range" id="volume" name="volume" min="0" max="200" value={contrast} onChange={handleContrast}/>
         <span id="volumeValue"> {contrast}</span>
    </div>
      </div>
      
    </>
   );
 }

export default App;
