import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";


export default function Home() {


let isLoading = false
let name = 'Codespace'
console.log('name: '+name)

let name2 = 'hola'

const contentH1 = () => `Hola mundo ${name}`

if(isLoading){
  return (
    <>
      <h1>Cargando...</h1>
    </>
  )
}
  const changeName = () => {
    name = name2
  }
  return (
    <>
    <div name="formularioNombre">
      <input type="text" id="fname" name="fname" placeholder="Nombre" noChange={name2} />
      <button onClick={changeName()}> </button>
    </div>
    <h1>{contentH1()}!</h1>
    </>
  );
}

