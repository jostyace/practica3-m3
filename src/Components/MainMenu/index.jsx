import { Config } from "../Config"
import { MenuItem } from "../MenuItem"
import { NuevaEntrada } from "../NuevaEntrada"
import { NuevoGasto } from "../NuevoGasto"
import { Reportes } from "../Reportes"
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
          destinoScreen={<NuevaEntrada cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} />}
        />
        <MenuItem
          btnTitle='Nuevo Gasto'
          btnColor='var(--verde)'
          img='/at.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
          destinoScreen={<NuevoGasto cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} />}
        />
        <MenuItem
          btnTitle='Reportes'
          btnColor='var(--rojo)'
          img='/nt.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
          destinoScreen={<Reportes cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} />}
        />
        <MenuItem
          btnTitle='Config'
          btnColor='var(--amarillo)'
          img='/dyc.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
          destinoScreen={<Config cambiarElementos={cambiarElementos} setTitleScreen={setTitleScreen} setActualScreen={setActualScreen} />}
        />
      </div>
    </div>
  )
}
