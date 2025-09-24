import { useState } from 'react';
import Star from './components/Star';
import './css/App.css';

function App() {
  const [rating, setRating] = useState(0);

  return (
    <Star rating={rating} setRating={setRating} />
  )
}

export default App;
