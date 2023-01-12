import Aluno from '../Aluno'
import './Casas.css'

const Casas = (props) => {
    return (
        (props.alunos.length > 0) && <section className='Casas' style={{backgroundImage:`url(${props.fundo})`}}>
            <h3>{props.nome}</h3>
            <div className='aluno'>
                {props.alunos.map( aluno => <Aluno nome={aluno.nome} imagem={aluno.imagem}/> )}
            </div>
        </section>
    )
}

export default Casas