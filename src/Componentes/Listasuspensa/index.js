import './Listasuspensa.css'

const Listasuspensa = (props) => {
    return (
        <div className='Listasuspensa'>
            <label>
                {props.label}
            </label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)}
                value={props.valor}
                required={props.required}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div> 
)}

export default Listasuspensa