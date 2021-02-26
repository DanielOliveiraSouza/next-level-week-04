import { getCookieParser } from 'next/dist/next-server/server/api-utils';
import {Children, createContext, ReactNode, useEffect, useState} from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';



interface ChallengesProviderProps {
    children: ReactNode;
}
interface Challenge {
    type: 'body' | 'eye';
    description : string;
    amount: number;
}
interface ChallengesContextData {
    level: number;
    currentExperience: number;
    experienceNextLevel: number;
    challengesCompleted: number;
    levelUp: ()=> void;
    startNewChallenge: ()=> void;
    resetChallenge:()=> void;
    completedChallenge:()=> void;
    activeChallenge: Challenge;
}
export const challengesContext = createContext({} as ChallengesContextData)


export function ChallengesProvider({children}:ChallengesProviderProps){
    const [level,setLevel] = useState(1)
    const [currentExperience, setCurrentExperience]= useState(0);
    const [challengesCompleted,setChallengesCompleted]= useState(0);
    const [activeChallenge,setActiveChallenge]=  useState(null);
    
    const experienceNextLevel = Math.pow((level + 1) *4, 2);

    useEffect(() => {
        Notification.requestPermission();
    },[])

    useEffect( ()=>{
        Cookies.set('level',level.toString())
        Cookies.set('currentExperience',currentExperience.toString())
        Cookies.set('challengesCompleted',challengesCompleted.toString())

    },[level,currentExperience,challengesCompleted])

    function levelUp(){
      setLevel(level+1)
    }
    
    function startNewChallenge(){
       const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
       const challenge = challenges[randomChallengeIndex];
       setActiveChallenge(challenge);

       new Audio('/notification.mp3').play();
       if ( Notification.permission === 'granted' ){
           new Notification('Novo desafio 🎉',{
               body: `valendo ${challenge.amount}xp!`
           })
       }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completedChallenge(){
        if (!activeChallenge) return;

        const {amount} = activeChallenge;
        let finalExperience = currentExperience+ amount;

        if ( finalExperience >= experienceNextLevel ){
            finalExperience-=experienceNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted +1);
    }

  return (
      <challengesContext.Provider value={{
          level,
          currentExperience,
          experienceNextLevel,
          challengesCompleted,
          levelUp,
          startNewChallenge,
          resetChallenge ,
          completedChallenge,
          activeChallenge
        }}>
          {children}
      </challengesContext.Provider>
  )
}