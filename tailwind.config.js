/* eslint-disable prettier/prettier */
/* @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
            },
        },
        screens: {
            sm: '400px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            spacing: {
                header: "119px",
            },
            colors: {
                white: "#FFFFFF",
                transparent: 'transparent',
                default: "#008345",
                orange: "#F57A21",
                hoverDefault: "#186e25"
            },
            dropShadow: {
                dropShadow: "2px 2px 8px 0px #00000026",
            },
            boxShadow: {
                header: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                baseShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            },
            backgroundImage: {
                'vector16': "url('~/assets/svg/vector16.svg')",
                'vector17': "url('~/assets/svg/vector17.svg')",
            }
        },

    },
    plugins: [],
}