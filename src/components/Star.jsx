import { useState } from 'react';

function Star({ rating, setRating }) {

    const star_arr = [1, 2, 3, 4, 5];
    const [hover, setHover] = useState(0);

    return (
        <div>
            {star_arr.map((star) => {
                return (
                    <span
                        className='start'
                        style={{
                            cursor: 'pointer',
                            color: (hover || rating) >= star ? 'gold' : 'gray',
                            fontSize: `35px`,
                            transition: "color 0.2s ease-in-out",
                        }}
                        onClick={() => { setRating(star) }}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                    >
                        {' '}★{' '}
                    </span>
                )
            })}
        </div>
    )
}

export default Star;