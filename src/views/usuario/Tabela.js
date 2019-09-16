import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../components/linkButton/LinkButton.css';
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Table
} from 'reactstrap';

export default class TabelaUsuario extends Component {
    constructor() {
        super();
        this.state = { lista: [] };
        this.deletarUsuario = this.deletarUsuario.bind(this)
    }

    listar() {
        axios.get("http://127.0.0.1:3000/usuarios").then(resposta => {
            this.setState({ lista: resposta.data })            
        })
    }

    deletarUsuario(id) {
        if (window.confirm("Tem certeza que deseja excluir esse usuário?")) {
            axios({
                url: "http://127.0.0.1:3000/usuarios/" + id,
                method: 'DELETE',
            }).then(response => {
                this.listar();
            })
        }
    }

    componentDidMount() {
        this.listar();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col><h1 style={{fontFamily:'sans-serif'}}>Usuarios</h1></Col>
                </Row>

                <Row>
                    <Col xs="12">
                        <Card responsive>
                            <CardHeader className="text-left">
                                <Link className="btn link-btn-primary" to="usuario/novo">Novo Usuario</Link>{' '}
                            </CardHeader>

                            <CardBody>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Login</th>
                                            <th>Nome</th>
                                            <th>E-Mail</th>
                                            <th>Editar</th>
                                            <th>Deletar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.lista.map((usuario) => {
                                                return (
                                                    <tr key={usuario.id}>
                                                        <td>{usuario.id}</td>
                                                        <td>{usuario.login}</td>
                                                        <td>{usuario.nome}</td>
                                                        <td>{usuario.email}</td>
                                                        <td><Link className="btn btn-primary" to={"/usuario/editar/" + usuario.id}>Editar</Link></td>
                                                        <td><button className="btn btn-danger" onClick={() => this.deletarUsuario(usuario.id)}>Deletar</button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div >

        );
    }
}