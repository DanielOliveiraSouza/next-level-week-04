import {Children, createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { Countdown } from "../components/Countdown";
import { challengesContext } from './ChallengesContext';

let countDownTimeOut: NodeJS.Timeout; 

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    StartCountdown: ()=> void;
    resetCountDown: ()=> void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const  CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({children}:CountdownProviderProps){
    const {startNewChallenge} = useContext(challengesContext)
    
    const [time,setTime] = useState(0.1 * 60);
    const [isActive,setisActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
   
    const minutes  = Math.floor( time / 60);
    const seconds = time % 60;
    useEffect(()=>{
        if (isActive && time > 0) {
            
            countDownTimeOut = setTimeout ( (  )=> {
                setTime(time-1)
            },1000) 
        }else{
            if (isActive && time == 0){
                setHasFinished(true)
                setisActive(false)
                startNewChallenge()
            }
        }
    },[isActive,time])
    function StartCountdown(){
        
        setisActive(true);
    }

    function resetCountDown(){
        clearTimeout(countDownTimeOut)
        setisActive(false)
        setTime(0.1*60);
        setHasFinished(false);
    }


    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            StartCountdown,
            resetCountDown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}