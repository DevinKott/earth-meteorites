import React from 'react';

// https://tailwindcss.com/components/alerts#traditional
function ErrorDialog(props) {
    const {
        text,
        title
    } = props;

    return (
        <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2 mb-2"
            role="alert"
        >
            <strong class="font-bold">{title || 'Error!'}</strong>
            <span class="block sm:inline">{text}</span>
        </div>
    );
}

export default ErrorDialog;