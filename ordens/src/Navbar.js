import { useEffect, useState } from 'react'
import { GiBowlingPropulsion } from 'react-icons/gi'
import styles from './Navbar.module.css'
import SelectPM from './SelectPM'
function Navbar(props) {

    const [janela, setJanela] = useState(false)

    //console.log(PMs)

    function activeJanela() {
        setJanela(!janela)
    }
    function fecharjanela() {
        setJanela(false)
    }
    const selecionaPM = (valor_Selecionado) => {
        //console.log(valor_Selecionado)

        props.filtraPM(valor_Selecionado)
    }

    return (
        <>
            <a className={styles.navbar}>Dashboard de Ordens</a>
            <button onClick={activeJanela}>Selecionar PM</button>
            {janela && <SelectPM Nomes={props.PMs} close={fecharjanela} confirm={selecionaPM} />}
        </>
    )
}
export default Navbar