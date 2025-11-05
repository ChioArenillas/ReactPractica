/* import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
 */
import AgeComponent from "@/components/AgeComponent";
import SaludoComponent from "../components/SaludoComponent";


export default function Home() {
  return (
    <div>
      <SaludoComponent /> {/* todos los componentes React deben estar en MAY */}
      <AgeComponent/>
    </div>
  )
}


/* volver a hacer una app desde cero, con los componenetes:
 - Personal data component: Nombre: ""(input) Apellidos: ""(input)
 - Email: ""(input)
 - Contraseña: ""(input)
 - Button confirmar contraseña
 */





/* 
export default function Home() {
  let name = 'Chio'
  let today = new Date().toLocaleDateString()

  return (
    <>
    <h1>Hola {name}, hoy es {today}</h1>
    </>
  )
}


 */

/* let isLoading = false
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

 */