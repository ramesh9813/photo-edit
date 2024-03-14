 
import './App.css';
import myImage from './image/imag.jpg';
import React,{useState} from 'react';

function App() {
  const filter = {
    blurness: "blur(0px)",
    brights: "brightness(100%)",
    contrasts: "contrast(100%)",
    grayscales: "grayscale(0%)",
    inverts: "invert(0%)",
    opacitys: "opacity(1)",
    saturates: "saturate(100%)",
    sepias: "sepia(0%)"
  };
  function concatenateStyles(obj) {
    const singleLineStyle = {filter:Object.values(obj).join(' ')}
    return singleLineStyle
  }
  const [styles,setStyle]= useState(filter);

  const combinedStyles = concatenateStyles(styles);

  
  const [imageChange, setImageChange] = useState(combinedStyles)
  const [blurs,setblur] = useState(0)
  const [brights,setBrights] = useState(100)
  const [contrasts,setContrasts] = useState(100)
  const [grayscales,setGrayscales] = useState(0)
  const [inverts,setInverts] = useState(0)
  const [opacitys,setOpacitys] = useState(100)
  const [saturates,setSaturates] = useState(0)
  const [sepias,setSepias] = useState(0)
  


// handle blur control function 
  const handleBlurness=(e) => {
    e.preventDefault()
    setblur(`${e.target.value}`)
    setStyle((prev)=>{
      const newcahnge={ ...prev, blurness: `blur(${(15/100)*e.target.value}px)` };
      const newStyle=concatenateStyles(newcahnge)
      return newStyle
    })
    setImageChange(styles)
  }

// handle brightness control function
  const handleBrights=(e)=>{
    e.preventDefault()
    setBrights(e.target.value)
    setStyle((prev)=>{
      const newcahnge = { ...prev, brights: `brightness(${e.target.value}%)` };
      const newStyle=concatenateStyles(newcahnge)
      return newStyle;
    })
    setImageChange(styles)
}

//handle contrast of the image
  const handleContrasts=(e)=>{
    e.preventDefault()
    setContrasts(e.target.value)
    setStyle((prev)=>{
      const newcahnge = { ...prev, contrasts: `contrast(${e.target.value}%)` };
      const newStyle=concatenateStyles(newcahnge)
      return newStyle;
    })
    setImageChange(styles)
  }

  // handle the gayscale  function
  const handleGrayscales=(e)=>{
    e.preventDefault()
    setGrayscales(e.target.value)
    setStyle((prev)=>{
      const newcahnge = { ...prev, grayscales: `grayscale(${e.target.value}%)`};
      const newStyle=concatenateStyles(newcahnge)
      return newStyle;
    })
    setImageChange(styles)
  }


  const handleInverts=(e)=>{
    e.preventDefault()
    setInverts(e.target.value)
    setStyle((prev)=>{
      const newcahnge = { ...prev, inverts: `invert(${e.target.value}%)`};
      const newStyle=concatenateStyles(newcahnge)
      return newStyle;
    })
    setImageChange(styles)
  }

  const handleOpacitys=(e)=>{
    e.preventDefault()
    setOpacitys(e.target.value)
    setStyle((prev)=>{
      const newcahnge = { ...prev, opacitys: `opacity(${e.target.value}%)`};
      const newStyle=concatenateStyles(newcahnge)
      return newStyle;
    })
    setImageChange(styles)
  }


  const handleSaturates=(e)=>{
    e.preventDefault()
    setSaturates(e.target.value)
    setStyle((prev)=>{
      const newcahnge = { ...prev, saturates: `saturate(${e.target.value}%)` };
      const newStyle=concatenateStyles(newcahnge)
      return newStyle;
    })
    setImageChange(styles)
  }

    

  const handleSepias=(e)=>{
    e.preventDefault()
    setSepias(e.target.value)
    setStyle((prev)=>{
      const newcahnge = { ...prev, sepias: `sepia(${e.target.value}%)` };
      const newStyle=concatenateStyles(newcahnge)
      return newStyle;
    })
    setImageChange(styles)
  }
  
  return (
    <>
    <div className="container d-flex mt-3">

    <div className="image first">
    <div className="container ">
     <img src={myImage} height="400"alt="" style={imageChange}/>
     <hr />
    </div>
    </div>
   

    <div className="controller second">
   
            {/* for bluring the image */}
      <div className="container blur">
        <label htmlFor="blur">Blur: </label>
        <input type="range" id="blur" name="blur" min="0" max="100" value={blurs} onChange={handleBlurness}/>
          <span id="volumeValue">{blurs}</span>
      </div>

      {/* for brightness the image */}
      <div className="container brightness ">
        <label htmlFor="brightness">Brightness: </label>
        <input type="range" id="brightness" name="brightness" min="0" max="200" value={brights} onChange={handleBrights}/>
          <span id="volumeValue">{brights}%</span>
      </div>

      {/* for contrast the image */}
      <div className="container contrast">
        <label htmlFor="contrast">contrast:  </label>
        <input type="range" id="contrast" name="contrast" min="0" max="200" value={contrasts} onChange={handleContrasts}/>
          <span id="volumeValue">{contrasts}%</span>
      </div>
  

      {/* making the image to grayscale */}
      <div className="container grayscale">
        <label htmlFor="grayscale">grayscale: </label>
        <input type="range" id="grayscale" name="grayscale" min="0" max="100" value={grayscales} onChange={handleGrayscales}/>
          <span id="volumeValue"> {grayscales}%</span>
      </div>
  

      {/* making inverted  image   */}
      <div className="container invert">
        <label htmlFor="invert">invert: </label>
        <input type="range" id="invert" name="invert" min="0" max="100" value={inverts} onChange={handleInverts}/>
          <span id="volumeValue"> {inverts}%</span>
      </div>

      {/* changing the opacity of image*/}
      <div className="container  opacity">
        <label htmlFor="opacity"> opacity : </label>
        <input type="range" id="opacity" name="opacity" min="0" max="100" value={opacitys} onChange={handleOpacitys}/>
          <span id="volumeValue"> {opacitys}%</span>
      </div>

      {/* changing the saturation of the image */}
      <div className="container saturation">
        <label htmlFor="saturation">saturation : </label>
        <input type="range" id="saturation" name="saturation" min="0" max="1000" value={saturates} onChange={handleSaturates}/>
          <span id="volumeValue"> {saturates}%</span>
      </div>

      {/* changing the sepia of the image */}
      <div className="container sepia">
        <label htmlFor="sepia">Sepias: </label>
        <input type="range" id="sepia" name="sepia" min="0" max="200" value={ sepias} onChange={handleSepias}/>
          <span id="volumeValue"> {sepias}%</span>
      </div>
      </div>
      </div>
      
    </>
   );
 }

export default App;
