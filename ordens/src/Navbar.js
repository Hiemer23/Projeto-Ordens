import { useEffect, useState } from 'react'
import { GiBowlingPropulsion } from 'react-icons/gi'
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { BsTools } from 'react-icons/bs'
import styles from './Navbar.module.css'
import SelectPM from './SelectPM'
import SelectAT from './SelectAT'

function Navbar(props) {

    const [janela, setJanela] = useState(false)
    const [PM, setPM] = useState(false)
    const [AT, setAT] = useState(false)

    //console.log(PMs)

    const activeJanela = (tipo) => {
        setJanela(true)
        if (tipo === "PM") {
            setPM(true)
            return
        }
        setAT(true)
    }
    function fecharjanela() {
        setJanela(false)
        setPM(false)
        setAT(false)
    }
    const selecionaPM = (valor_Selecionado) => {
        //console.log(valor_Selecionado)

        props.filtraPM(valor_Selecionado)
    }

    const selecionarAT = (valor_Selecionado) => {
        //console.log(valor_Selecionado)

        props.filtraAT(valor_Selecionado)
    }

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.text}>Dashboard de Ordens</div>
                <div className={styles.selectButton}>
                    <button className={styles.button} onClick={() => activeJanela("PM")}>
                        <AiOutlineUserSwitch></AiOutlineUserSwitch><label className={styles.textoButton}>Alterar PM</label>
                    </button>
                    <button className={styles.button} onClick={() => activeJanela("AT")}>
                        <BsTools></BsTools><label className={styles.textoButton}>Tipo de Atividade</label>
                    </button>
                </div>

            </div>

            {janela && PM && <SelectPM Nomes={props.PMs} close={fecharjanela} confirm={selecionaPM} />}
            {janela && AT && <SelectAT Nomes={props.ATs} close={fecharjanela} confirm={selecionarAT} />}

        </>
    )
}
export default Navbar