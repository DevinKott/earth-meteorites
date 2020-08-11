import React, { createRef, useEffect } from 'react';
import * as mapboxgl from 'mapbox-gl'
import moment from 'moment'
import { getDistance } from 'geolib'

function MeteoriteMap(props) {
    const mapRef = createRef();

    const {
        location,
        meteorites,
        range
    } = props;

    useEffect(
        () => {
            console.log(process.env)
            mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

            console.log(location)

            let map = new mapboxgl.Map(
                {
                    container: mapRef.current,
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [location.longitude || 0, location.latitude || 0],
                    zoom: 6
                }
            );

            meteorites.forEach(
                (meteor) => {
                    const name = meteor.name;
                    const year = meteor.year;

                    const longitude = parseFloat(meteor.reclong);
                    const latitude = parseFloat(meteor.reclat);

                    if (isNaN(longitude) || isNaN(latitude)) {
                        return;
                    }

                    const rangeMeters = range * 1609.344;
                    const distance = getDistance(
                        { latitude: location.latitude, longitude: location.longitude },
                        { latitude: latitude, longitude: longitude }
                    );

                    if (distance < rangeMeters) {
                        let popup = new mapboxgl.Popup().setText(`${name}, ${moment(year).year()}`);
                        new mapboxgl.Marker().setLngLat([longitude, latitude]).setPopup(popup).addTo(map);
                    }
                }
            );
            
        },
        [mapRef, location.latitude, location.longitude, location, meteorites, range]
    );

    return (
        <section
        className='flex flex-col'
        >
            <h3
                className='text-xl font-semibold mt-4 mb-4'
            >
                Map
            </h3>
            <section className='mb-4 mt-4'>
                <div
                    style={{width: '100%', height: '460px'}}
                    ref={mapRef}
                >

                </div>
            </section>
         </section>
       );
}

export default MeteoriteMap;