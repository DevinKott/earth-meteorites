import React, { useState } from 'react';

const URL = 'https://data.nasa.gov/resource/y77d-th95.json';

function LoadMeteorites() {
    const [meteorites, setMeteorites] = useState([]);
    const [error, setError] = useState(false);

    const buttonHandler = () => {
        fetch(`${URL}`).then(
            async (response) => {
                const json = await response.json();
                setMeteorites(json);
                console.log(json);
            }
        ).catch(
            () => {
                setError(true);
            }
        );
    }

    return (
        <section
        className='flex flex-col'
        >
            <h3
                className='text-xl font-semibold mt-4 mb-4'
            >
                Step 2
            </h3>
            <span>Please click the button below to load the meteorites.</span>
            <button
                className='max-w-xs p-2 mt-4 mb-4 font-semibold bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow'
                onClick={buttonHandler}
            >
                Load Meteorites
            </button>
            <span className='font-semibold'>Meteorites Loaded: {meteorites.length}</span>
            {
                error &&
                <section>
                    <span className='text-red-700'>
                        There was a problem fetching the meteorites list.
                    </span>
                </section>
            }
        </section>
    );
}

export default LoadMeteorites;