import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: colunm;
    width: 400px;
`
const Aprova = styled.div`
    display: flex;
    flex-direction: row;
`
const BtnAprova = styled.button`
    padding: 10px;
    width: 230px;
    height: 80px;
    border-radius: 40px;
    background-color: #7DDBF9;
    cursor: pointer;
`
const BtnNaoAprova = styled.button`
    padding: 10px;
    width: 230px;
    height: 80px;
    border-radius: 40px;
    background-color: #ec3131;
    cursor: pointer;
`
const InputCandidato = styled.p`
    background-color: white;
    border: solid 1px black;
    width: 360px;
    height: 30px;
    border-radius: 15px;
    font-size: 1.3em;
`
const InputDescricao = styled.p`
    background-color: white;
    border: solid 1px black;
    width: 360px;
    height: 90px;
    border-radius: 15px;
    font-size: 1.3em;
`

const Candidato = (props) => {
    return (
        <Card>
            <Aprova>
                <BtnAprova>Aprovar</BtnAprova>
                <BtnNaoAprova>Recusar</BtnNaoAprova>
            </Aprova>
            <InputCandidato>{props.nome}</InputCandidato>
            <InputCandidato>{props.idade}</InputCandidato>
            <InputCandidato>{props.profissao}</InputCandidato>
            <InputCandidato>{props.nacionalidade}</InputCandidato>
            <InputDescricao>{props.descricao}</InputDescricao>
        </Card>
    )
}

export default Candidato;