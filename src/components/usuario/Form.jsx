import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import $ from 'jquery';

export default class FormUsuario extends React.Component {
    constructor(){
        super();
        this.state = {id: '', nome: '', email:'', login:'', senha:''}
    }


    componentDidMount() {
        this.setState({id: this.props.match.params.id});

        $.ajax({
            url: '127.0.0.1:3000/usuario/' + this.state.id,
            dataType: 'json',
            type:'get',
            success: function(response) {
                this.state({
                    // nome: 
                }).bind(this)
            }
        })
    }


    render() {
        return (
            <Row>
                <Col>
                <h1>{this.state.id}</h1>
                    <Form>
                        <FormGroup>
                            <Label for="login">Login</Label>
                            <Input type="text" name="login" id="login" placeholder="Informe o Login" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="nome">Nome</Label>
                            <Input type="text" name="nome" id="nome" placeholder="Informe o Nome" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">E-Mail</Label>
                            <Input type="email" name="email" id="email" placeholder="Informe o E-mail" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="senha">Password</Label>
                            <Input type="password" name="senha" id="senha" placeholder="Informe a Senha" />
                        </FormGroup>
                    </Form>
                </Col>

            </Row>

        )
    }
}