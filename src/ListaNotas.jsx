import { useEffect, useState } from 'react';
import { dados } from './notas.js';
function Notas() {
  
    const [notas, setnotas] = useState([]);

    const [nostasEsc, setnotasEsc] = useState([]);

    const [total, settotal] = useState (0);

    useEffect(()=> {
        setnotas(dados)
    },[])

    const lista = notas.map(nota => (
        <tr key={nota.id}>
            <td><img style={{width:400}} src={nota.foto} alt="" /></td>
            <td>
                <h3 className='mb-4'>{nota.descricao}</h3>
                <h2 className='mb-4'>R$: {nota.valor.toLocaleString('pt-br', {minimumFractionDigits:2})}</h2>
                <button onClick={() => adicionar(nota)} type="button" className="btn btn-primary">Adicionar</button>
            </td>
        </tr>
    ));

    function adicionar(nota) {
        setnotasEsc([...nostasEsc, nota]);
        settotal(total + nota.valor)
    }

    const saque = nostasEsc.map(not => (
        <p> R$ {not.valor.toLocaleString('pt-br', {minimumFractionDigits:2})} |</p>
    ))

    function limpar() {
        setnotasEsc([]);
        settotal(0)
    }

    function sacar() {
        if(total > 500) {
            alert('Erro... Limite de saque de 500,00')
        } else {
            alert('Saque Ok')
            setnotasEsc([]);
            settotal(0)
        }
    }

  return (
    <>
        <div className='container'>
            <h4 className='d-flex flex-wrap'>Adicionadas: {saque}</h4>
            <h3>Total: R${total.toLocaleString('pt-br', {minimumFractionDigits:2})}</h3>
            <div className='d-flex'>
                <button onClick={sacar} type="button" class="btn btn-success me-4">Concluir Saque</button>
                <button onClick={limpar} type="button" class="btn btn-danger">Limpar</button>
            </div>
        </div>
        <table className="table container">
            <tbody>
                {lista}
            </tbody>
        </table>
      
      
    </>
  )
}

export default Notas