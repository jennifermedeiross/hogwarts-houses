import Aluno from '../Aluno'
import './Casas.css'

const Casas = ({nome, alunos, corCabecalho, fundo}) => {
    return (
        (alunos.length > 0) && <section className='Casas' style={{backgroundImage:`url(${fundo})`}}>
            <h3>{nome}</h3>
            <div className='aluno'>
                {alunos.map( aluno => <Aluno corCabecalho={corCabecalho} nome={aluno.nome} imagem={aluno.imagem}/> )}
            </div>
        </section>
    )
}

export default Casas