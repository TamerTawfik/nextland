import "tailwindcss/tailwind.css";
import { GlobalStyles } from 'twin.macro';
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute="class">
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
