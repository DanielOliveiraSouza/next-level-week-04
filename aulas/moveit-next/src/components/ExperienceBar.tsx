import { useContext } from 'react';
import { challengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import styles from  '../styles/components/ExperienceBar.module.css' ;
export function ExperienceBar(){
    const {currentExperience,experienceNextLevel,level} = useContext(challengesContext);
    const percentNextLevel = Math.round(currentExperience*100/experienceNextLevel);
    return ( 
        <header className={styles.experienceBar} >
            <span>0 xp</span>
            <div>
                <div style={{width:`${percentNextLevel}%`}}/>
                
                <span className={styles.currentExperience}  style={{ left:`${percentNextLevel}%` }}>
                   {currentExperience} xp
                   {console.log("percent",percentNextLevel)}
                </span>
            </div> 
            <span>{experienceNextLevel} xp</span>
        </header>
    );
}