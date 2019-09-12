import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../linkButton/LinkButton.css';
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Table
} from 'reactstrap';



export default class TabelaUsuario extends Component {
    constructor() {
        super();
        this.state = { lista: [] };
        this.deletar = this.deletar.bind(this);
    }

    listar() {
        axios.get("http://127.0.0.1:3000/usuarios").then(resposta => {
            this.setState({ lista: resposta.data })
        })
    }

    componentDidMount() {
        this.listar();
    }

    deletar(id) {
        axios({
            url: "http://127.0.0.1/usuarios/" + id,
            method: 'delete'
        }).then(response => {
            this.listar();
        })
    }


    render() {
        return (
            <div>
                <Row>
                    <Col><h1>Usuarios</h1></Col>
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
                                            this.state.lista.map(function (usuario) {
                                                return (
                                                    <tr key={usuario.id}>
                                                        <td>{usuario.id}</td>
                                                        <td>{usuario.login}</td>
                                                        <td>{usuario.nome}</td>
                                                        <td>{usuario.email}</td>
                                                        <td><Link className="btn btn-primary" to={"/usuario/editar/" + usuario.id}>Editar</Link></td>
                                                        <td><Button color="danger" >Deletar</Button></td>
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