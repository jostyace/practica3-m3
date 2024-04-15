import { MenuItem } from "../MenuItem"
import './NuevaEntrada.css'

export const Reportes = () => {
  return (
    <div className="nuevaEntrada">
    <input type="text" className="tituloNueva" placeholder="Titulo"/>
          <textarea className="descripcionNueva" ></textarea>
          <div className="optionsClass">
          <MenuItem
            btnTitle='Guardar'
            btnColor='#445566'
            />
      </div>
    </div>
  )
}