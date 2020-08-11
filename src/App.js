import React, { useState } from 'react';

import RequestLocation from './comps/RequestLocation'
import LoadMeteorites from './comps/LoadMeteorites'
import SliderComp from './comps/Slider'
import MeteoriteMap from './comps/MeteoriteMap'

function App() {
    const [location, setLocation] = useState({ latitude: undefined, longitude: undefined });
    const [meteorites, setMeteorites] = useState([]);
    const [range, setRange] = useState(undefined);

    const setRangePass = (incomingRange) => {
        setRange(incomingRange);
    }

    const setMeteoritesArray = (arr) => {
        setMeteorites(arr);
    }

    const setLocationObj = (loc) => {
        setLocation(loc);
    }

    return (
        <main
        className='flex justify-center text-gray-800'
        >
            <section
                className='max-w-4xl w-full p-4'
            >
                <h1
                    className='text-3xl font-semibold mt-4 mb-4'
                >
                    Earth Meteorites
                </h1>
                <p>
                    NASA provides a great list of earth meteorite landings, available in JSON format.
                    This site allows you to set your location and see the landings closest to you.
                </p>
                <p>
                    You location is needed for map utilities and calculating the distance to the
                    nearest meteorite landings. At no point is your location sent to anyone, including
                    me. Please audit the Network Tab in your browser to verify.
                </p>
                <RequestLocation setLocationObj={setLocationObj}/>
                <LoadMeteorites setMeteoritesArray={setMeteoritesArray}/>
                <SliderComp setRangePass={setRangePass}/>
                {
                    location.latitude !== undefined && location.longitude !== undefined && meteorites.length > 0 &&
                    <MeteoriteMap location={location} meteorites={meteorites}/>
                }
                
            </section>
        </main>
    );
}

export default App;
