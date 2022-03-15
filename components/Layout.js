import styles from '../styles/Layout.module.css'

const layout = ( {children }) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
               <main className={styles.main}>{children}</main>
            </main>
        </div>
    )
}

export default layout