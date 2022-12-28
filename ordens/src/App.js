import styles from './App.module.css';
import { initializeApp } from "firebase/app"
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Ordem from './Ordem';
import Navbar from './Navbar';


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
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(userCollectionRef)
      setDados(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getData()
  }, [])

  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      {dados.map((dado, index) => {
        return (
          <Ordem key={index}
            Ord={dado.Ordem}
            Operacao={dado.Operacao}
            Descricao={dado.Descricao}
            Equipamento_SAP={dado.Equipamento_SAP}
            Nome_Equipamento={dado.Nome_Equipamento}
            Nome_Local_Instalacao={dado.Nome_Local_Instalacao}
            Horas_Previstas={dado.Horas_Previstas}
            Data={dado.Data}
            PM_Responsavel={dado.PM_Responsavel}
            Classificacao={dado.Classificacao}
          >
          </Ordem>
        )
      })}
    </div >
  );
}

export default App;