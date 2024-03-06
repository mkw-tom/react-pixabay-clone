import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
    const endpointURL = `https://pixabay.com/api/?key=42517536-94329ae0feda69ba424375dc5&q=${ref.current.value}&image_type=photo&pretty=true`;
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      })
  }

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='画像を探す' ref={ref}/>
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
