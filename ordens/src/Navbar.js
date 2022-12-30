import { useEffect, useState } from 'react'
import { GiBowlingPropulsion } from 'react-icons/gi'
import styles from './Navbar.module.css'
import SelectPM from './SelectPM'
function Navbar(props) {
    const [janela, setJanela] = useState(false)
    let PMs_vetor
    let PMs
    const [NomesPMs, setNomesPMs] = useState([])

    function activeJanela() {
        PMs_vetor = props.dados.map(a => a.Nome_PM)
        async PMs = (PMs_vetor.filter((este, i) => PMs_vetor.indexOf(este) === i))
        await setNomesPMs(PMs)
        await console.log(NomesPMs)
        setJanela(!janela)
    }
    function fecharjanela() {
        setJanela(false)
    }

    return (
        <>
            <a className={styles.navbar}>Dashboard de Ordens</a>
            <button onClick={activeJanela}>Selecionar PM</button>
            {janela && <SelectPM Nomes={NomesPMs} close={fecharjanela} />}
        </>
    )
}
export default Navbar