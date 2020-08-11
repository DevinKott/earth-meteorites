import React, { useState } from 'react';

const RANGE_OPTIONS = {
    MIN: 200,
    MAX: 5000,
    STEP: 100,
    START: 200
}

function SliderComp(props) {
    const [value, setValue] = useState(RANGE_OPTIONS.START);

    const {
        setRangePass
    } = props;

    const onSliderChange = (event) => {
        setValue(event.target.value)
    }

    const setDistance = () => {
        setRangePass(value);
    }

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
            <section className='mb-4 mt-4'>
                <input 
                    type="range"
                    min={RANGE_OPTIONS.MIN}
                    max={RANGE_OPTIONS.MAX}
                    step={RANGE_OPTIONS.STEP}
                    value={value}
                    onChange={onSliderChange}
                    onMouseUp={setDistance}
                />
            </section>
            <section
                className='flex flex-col'
            >
                <span className='font-semibold'>Range: {value} miles</span>
            </section>
        </section>
    );
}

export default SliderComp;