import React from 'react'

export default function AgeComponent() {
     const today = new Date().toLocaleDateString()
     const birthday = new Date('12-9-1989').toLocaleDateString()
     const age = "35"
     
/*     const age = today.getFullYear() - birthday.getFullYear()
    const mesDiferencia = today.getMonth() - birthday.getMonth();

    if (mesDiferencia < 0 || (mesDiferencia === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    setEdad(age);
 */  return (
    <div>
      <h1>Mi fecha de nacimiento es: {birthday}, mi edad es: {age}</h1> 
    </div>
  )
}

//cambiar age para que me lo calcule con las fechas automáticamente
