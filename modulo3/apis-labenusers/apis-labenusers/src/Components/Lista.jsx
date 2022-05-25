import axios from "axios";
import React from "react";

export default class Lista extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.getUsuarios()
    }

    getUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        
        axios.get(url, {
            headers: {
                Authorization: "madson-pereira-hopper"
            }
        }).then((res) => {
            console.log(res);
            this.setState({usuarios: res.data})
        }).catch((err) => {
            console.log(err.response);
        })
    }

    delUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
            Authorization: "madson-pereira-hopper"
            }
        }).then(() => {
            alert("Usuário deletado com sucesso");
            this.getUsuarios()
        }).catch((err) => {
            alert("Falha ao deletar usuario")
        })
    }

    refreshPage = () => {
        window.location.reload()
    }

    render() {
        return(
            <>
                <h1> Tela de Lista</h1>
                <div>
                    <button onClick={this.props.filhoDois}>Troca de Tela</button>
                    {
                        this.state.usuarios.map((usuario) => {
                            return (
                                <ul>
                                    <li>{ usuario.name }</li>
                                    <button onClick={() => {if(window.confirm("Deseja deletar este usuário?")){this.delUsuario(usuario.id)}}}>Deletar</button>
                                </ul>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}