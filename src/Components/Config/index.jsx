import { Categorias } from "../Categorias"
import { MenuItem } from "../MenuItem"

export const Config = ({setActualScreen, cambiarElementos, setTitleScreen, }) => {
  return (
    <div className="nuevaEntrada">
        <MenuItem
    btnColor='#990099'
    btnTitle='Categorias'
    setActualScreen={setActualScreen}
    cambiarElementos={cambiarElementos}
    location = {location}
    setTitleScreen = {setTitleScreen}
    destinoScreen={<Categorias cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} />}
     />
         <MenuItem
    btnColor='#990099'
    btnTitle='Nueva Categoria'
     />
    </div>
  )
}
