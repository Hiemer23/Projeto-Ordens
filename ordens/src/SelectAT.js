import styles from './SelectPM.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { BsCheck2Circle } from 'react-icons/bs'

function SelectAT(props) {
    let AT_selecionado = 'Vazio'

    const select_AT = (e) => {
        AT_selecionado = e.target.value
        //console.log(AT_selecionado)
    }

    const tratarClick = (e) => {
        e.preventDefault()
        //console.log(e.target.classList[0])
        if (e.target.classList[0] === (styles.janela)) {
            props.close()
        }
    }

    const nome_AT = (sigla) => {
        switch (sigla) {
            case "EL": return "Eletricista"
                break;
            case "CI": return "Manutentor Civil"
                break;
            case "OP": return "Operador de Refrigeração"
                break;
            case "TR": return "Técnico de Refrigeração"
                break;
            case "PL": return "Planejamento"
                break;
            case "TE": return "Técnico de Elétrica"
                break;
            case "ME": default: return 'Mecânico'
        }
    }

    return (

        <div onClick={(event) => tratarClick(event)} className={styles.janela}>
            <div className={styles.interno}>
                <div className={styles.titulo}>Escolha o tipo de atividade</div>
                <select className={styles.select} onChange={select_AT}>
                    <option value="Vazio">Vazio</option>
                    {
                        props.Nomes.map((op) => <option value={op}>{nome_AT(op)}</option>)
                    }
                </select>
                <button className={styles.buttonClose} onClick={props.close}><AiOutlineClose /></button>
                <button className={styles.buttonConfirm} onClick={() => props.confirm(AT_selecionado)}><BsCheck2Circle /></button>
            </div>
        </div >
    )
}
export default SelectAT