import React, { useState } from 'react'
import './styles.css'
import Images from './images'
import images from './images';

function App() {
  // var defaultResim = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIc1dKexQm_qvbtCOPWdnhraE4c8yTRY6gg&usqp=CAU";
  // var defaultResim = "https://miro.medium.com/max/720/1*jX8OQ1gy_FjqYpd4yeTrzg.webp";
  let defaultResim = "https://miro.medium.com/max/720/1*EtC3B8fOixDrp9_VmAzjqg.webp";
  // const defaultResim = "https://miro.medium.com/max/720/1*Q0K1bs3XBEr8iwSQI91iAw.webp";
  const [selectedImg, setSelectedImg] = useState(defaultResim);

  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="Selected" className="selected" />
      </div>
      <div className="imgContainer">
        {Images.map((img, index) => (
          <img key={index} src={img} alt="tantuni"
            onClick={() => setSelectedImg(img)} />
        ))}
      </div>
    </div>
  )
}

export default App
