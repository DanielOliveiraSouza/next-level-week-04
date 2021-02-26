import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/components/Home.module.css'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <ExperienceBar/>
      <Head>
         <title>Início | move.it</title>
      </Head>
      
      <CountdownProvider>
        <section>
          <div className={styles.section}>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
        </CountdownProvider>
    </div>
  );
}

export const getServerSideProps = async() => {

  const user = {
    level: 1,
    currentExperience:50,
    challengesCompleted:2,
  }

  return { props:user}
}
