import styles from  '../styles/components/Profile.module.css';

export function Profile (){
    return (
        <div  className={styles.profileContainer}>
            <img src="https://github.com/danieloliveirasouza.png" alt="Daniel Oliveira"/>
            <div>
               <strong>Daniel Oliveira Souza</strong>
                <p>Level 1</p>
            </div>
        
        </div>

    );
}