import { MenuItem } from "../MenuItem"
import './MainMenu.css'

export const MainMenu = ({cambiarElementos}) => {
  return (
    <div className="mainMenu"> 
      <div className="selector"> 
        <MenuItem
          btnTitle='Libro de Mormon'
          btnColor='var(--celeste)'
          cambiarElementos={cambiarElementos}
          img='/ldm.svg'
        />
        <MenuItem
                  btnTitle='Antiguo Testamento'
          btnColor='var(--verde)'
          cambiarElementos={cambiarElementos}
          img='/at.svg'
        />
        <MenuItem
                  btnTitle='Nuevo Testamento'
          btnColor='var(--rojo)'
          cambiarElementos={cambiarElementos}
          img='/nt.svg'
        />
        <MenuItem
                  btnTitle='Doctrina y Convenios'
          btnColor='var(--amarillo)'
          cambiarElementos={cambiarElementos}
          img='/dyc.svg'
        />
      </div>
    </div>
  )
}
