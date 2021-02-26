import { useContext, useEffect, useState } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import {CountdownContext} from '../contexts/CountdownContext';
import styles  from '../styles/components/Countdown.module.css';



export function Countdown (){

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        StartCountdown,
        resetCountDown,
        
    } = useContext(CountdownContext);
    const [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight] = String(seconds) .padStart(2,'0').split('');

 //   console.log(contextData)




    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            
            { 
            
            hasFinished ? (
                <button disabled className={styles.countdownButton}>Ciclo Encerrado</button>
            ):(
                <>
                    {
                        isActive ? (
                            <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountDown}>
                                Abandonar Ciclo
                            </button>
                        ): (
            
                            <button type="button" className={styles.countdownButton} onClick={StartCountdown}>
                            Iniciar Ciclo
                            </button>
                        )
                    }
                </>
            )
        }
             
        </div>
    );
}