import React from 'react';

function App() {
    return (
        <main
            class='flex justify-center text-gray-800'
        >
            <section
                class='max-w-4xl w-full p-4'
            >
                <h1
                    class='text-3xl font-semibold mt-4 mb-4'
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
            </section>
        </main>
    );
}

export default App;
