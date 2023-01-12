import './Botao.css'

const Botao = ({children}) => {
    return (
        <button className='Botao'>
            {children}
        </button>
)}

export default Botao