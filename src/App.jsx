import { useState, useEffect } from 'react'
import styles from './App.module.css'

function App() {

  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [respSoma, setRespSoma] = useState()
  const [respSub, setRespSub] = useState()
  const [respMult, setRespMult] = useState()
  const [respDiv, setRespDiv] = useState()


  const [error, setError] = useState('')



    useEffect(() =>{
      if(n1 !== undefined && n2 !== undefined && !isNaN(n1) && !isNaN(n2)){
        setRespSoma(parseFloat(n1) + parseFloat(n2))
        setRespSub(parseFloat(n1) - parseFloat(n2))
        setRespMult(parseFloat(n1) * parseFloat(n2))
        setRespDiv(parseFloat(n1) / parseFloat(n2))

        
        setError('Digite valores númericos para calcular')
      }else{
        setError('Digite valores númericos para calcular')
      }
    }, [n1, n2])

  return (
    <div className={styles.wrapAll}>
      <h1 className={styles.title}>Calculadora</h1>
      <p>{error}</p>
      <div className={styles.wrap}>
        <input type="number" onChange={(e) => setN1(e.target.value)} value={n1} placeholder='Insira um número'/>
        <input type="number" onChange={(e) => setN2(e.target.value)} value={n2} placeholder='Insira outro número'/>
      </div>

      <div className={styles.wrapResps}>
        <h2>Resultado da Soma</h2>
        <h3>{respSoma}</h3>
      </div>

      <div className={styles.wrapResps}>
        <h2>Resultado da Subtração</h2>
        <h3>{respSub}</h3>
      </div>
      
      <div className={styles.wrapResps}>
        <h2>Resultado da Multiplicação</h2>
        <h3>{respMult}</h3>
      </div>

      
      <div className={styles.wrapResps}>
        <h2>Resultado da Divisão</h2>
        <h3>{respDiv}</h3>
      </div>
    </div>
  )
}

export default App