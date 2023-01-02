import styles from './App.module.css';
import { initializeApp } from "firebase/app"
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";
import Ordem from './Ordem';
import Navbar from './Navbar';
import Loading from './Loading';
import Mensagem from './Mensagem';

let dadosBackup = []
let PMs = []
let ATs = []

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBncTlvr96WjalgnszXMXksRVgqQ_J5NVY",
    authDomain: "controle-de-ordens-9b075.firebaseapp.com",
    projectId: "controle-de-ordens-9b075",
    storageBucket: "controle-de-ordens-9b075.appspot.com",
    messagingSenderId: "816816393385",
    appId: "1:816816393385:web:40926be1a20fdb1401edb8"
  }

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp)
  const userCollectionRef = collection(db, 'Ordens')
  const [dados, setDados] = useState([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState(false)
  const [msgStatus, setMsgStatus] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        const data = await getDocs(userCollectionRef)
        dadosBackup = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))
        PMs = dadosBackup.map(a => a.Nome_PM).filter((este, i) => dadosBackup.map(a => a.Nome_PM).indexOf(este) === i)
        ATs = dadosBackup.map(a => a.Classificacao).filter((este, i) => dadosBackup.map(a => a.Classificacao).indexOf(este) === i)
        setDados(dadosBackup)
      }
      setLoading(false)
      getData()

    }, 150)
  }, [])

  const update_banco = async (id, done) => {
    const DocAtualizado = doc(db, 'Ordens', id)
    const atualizacao = { Concluido: done }
    //console.log(id, done)
    await updateDoc(DocAtualizado, atualizacao)
  }

  const changeDone = (ordem) => {
    setMsg(!msg)
    //let vet = dados.map(a=>a_Nome_PM)
    //vet = dados.map(a=>a.Nome_PM).filter((este, i) => dados.map(a=>a.Nome_PM).indexOf(este) === i);

    setLoading(true)
    ordem.dado.Concluido = !ordem.dado.Concluido
    setMsgStatus(ordem.dado.Concluido)
    setDados((prevState) => prevState.map((t) => t.id === ordem.dado.id ? t = ordem.dado : t))

    update_banco(ordem.dado.id, ordem.dado.Concluido)
    setLoading(false)
    //console.log(PMs)
  }

  const filtraPM = (PM) => {

    if (PM === 'Vazio') {
      setDados(dadosBackup)
      return
    }
    setDados((prevState) => dadosBackup.filter(t => t.Nome_PM === PM))
  }

  const filtraAT = (AT) => {
    if (AT === 'Vazio') {
      setDados(dadosBackup)
      return
    }
    setDados((prevState) => dadosBackup.filter(t => t.Classificacao === AT))
  }

  return (
    <div className={styles.App}>
      <Navbar dados={dados} filtraPM={filtraPM} filtraAT={filtraAT} PMs={PMs} ATs={ATs}></Navbar>
      {!loading ? ((dados.map((dado, index) => {
        return (
          <Ordem key={dado.id}
            changeVisible={changeDone}
            changeDone={changeDone}
            dado={dado}
          >
          </Ordem>
        )
      })))
        : <Loading />}
      <Mensagem Concluido={msgStatus} ativar={msg} />
    </div >
  );
}

export default App;