import './TitleContainer.css'
import backBtn from '/back.svg'
export const TitleContainer = ({cambiarElementos, screenTitle, btnTitle}) => {
  return (
    <div className='menuHeaderAlt'>
        <button className='backBtn'> <img onClick={cambiarElementos} className='backIcon' src={backBtn} alt="Back" /></button>
        <h1 className='tituloAlt'>{btnTitle}</h1>
    </div>
)
}
