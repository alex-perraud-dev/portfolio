import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import Layout from "@/layouts/global";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
export default function App({ Component, pageProps }) {
  return  <ChakraProvider>
    <Layout>
      <Component {...pageProps} />

    </Layout>
  </ChakraProvider>
}
