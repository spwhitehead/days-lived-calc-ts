import Calculator from './Components/Calculator'
import styles from "./App.module.css"

function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>Age in Days Calculator</h1>
        <p>This app takes in how old someone is, then displays the approximate number of days they have been alive.</p>
      </header>
      <main className={styles.main}>
        <Calculator />
      </main>
    </>
  )
}

export default App
