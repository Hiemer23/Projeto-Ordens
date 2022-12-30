import styles from './SelectPM.module.css'

function SelectPM(props) {

    function select_PM() {

    }

    return (

        <div className={styles.janela}>
            <div className={styles.interno}>
                <div>{props.Nomes.length()}</div>
                <select className={styles.select}>
                    {

                        // props.Nomes.map(op => <option>{op}</option>)
                    }
                </select>
                <button className={styles.buttonClose} onClick={props.close}>X</button>
            </div>
        </div >
    )
}
export default SelectPM