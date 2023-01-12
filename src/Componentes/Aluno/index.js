import './Aluno.css'
import {AiFillCloseCircle} from 'react-icons/ai'

const Aluno = ({nome, imagem, corCabecalho, aoDeletar, aluno}) => {
    return (
        <div className='Aluno'>
            <AiFillCloseCircle 
                size={32} 
                className='deletar' 
                onClick={() => aoDeletar(aluno.id)} 
            />
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