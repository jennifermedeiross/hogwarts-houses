import Aluno from '../Aluno'
import './Casas.css'

const Casas = ({id , fundo, corCabecalho, nome, alunos, aoDeletar, mudarCor}) => {
    return (
        (alunos.length > 0) && <section className='Casas' style={{backgroundImage:`url(${fundo})`}}>
            <input onChange={evento => mudarCor(evento.target.value, id)} value={corCabecalho} type='color' className='input-cor' />
            <h3>{nome}</h3>
            <div className='aluno'>
                {alunos.map( aluno => <Aluno corCabecalho={corCabecalho} aluno={aluno} nome={aluno.nome} imagem={aluno.imagem} aoDeletar={aoDeletar}/> 
                )}
            </div>
        </section>
    )
}

export default Casas