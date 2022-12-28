import './App.css';
import { initializeApp } from "firebase/app"
import React from 'react';
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc } from "firebase/firestore"

let vetor_total = []
let objeto = [{}]

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

  async function deletarBase() {
    const data = await getDocs(userCollectionRef)
    data.docs.map((documento) => (
      deleteDoc(doc(db, 'Ordens', documento.id))
    ))
    //return console.log("concluido")
  }

  async function limpar_banco(e) {
    e.preventDefault()
    await deletarBase()
    console.log("Limpar_banco")
  }

  async function integrar_banco(e) {
    e.preventDefault()
    await limpar_banco(e)
    for (let i = 0; i < (objeto.length); i++) {
      await addDoc(userCollectionRef, {
        Ordem: objeto[i].Ordem,
        Operacao: objeto[i].Operacao,
        Descricao: objeto[i].Descricao,
        Equipamento_SAP: objeto[i].Equipamento_SAP,
        Nome_Equipamento: objeto[i].Nome_Equipamento,
        Nome_Local_Instalacao: objeto[i].Nome_Local_Instalacao,
        Horas_Previstas: objeto[i].Horas_Previstas,
        Data: objeto[i].Data,
        PM_Responsavel: objeto[i].PM_Responsavel,
        Classificacao: objeto[i].Classificacao
      })
    }
    console.log(objeto[0])
    console.log("Integrar_Banco")
  }

  async function atualizar_banco(e) {
    e.preventDefault()
    const arquivo = await (e.target.files[0])
    const data_total = await arquivo.text()
    const vetor = data_total.split('}')
    vetor.pop()

    vetor.map((elemento, i) => {
      let volatil = elemento.split("|")
      volatil[0] = volatil[0].replace(/\s+/g, "");
      volatil[0] = volatil[0].replace('"', "")
      volatil[0] = volatil[0].replace('"', "")
      objeto[i] = {
        Ordem: volatil[0],
        Operacao: volatil[1],
        Descricao: volatil[2],
        Equipamento_SAP: volatil[3],
        Nome_Equipamento: volatil[4],
        Nome_Local_Instalacao: volatil[5],
        Horas_Previstas: volatil[6],
        Data: volatil[7],
        PM_Responsavel: volatil[8],
        Classificacao: volatil[9]
      }
    })
    //console.log(objeto.length)

    for (let i = 0; i < (objeto.length); i++) {
      console.log(typeof (objeto[i].Operacao))
      objeto[i].Operacao = objeto[i].Operacao.split("{")
      objeto[i].Descricao = objeto[i].Descricao.split("{")
      objeto[i].Horas_Previstas = objeto[i].Horas_Previstas.split("{")
    }
  }

  return (
    <div className="App">
      <h1>Atualização do Banco de Dados - Firestore</h1>
      <form className='perguntas'>
        <button className='Apagar_Banco' onClick={limpar_banco}>Apagar Banco</button>
        <button className='Integrar_Banco' onClick={integrar_banco}>Integrar Banco</button>
        <input className="arquivos" type="file" onChange={(e) => atualizar_banco(e)} accept=".csv"></input>
      </form>
    </div>
  );
}

export default App;
