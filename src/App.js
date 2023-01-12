import { useState } from 'react';
import Banner from './Componentes/Banner';
import Casas from './Componentes/Casas';
import Formulario from './Componentes/Formulario';
import { v4 as uuidv4 } from 'uuid';

function App() {

  
  const [casas, setCasas] = useState([
    {
      id: uuidv4(),
      nome: 'Grifinória',
      fundo: 'https://i.ibb.co/289JPR5/fundo-grifinoria.jpg', // https://imgcloud.com.br/share/Kw21mv2LdEzXwpmR
      corCabecalho: '#6D0000'
    },
    {
      id: uuidv4(),
      nome: 'Sonserina',
      fundo: 'https://i.ibb.co/1Rx0yhw/fundo-sonserina.jpg',
      corCabecalho: '#008037'
    },
    {
      id: uuidv4(),
      nome: 'Lufa-lufa',
      fundo: 'https://i.ibb.co/4gL7qh1/fundo-lufalufa.jpg',
      corCabecalho: '#FFBD59'
    },
    {
      id: uuidv4(),
      nome: 'Corvinal',
      fundo: 'https://i.ibb.co/82VNC1M/fundo-corvinal.jpg',
      corCabecalho: '#004AAD'
    }])
    
    const inicial = [
      {
        id: uuidv4(),
        nome: 'HARRY POTTER',
        imagem: 'https://portalpopline.com.br/wp-content/uploads/2022/08/harry-potter-serie.jpg?w=640',
        casa: casas[0].nome
      },
      {
        id: uuidv4(),
        nome: 'RONALD WEASLEY',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6qkMcvyrJ3YRTmSw39_JoEBmuuoGZu2-MeUfgeZCbQ&s',
        casa: casas[0].nome
      },
      {
        id: uuidv4(),
        nome: 'HERMIONE GRANGER',
        imagem: 'https://super.abril.com.br/wp-content/uploads/2018/07/hermionehbphi-respromo3.jpg?quality=90&strip=info&w=600',
        casa: casas[0].nome
      },
      {
        id: uuidv4(),
        nome: 'GINA WEASLEY',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlI8N88GLq2XYr5WmzWpMq5WalF44Fu9MEPQ&usqp=CAU',
        casa: casas[0].nome
      },
      {
        id: uuidv4(),
        nome: 'DRACO MALFOY',
        imagem: 'http://2.bp.blogspot.com/-zQKGAN1hvKQ/TbMJvmWqMrI/AAAAAAAAAOg/ST0SYOkF3TY/s1600/Draco-Malfoy-tom-felton-110815_580_787.jpg',
        casa: casas[1].nome
      },
      {
        id: uuidv4(),
        nome: 'SEVERO SNAPE',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCObb_DFUK7s26L0zageTY2YiIT1Byus3IFQ&usqp=CAU',
        casa: casas[1].nome
      },
      {
        id: uuidv4(),
        nome: 'TOM RIDDLE',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSutS9k9QnwPfGSpA_QL2gNtevreBt1iBBg&usqp=CAU',
        casa: casas[1].nome
      },
      {
        id: uuidv4(),
        nome: 'LUCIUS MALFOY',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk42DyaWdBseX8dlZvNuh26HgTKh5BBAct5g&usqp=CAU',
        casa: casas[1].nome
      },
      {
        id: uuidv4(),
        nome: 'CREDICO DIGGORY',
        imagem: 'http://4.bp.blogspot.com/_5F4AlkEYHa8/TS94LTUdXYI/AAAAAAAAASk/80zmd1WatHc/s1600/Cedric-Diggory-cedric-diggory-1274153-233-298.jpg',
        casa: casas[2].nome
      },
      {
        id: uuidv4(),
        nome: 'NEWT SCAMANDER',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMJnRSBtrQ6eAwT6mDBusHj4D5yHXDPJK2Q&usqp=CAU',
        casa: casas[2].nome
      },
      {
        id: uuidv4(),
        nome: 'NINFADORA TONKS',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKo6CofNIN73qZpSYKC9gjVQxbjKvaI5UKykzblpArISC0SLt9bduYJYp7w3wwffxwI0A&usqp=CAU',
        casa: casas[2].nome
      },
      {
        id: uuidv4(),
        nome: 'SUSAN BONES',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_YMfTufEitU4vsPtGVWK4axK1mKof_NSrQ&usqp=CAU',
        casa: casas[2].nome
      },
      {
        id: uuidv4(),
        nome: 'LUNA LOVEGOOD',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNa87EuoGzyOEd-vH_H5EXkk3chSbmkJQdxQ&usqp=CAU',
        casa: casas[3].nome
      },
      {
        id: uuidv4(),
        nome: 'CHO CHANG',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoasx_gOi62PlanDOmAC2v6exSMJpBXEfDQw&usqp=CAU',
        casa: casas[3].nome
      },
      {
        id: uuidv4(),
        nome: 'SIBILA TRELAWNEY',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnoFC76myUyNF3wuZGE1zGRWgQf9qvS-T8ZQ&usqp=CAU',
        casa: casas[3].nome
      },
      {
        id: uuidv4(),
        nome: 'MURTA QUE GEME',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRNq2oTmgPaihOQaVUwjCH0pCh_FIEb_AGA&usqp=CAU',
        casa: casas[3].nome
      }
    ]
    
    const [alunos, setAluno] = useState(inicial)
    
  const aoAlunoCadastrado = (aluno) => {
    setAluno([...alunos, aluno])
  }

  function deletarAluno(id) {
     setAluno(alunos.filter(aluno => aluno.id !== id));
  }

  function mudarCorDaCasa (cor, id) {
    setCasas(casas.map(casa => {
      if(casa.id === id) {
        casa.corCabecalho = cor;
      }
      return casa;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario casas={casas.map(casa => casa.nome)} aoAlunoCadastrado={aluno => aoAlunoCadastrado(aluno)}/>
      {casas.map(casas => 
        <Casas
          mudarCor={mudarCorDaCasa} 
          key={casas.nome} 
          id={casas.id}
          nome={casas.nome} 
          fundo={casas.fundo} 
          corCabecalho={casas.corCabecalho}
          alunos={alunos.filter(aluno => aluno.casa === casas.nome)}
          aoDeletar={deletarAluno}
        />)}
    </div>
  );
}

export default App;
