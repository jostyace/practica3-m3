import { NuevaEntrada } from '../NuevaEntrada'
import './MenuItem.css'
export const MenuItem = ({btnTitle, btnColor, img, setActualScreen, cambiarElementos, location, setTitleScreen }) => {
  const handleClick = () => {
    cambiarElementos()
    setTitleScreen(btnTitle)
    setActualScreen(<NuevaEntrada cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} />)
  }
  if(location === 'menu') {
  return (

    <button onClick={handleClick} style={{backgroundColor: btnColor}}><img className="imgTitle" src={img}></img><span className="menuTitle">{btnTitle}</span></button>
  )
}else{
  return (

    <button className='btnScreen' onClick={handleClick} style={{backgroundColor: btnColor}}><span className="menuTitle">{btnTitle}</span></button>
  )
}
}
