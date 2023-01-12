import './Aluno.css'

const Aluno = (props) => {
    return (
        <div className='Aluno'>
            <div className='cabecalho' style={{backgroundColor: props.cor}}>
                <img src={props.imagem} alt={props.nome} />
            </div>

            <div className='rodape'>
                <h4>
                    {props.nome}
                </h4>
            </div>
        </div>
)}

export default Aluno