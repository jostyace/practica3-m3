import './MenuItem.css'
export const MenuItem = ({btnTitle, btnColor, cambiarElementos, img}) => {
  return (
    <button onClick={cambiarElementos} style={{backgroundColor: btnColor}}><img className="imgTitle" src={img}></img><span className="menuTitle">{btnTitle}</span></button>
  )
}
