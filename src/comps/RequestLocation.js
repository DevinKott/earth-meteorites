import React, { useState } from 'react';

const DECIMALS = 6;

function RequestLocation() {
    const [location, setLocation] = useState({ latitude: undefined, longitude: undefined });
    const [error, setError] = useState(false);

    const buttonHandler = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation(
                        {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        }
                    );
                    setError(false);
                },
                (error) => {
                    setError(true);
                }
            );
        } else {
            setError(true);
        }
    }

    return (
        <section
        className='flex flex-col'
        >
            <h3
                className='text-xl font-semibold mt-4 mb-4'
            >
                Step 1
            </h3>
            <span>Please click the button below to enable location tracking from your browser.</span>
            <button
                className='max-w-xs p-2 mt-4 mb-4 font-semibold bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow'
                onClick={buttonHandler}
            >
                Enable Location
            </button>
            <section
                className='flex flex-col'
            >
                <span className='font-semibold'>Latitude: {location.latitude !== undefined ? parseFloat(location.latitude).toFixed(DECIMALS) : 'Not available.'}</span>
                <span className='font-semibold'>Longtitude: {location.longitude !== undefined ? parseFloat(location.longitude).toFixed(DECIMALS) : 'Not available.'}</span>
            </section>
            {
                error &&
                <section>
                    <span className='text-red-700'>
                        There was a problem requesting your location.
                        This application will not function if you do not allow access.
                    </span>
                </section>
            }
        </section>
    );
}

export default RequestLocation;