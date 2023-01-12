import { useState } from 'react';
import Banner from './Componentes/Banner';
import Casas from './Componentes/Casas';
import Formulario from './Componentes/Formulario';
function App() {

  const [alunos, setAluno] = useState([])

  const casas = [
    {
      nome: 'Grifinória',
      fundo: 'https://i.ibb.co/289JPR5/fundo-grifinoria.jpg'
    },
    {
      nome: 'Sonserina',
      fundo: 'https://i.ibb.co/1Rx0yhw/fundo-sonserina.jpg'
    },
    {
      nome: 'Lufa-lufa',
      fundo: 'https://i.ibb.co/4gL7qh1/fundo-lufalufa.jpg'
    },
    {
      nome: 'Corvinal',
      fundo: 'https://i.ibb.co/82VNC1M/fundo-corvinal.jpg'
    }]

  const aoAlunoCadastrado = (aluno) => {
    setAluno([...alunos, aluno])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario casas={casas.map(casa => casa.nome)} aoAlunoCadastrado={aluno => aoAlunoCadastrado(aluno)}/>
      {casas.map(casas => <Casas 
        key={casas.nome} 
        nome={casas.nome} 
        fundo={casas.fundo} 
        cor={casas.cor}
        alunos={alunos.filter(aluno => aluno.casa === casas.nome)}/>)}
    </div>
  );
}

export default App;
