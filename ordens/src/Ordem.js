import styles from './Ordem.module.css'
import { BsFillLightningChargeFill, BsSnow, BsClipboardCheck, BsCheck2Circle } from 'react-icons/bs'
import { GiSpanner, GiWheelbarrow, GiPlainCircle } from 'react-icons/gi'


function Ordem({ dado, changeDone }) {
    let simbolo = ""
    switch (dado.Classificacao.toUpperCase()) {
        case "ME": simbolo = "ME"
            break;
        case "EL": case "TE": simbolo = "EL"
            break;
        case "CI": simbolo = "CI"
            break;
        case "OP": case "TR": simbolo = "OP"
            break;
        case "PL": simbolo = "PL"
            break;
        default: simbolo = 'ME'
    }
    return (
        <>
            <div className={styles.container} >
                <div className={styles.cabecalho}>
                    <div className={styles.imagem}>
                        {simbolo === 'ME' ? <GiSpanner /> : false}
                        {simbolo === 'EL' ? <BsFillLightningChargeFill /> : false}
                        {simbolo === 'CI' ? <GiWheelbarrow /> : false}
                        {simbolo === 'OP' ? <BsSnow /> : false}
                        {simbolo === 'PL' ? <BsClipboardCheck /> : false}
                    </div>
                    <div className={styles.nome_PM}>{dado.Nome_PM}</div>
                    <div className={styles.PM}>{dado.PM_Responsavel}</div>
                    <GiPlainCircle className={!dado.Concluido ? styles.circulo : styles.concluido2} />
                </div>
                <div className={styles.ordem_base}>
                    <div className={styles.texto}>
                        <label className={styles.enfase}>Ordem:</label> {dado.Ordem}
                    </div>
                    <div className={styles.texto}>
                        <label className={styles.enfase}>Desc:</label> {dado.Descricao[0]}
                    </div>
                </div>
                <div className={styles.equipamento_base}>
                    <div className={styles.texto1}>
                        <label className={styles.enfase}>{dado.Equipamento_SAP ? "Equipamento:" : "Local:"}</label>{dado.Equipamento_SAP ? dado.Equipamento_SAP : dado.Nome_Local_Instalacao}
                    </div>
                    <div className={styles.texto2}>
                        {dado.Nome_Equipamento}
                    </div>
                </div>
                <div className={styles.operacao_base}>
                    <div>Op.</div>
                    <div>Descricao</div>
                    <div>Horas_Previstas</div>
                </div>
                <div className={styles.operacao_base_grid}>
                    {
                        dado.Operacao.map((opera, index) => (
                            <>
                                <div key={dado.id + index + 1}>{dado.Operacao[index]}</div>
                                <div key={dado.id + index + 2}>{dado.Descricao[index]}</div>
                                <div key={dado.id + index + 3}>{dado.Horas_Previstas[index]}h</div>
                            </>
                        )
                        )
                    }
                </div>
                <div className={styles.veja_mais}>
                    <div className={styles.texto_veja_mais}>
                        {(dado.Operacao.length) > 3 ? "Veja Mais" : false}
                    </div>
                </div>

                <div className={styles.data_base}>
                    <div className={styles.texto}>Data: {dado.Data}</div>
                    <button className={!dado.Concluido ? (styles.texto4) : styles.concluido} onClick={() => changeDone({ dado })}>
                        <BsCheck2Circle />
                    </button>
                </div>

            </div >
        </>
    )
}
export default Ordem