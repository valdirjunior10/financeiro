import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import axios from 'axios'
import { Link } from 'react-router-dom'
export default class FormFornecedor extends Component {
    constructor() {
        super();
        this.state = { id: '', razao_social: '', fantasia: '', cnpj: '', ie: '', contato: '' };
        this.salvar = this.salvar.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.id !== undefined) {
            axios({
                url: 'http://127.0.0.1:3000/fornecedores/' + this.props.match.params.id, 
                method: 'get'         
            }).then(response => {
                this.setState({id: response.data.id});
                this.setState({razao_social: response.data.razao_social});
                this.setState({fantasia: response.data.fantasia});
                this.setState({cnpj: response.data.cnpj});
                this.setState({ie: response.data.ie});
                this.setState({contato: response.data.contato});
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

        let url;
        let metodo;
        console.log(this.state.id);

        if (this.state.id == '') {
            url = 'http://127.0.0.1:3000/fornecedores';
            metodo = 'post';
        } else {
            url = 'http://127.0.0.1:3000/fornecedores/' + this.state.id;
            metodo = 'put';
        }

        axios({
            url: url,
            method: metodo,
            data: {
                razao_social: this.state.razao_social,
                fantasia: this.state.fantasia,
                cnpj: this.state.cnpj,
                ie: this.state.ie,
                contato: this.state.contato,
            },
            
        }).then(response => {
            console.log(response);
            alert('Fornecedor salvo com sucesso!');
        })

    }

    render() {
        return (<div>
            <div>
                <h1>Codigo: {this.state.id}</h1>
                <hr />
            </div>

            <div>
                <Form onSubmit={this.salvar} method="post">

                    <FormGroup>
                        <Label for="Razão Social">Razão Social</Label>
                        <Input type="text" name="razao_social" value={this.state.razao_social} id="razao_social" onChange={this.handleChange.bind(this)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Fantasia">Fantasia</Label>
                        <Input type="text" name="fantasia" value={this.state.fantasia} id="fantasia" onChange={this.handleChange.bind(this)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="CNPJ">CNPJ</Label>
                        <Input type="text" name="cnpj" value={this.state.cnpj} id="cnpj" onChange={this.handleChange.bind(this)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="IE">IE</Label>
                        <Input type="text" name="ie" value={this.state.ie} id="ie" onChange={this.handleChange.bind(this)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Contato">Contato</Label>
                        <Input type="text" name="contato" value={this.state.contato} id="contato" onChange={this.handleChange.bind(this)} />
                    </FormGroup>

                    <Row>
                        <Col>
                            <Button type="submit" color="primary" >Salvar</Button>{' '}
                            <Link to="/fornecedor" className="btn btn-danger">Voltar</Link>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>);
    }
}