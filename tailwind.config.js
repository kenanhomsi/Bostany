/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
  	extend: {
  		colors: {
  			Baser_primary_primary98: '#FEF7FF',
  			BaserPrimary: '#9966FF',
  			BostanyPrimary: '#00C1A1',
  			BostanybodyLigh: '#FAFBF9',
  			BaserbodyLigh: '#FDF8FD',
  			BaserSurface: '#FAF5F9',
  			BaserSurfaceDarker: '#F6EDFF',
  			BaserOutline: '#938F94',
  			BaserOnSurfase: '#1D1B1E',
  			BaserOnSurfaseVarient: '#444846',
  			dark: '#48464A',
  			GeneralSuccessContainer: '#36C450',
  			GeneralWarningContainer: '#FFCE22',
  			BaserTertiary: '#808080',
  			BaserSurfaceContainerHige: '#E6E1E6',
  			BaserPrimaryContainer: '#D2BCFF',
  			BaserSurfaceContainer: '#F4F7F3',
  			BaserFoshiy: '#4C00AA',
  			GeneralError: '#DE3730',
  			GeneralStable: '#FF4500',
  			BostanySurfaceContainer: '#F4F7F3',
  			BostanyPrimaryContainer: '#B8FFEA',
  			BostanyOnPrimaryContainer: '#004437',
  			BostanyOnSurface: '#191C1B',
  			BostanySurfaceContainerLow: '#FAFBF9'
  		},
  		spacing: {
  			lg: '6rem',
  			section: '80px'
  		},
  		fontWeight: {
  			light: '300',
  			normal: '400',
  			medium: '500',
  			semibold: '600',
  			bold: '700'
  		},
  		fontFamily: {
  			alexandria: ["Alexandria", "sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require("flowbite/plugin"),
    flowbite.plugin(),
    require("tailwind-scrollbar-hide"),
      require("tailwindcss-animate")
],
};
