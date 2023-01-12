import './CampoTexto.css'

const CampoTexto = (props) => {    
    return (
        <div className='Campotexto'>
            <label>
                {props.label}
            </label>
            <input
                onChange={evento => props.aoAlterado(evento.target.value)}
                value={props.valor}
                required={props.obrigatorio} 
                placeholder={props.placeholder}
            />
        </div>
)}


export default CampoTexto