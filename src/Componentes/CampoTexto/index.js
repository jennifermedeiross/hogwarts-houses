import './CampoTexto.css'

const CampoTexto = ({label, valor, obrigatorio, placeholder, aoAlterado}) => {    
    return (
        <div className='Campotexto'>
            <label>
                {label}
            </label>
            <input
                onChange={evento => aoAlterado(evento.target.value)}
                value={valor}
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
)}


export default CampoTexto