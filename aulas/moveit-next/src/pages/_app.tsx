import '../styles/global.css'
import { useState } from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';
import PagesManifestPlugin from 'next/dist/build/webpack/plugins/pages-manifest-plugin';

function MyApp({ Component, pageProps}) {

  return ( 
          <Component {...pageProps} /> 
  )
}

export default MyApp
