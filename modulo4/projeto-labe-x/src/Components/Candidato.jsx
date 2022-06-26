import styled from "styled-components";
import axios from "axios";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: rgba(48, 46, 69, 0.578);
    border-radius: 30px;
    padding: 20px;
    align-items: center;
`
const Aprova = styled.div`
    display: flex;
    flex-direction: row;
`
const BtnAprova = styled.button`
    padding: 10px;
    font-size:1.2em;
    width: 180px;
    height: 50px;
    border-radius: 40px;
    background-color: #7DDBF9;
    cursor: pointer;
`
const BtnNaoAprova = styled.button`
    padding: 10px;
    font-size:1.2em;
    width: 180px;
    height: 50px;
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

    const aprovaCandidato = (tripId, candidateId, escolha) => {
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        const body = {
            "approve": escolha
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/madson/trips/${tripId}/candidates/${candidateId}/decide`, body, headers)
        .then((resp) => {
            console.log(resp);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <Card>
            <Aprova>
                <form onSubmit={() =>{aprovaCandidato(props.idViagem, props.idCandidato, true)}}>
                    <BtnAprova>Aprovar</BtnAprova>
                </form>    
                <form onSubmit={() =>{aprovaCandidato(props.idViagem, props.idCandidato, false)}}>
                    <BtnNaoAprova>Recusar</BtnNaoAprova>
                </form>
            </Aprova>
            <InputCandidato>{props.name}</InputCandidato>
            <InputCandidato>{props.idade}</InputCandidato>
            <InputCandidato>{props.profissao}</InputCandidato>
            <InputCandidato>{props.nacionalidade}</InputCandidato>
            <InputDescricao>{props.descricao}</InputDescricao>
        </Card>
    )
}

export default Candidato;