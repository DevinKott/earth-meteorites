import React, { useState } from 'react';

function SliderComp() {
    const [location, setLocation] = useState({ latitude: undefined, longitude: undefined });

    return (
        <section
        className='flex flex-col'
        >
            <h3
                className='text-xl font-semibold mt-4 mb-4'
            >
                Step 3
            </h3>
            <span>Please set a distance using the slider.</span>
            <section>
                <input type="range"/>
            </section>
            <section
                className='flex flex-col'
            >
                <span className='font-semibold'>Latitude: {location.latitude !== undefined ? parseFloat(location.latitude).toFixed(6) : 'Not available.'}</span>
                <span className='font-semibold'>Longtitude: {location.longitude !== undefined ? parseFloat(location.longitude).toFixed(6) : 'Not available.'}</span>
            </section>
        </section>
    );
}

export default SliderComp;