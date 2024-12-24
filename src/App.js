import React, { useState, useEffect } from 'react';
import LoadingScreen from '../src/Components/LoadingScreen';
import Form from '../src/Components/Form';
import audiosound from './Assets/images/sound.mp3';

function App() {
  const [loading, setLoading] = useState(true);
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handlePredict = async (carData) => {
    setLoading(true); 
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(carData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result.error) {
        throw new Error(result.error);
      }
      setPredictedPrice(result.predicted_price);
    } catch (error) {
      console.error('Error:', error);
      alert(`Failed to get the prediction: ${error.message}`);
    } finally {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Initial loading screen duration

    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, []);

  useEffect(() => {
    const audio = new Audio(audiosound);
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
        <Form onPredict={handlePredict} />
      )}
      {predictedPrice !== null && !loading && (
        <div className='predicted-price-container'>
          <h3>Predicted Price: {predictedPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
