import { MenuItem } from "../MenuItem"
import { NuevaEntrada } from "../NuevaEntrada"
import './MainMenu.css'

export const MainMenu = ({cambiarElementos,setActualScreen, location, setTitleScreen }) => {
  return (
    <div className="mainMenu"> 
      <div className="selector"> 
        <MenuItem
          btnTitle='Nuevo Ingreso'
          btnColor='var(--celeste)'
          img='/ldm.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
        />
        <MenuItem
          btnTitle='Nuevo Gasto'
          btnColor='var(--verde)'
          img='/at.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
        />
        <MenuItem
          btnTitle='Reportes'
          btnColor='var(--rojo)'
          img='/nt.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
        />
        <MenuItem
          btnTitle='Config'
          btnColor='var(--amarillo)'
          img='/dyc.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
        />
      </div>
    </div>
  )
}
