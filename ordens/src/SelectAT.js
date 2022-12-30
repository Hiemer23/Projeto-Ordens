import styles from './SelectPM.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { BsCheck2Circle } from 'react-icons/bs'

function SelectAT(props) {
    let AT_selecionado = 'Vazio'

    const select_AT = (e) => {
        AT_selecionado = e.target.value
        console.log(AT_selecionado)
    }

    return (

        <div className={styles.janela}>
            <div className={styles.interno}>
                <div className={styles.titulo}>Escolha o tipo de atividade</div>
                <select className={styles.select} onChange={select_AT}>
                    <option value="Vazio">Vazio</option>
                    {
                        props.Nomes.map((op) => <option value={op}>{op}</option>)
                    }
                </select>
                <button className={styles.buttonClose} onClick={props.close}><AiOutlineClose /></button>
                <button className={styles.buttonConfirm} onClick={() => props.confirm(AT_selecionado)}><BsCheck2Circle /></button>
            </div>
        </div >
    )
}
export default SelectAT