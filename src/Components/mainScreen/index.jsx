import { useState } from "react";
import { MainMenu } from "../MainMenu"
import { MenuHeader } from "../MenuHeader"
import "./mainScreen.css"
import { MainContainer } from "../MainContainer";
import { TitleContainer } from "../TitleContainer";



export const MainScreen = () => {

  const [componentesAlternos, setComponentesAlternos] = useState(false);
  

  const cambiarElementos = () => {
    setComponentesAlternos(!componentesAlternos);
  };


  return (
    <div className="mainScreen">
        {componentesAlternos ? <TitleContainer cambiarElementos={cambiarElementos}  /> : <MenuHeader />}
        {componentesAlternos ? <MainContainer cambiarElementos={cambiarElementos} /> : <MainMenu cambiarElementos={cambiarElementos}/>}

    </div>
  )
}
