import './Aluno.css'

const Aluno = ({nome, imagem, corCabecalho}) => {
    return (
        <div className='Aluno'>
            <div className='cabecalho' style={{backgroundColor: corCabecalho}}>
                <img src={imagem} alt={nome} />
            </div>

            <div className='rodape'>
                <h4>
                    {nome}
                </h4>
            </div>
        </div>
)}

export default Aluno