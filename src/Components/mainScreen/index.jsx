import { useState } from "react";
import { MainMenu } from "../MainMenu"
import "./mainScreen.css"
import { ScreenContainer } from "../ScreenContainer"
import { TitleContainer } from "../TitleContainer"
import { Title } from "../Title";
import { MenuHeader } from "../MenuHeader";

export const MainScreen = () => {

  const [componentesAlternos, setComponentesAlternos] = useState(false)
  const cambiarElementos = () => {setComponentesAlternos(!componentesAlternos)}
  const [actualScreen, setActualScreen] = useState('')
  const [titleScreen, setTitleScreen] = useState('')



  return (
    <div className="mainScreen">
        {componentesAlternos ? <TitleContainer screen={<Title cambiarElementos={cambiarElementos} btnTitle={titleScreen} setActualScreen={setActualScreen} />} clase={"men"} /> : <TitleContainer screen={<MenuHeader cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} />} clase={"ele"}  />}
        {componentesAlternos ? <ScreenContainer cambiarElementos={cambiarElementos} screen={actualScreen}/> : <MainMenu cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} setTitleScreen={setTitleScreen} location={'menu'} />}
    </div>
  )
}
