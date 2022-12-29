import styles from './Ordem.module.css'
import { BsFillLightningChargeFill, BsSnow, BsClipboardCheck, BsCheck2Circle } from 'react-icons/bs'
import { GiSpanner, GiWheelbarrow } from 'react-icons/gi'
import { useState } from 'react'


function Ordem({ Nome_PM,Visivel, Ord, Operacao, Descricao, Equipamento_SAP, Nome_Equipamento, Nome_Local_Instalacao, Horas_Previstas, Data, PM_Responsavel, Classificacao }) {
    let simbolo = ""
    let teste = Ord
    switch (Classificacao.toUpperCase()) {
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
                    <div className={styles.nome_PM}>{Nome_PM}</div>
                    <div className={styles.PM}>{PM_Responsavel}</div>
                </div>
                <div className={styles.ordem_base}>
                    <div className={styles.texto}>
                        <label className={styles.enfase}>Ordem:</label> {Ord}
                    </div>
                    <div className={styles.texto}>
                        <label className={styles.enfase}>Desc:</label> {Descricao[0]}
                    </div>
                </div>
                <div className={styles.equipamento_base}>
                    <div className={styles.texto1}>
                        <label className={styles.enfase}>Equipamento:</label> {Equipamento_SAP}
                    </div>
                    <div className={styles.texto2}>
                        {Nome_Equipamento}
                    </div>
                </div>
                <div className={styles.operacao_base}>
                    <div>Op.</div>
                    <div>Descricao</div>
                    <div>Horas_Previstas</div>
                </div>
                <div className={styles.operacao_base_grid}>
                    {
                        Operacao.map((opera, index) => (
                            <>
                                <div key={index}>{Operacao[index]}</div>
                                <div key={index + 1}>{Descricao[index]}</div>
                                <div key={index + 1}>{Horas_Previstas[index]}h</div>
                            </>
                        )
                        )
                    }
                </div>

                <div className={styles.data_base}>
                    <div className={styles.texto}>Data: {Data}</div>
                    <button className={styles.texto4} onClick={() => Visivel({ Ord })}>
                        <BsCheck2Circle />
                    </button>
                </div>

            </div >
        </>
    )
}
export default Ordem