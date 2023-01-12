import CampoTexto from '../CampoTexto'
import Listasuspensa from '../Listasuspensa'
import Botao from '../Botao'
import './Formulario.css'
import { useState } from 'react'

const Formulario = ({casas, aoAlunoCadastrado}) => {
    
    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoAlunoCadastrado ({nome, imagem, casa})
        setNome('')
        setImagem('')
        setCasa('')
    }

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [casa, setCasa] = useState('')

    return (
        <section className='Formulario'>
            <form onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do aluno.</h2>
                <CampoTexto 
                    label='Nome' 
                    obrigatorio={true} 
                    placeholder='Digite o nome do aluno'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Informe a url da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <Listasuspensa 
                    obrigatorio={true}
                    label="Casa" 
                    itens={casas}
                    valor={casa}
                    aoAlterado={valor => setCasa(valor)}
                />
                <Botao> 
                    Criar Card
                </Botao>
            </form>
        </section>
    )}

export default Formulario