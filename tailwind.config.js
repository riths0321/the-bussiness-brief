/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF5A1F',
                'text-body': '#1C1C1E',
                'text-muted': '#6B6B6B',
                'border-color': '#E0E0E0',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                body: ['Roboto', 'sans-serif'],
            },
            maxWidth: {
                'content': '1280px',
            },
        },
    },
    plugins: [],
}
