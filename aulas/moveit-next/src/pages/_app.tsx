import '../styles/global.css'

import  {challengesContext, ChallengesProvider} from '../contexts/ChallengesContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

 
  return ( 
    <div>
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </div>
  )
}

export default MyApp
