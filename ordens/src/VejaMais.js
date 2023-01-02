import styles from './VejaMais.module.css'
import { AiOutlineClose } from 'react-icons/ai'


function VejaMais(props) {

    const tratarClick = (e) => {
        e.preventDefault()
        //console.log(e.target.classList[0])
        if (e.target.classList[0] === (styles.janela)) {
            props.closeVejaMais()
        }
    }
    return (<div onClick={(event) => tratarClick(event)} className={styles.janela}>
        <div className={styles.interno}>
            <div className={styles.buttonClose}><button className ={styles.button} onClick={props.closeVejaMais}><AiOutlineClose /></button></div>
            <div className={styles.titulo}>Operações da Ordem</div>
            <div className={styles.operacao_base}>
                <div>Op.</div>
                <div>Descricao</div>
                <div>Horas_Previstas</div>
            </div>

            <div className={styles.operacao_base_grid}>
                {
                    props.ops.map((opera, index) => (
                        <>
                            <div>{props.ops[index]}</div>
                            <div>{props.desc[index]}</div>
                            <div>{props.time[index]}h</div>
                        </>
                    )
                    )
                }
            </div>

        </div>
    </div >
    )
}
export default VejaMais