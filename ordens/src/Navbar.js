import { useEffect, useState } from 'react'
import { GiBowlingPropulsion } from 'react-icons/gi'
import styles from './Navbar.module.css'
import SelectPM from './SelectPM'
function Navbar(props) {
    
    const [janela, setJanela] = useState(false)
    let PMs_vetor
    let PMs
    PMs_vetor = props.dados.map(a => a.Nome_PM)
    PMs = (PMs_vetor.filter((este, i) => PMs_vetor.indexOf(este) === i))
    console.log(PMs)


    function activeJanela() {
        setJanela(!janela)
    }
    function fecharjanela() {
        setJanela(false)
    }

    return (
        <>
            <a className={styles.navbar}>Dashboard de Ordens</a>
            <button onClick={activeJanela}>Selecionar PM</button>
            {janela && <SelectPM Nomes={PMs} close={fecharjanela} />}
        </>
    )
}
export default Navbar