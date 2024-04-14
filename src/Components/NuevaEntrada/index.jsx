import { MenuItem } from "../MenuItem"
import './NuevaEntrada.css'

export const NuevaEntrada = () => {
  return (
    <div className="nuevaEntrada">
          <p className="descripcionNueva" >Y sucedió que yo, Nefi, dije a mi padre: Iré y haré lo que el Señor ha mandado, porque sé que él nunca da mandamientos a los hijos de los hombres sin prepararles una vía para que cumplan lo que les ha mandado.</p>
          <div className="optionsClass"><MenuItem
                btnTitle='Guardar'
        btnColor='#445566'
      />
      <MenuItem
                btnTitle='Guardar'
        btnColor='#445566'
      />
      <MenuItem
                btnTitle='Guardar'
        btnColor='#445566'
      />
      <MenuItem
                btnTitle='Guardar'
        btnColor='#445566'
      />
      </div>
    </div>
  )
}
