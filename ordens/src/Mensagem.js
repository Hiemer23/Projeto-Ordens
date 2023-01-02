import { useEffect, useState } from 'react'
import styles from './Mensagem.module.css'

function Mensagem(props) {

    const [ativo, setAtivo] = useState(false)

    useEffect(() => {
        console.log('teste')
        setAtivo(true)
        const timer = setTimeout(() => {
            setAtivo(false)
        }, 600)
    }, [props.ativar])

    return (<>
        {ativo && <div className={styles.janela}>
            <div className={styles.texto}>{props.Concluido ? "Concluída" : "Conclusão Desfeita"}</div>
        </div>}
    </>
    )
}
export default Mensagem