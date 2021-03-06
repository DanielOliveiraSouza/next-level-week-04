import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/components/Home.module.css'

interface HomeProps{
  level: number;
  currentExperience: number;
  completedChallenges: number;
}
export default function Home(props:HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      completedChallenges={props.completedChallenges}
    >
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
    </ChallengesProvider>
  );
}

export const getServerSideProps:GetServerSideProps = async(ctx) => {
  const {level,currentExperience,challengesCompleted} =  ctx.req.cookies;
  return {
    props:{
      level: Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted)
    }
  }
}
