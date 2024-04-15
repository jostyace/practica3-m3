import { NuevaEntrada } from '../NuevaEntrada'
import './MenuItem.css'
export const MenuItem = ({btnTitle, btnColor, img, setActualScreen, cambiarElementos, location, setTitleScreen, destinoScreen }) => {
  const handleClick = () => {
    cambiarElementos()
    setTitleScreen(btnTitle)
    setActualScreen(destinoScreen)
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
