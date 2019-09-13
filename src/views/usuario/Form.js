import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class FormUsuario extends React.Component {
    constructor() {
        super();
        this.state = { id: '', nome: '', email: '', login: '', senha: '' }
        this.salvar = this.salvar.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.id !== undefined) {
            this.setState({ id: this.props.match.params.id });
            console.log(this.state.id);
            let url = 'http://127.0.0.1:3000/usuarios/' + this.props.match.params.id;

            axios.get(url).then(response => {
                console.log(response.data);
                this.setState({ nome: response.data.nome });
                this.setState({ email: response.data.email });
                this.setState({ login: response.data.login });
                this.setState({ senha: response.data.senha });
            })
        }
    }

    handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }


    salvar(e) {
        e.preventDefault();
        if (this.state.id == "") {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:3000/usuarios',
                data: {
                    nome: this.state.nome,
                    email: this.state.email,
                    senha: this.state.senha,
                    login: this.state.login,
                }
            }).then(response => {
                console.log(response.data.id)
                alert('Registro salvo com sucesso!');
                this.setState({id: response.data.id})
            }).catch(error => {
                console.log(error)
            })
        } else {
            axios({
                method: 'put',
                url: 'http://127.0.0.1:3000/usuarios/' + this.state.id,
                data: {
                    nome: this.state.nome,
                    email: this.state.email,
                    senha: this.state.senha,
                    login: this.state.login,
                }
            }).then(response => {
                console.log(response)
                alert('Registro alterado com sucesso!');
            }).catch(error => {
                console.log(error)
            })
        }

    }


    render() {
        return (
            <div>
                <div>
                    <h1>Codigo: {this.state.id}</h1>
                    <hr />
                </div>

                <div>
                    <Form onSubmit={this.salvar} method="post">
                        <FormGroup>
                            <Label for="login">Login</Label>
                            <Input type="text" name="login" value={this.state.login} id="login" onChange={this.handleChange.bind(this)} placeholder="Informe o Login" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="nome">Nome</Label>
                            <Input type="text" name="nome" value={this.state.nome} id="nome" onChange={this.handleChange.bind(this)} placeholder="Informe o Nome" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">E-Mail</Label>
                            <Input type="email" name="email" value={this.state.email} id="email" onChange={this.handleChange.bind(this)} placeholder="Informe o E-mail" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="senha">Password</Label>
                            <Input type="password" name="senha" value={this.state.senha} id="senha" onChange={this.handleChange.bind(this)} placeholder="Informe a Senha" />
                        </FormGroup>

                        <Row>
                            <Col>
                                <Button type="submit" color="primary" >Salvar</Button>{' '}
                                <Link to="/usuario" className="btn btn-danger">Voltar</Link>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>

        )
    }
}