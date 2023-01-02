import styles from './SelectPM.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { BsCheck2Circle } from 'react-icons/bs'

function SelectPM(props) {
    let PM_selecionado = 'Vazio'

    const select_PM = (e) => {
        PM_selecionado = e.target.value
        // console.log(PM_selecionado)
    }

    const tratarClick = (e) => {
        e.preventDefault()
        //console.log(e.target.classList[0])
        if (e.target.classList[0] === (styles.janela)) {
            props.close()
        }
    }

    return (

        <div onClick={(event) => tratarClick(event)} className={styles.janela}>
            <div className={styles.interno}>
                <div className={styles.titulo}>Escolha o PM</div>
                <select className={styles.select} onChange={select_PM}>
                    <option value="Vazio">Vazio</option>
                    {
                        props.Nomes.map(op => <option>{op}</option>)
                    }
                </select>
                <button className={styles.buttonClose} onClick={props.close}><AiOutlineClose /></button>
                <button className={styles.buttonConfirm} onClick={() => props.confirm(PM_selecionado)}><BsCheck2Circle /></button>
            </div>
        </div >
    )
}
export default SelectPM