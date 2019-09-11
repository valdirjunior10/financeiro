import React from 'react';
import { Form } from 'reactstrap';

export default class FormUsuario extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="login">Email</Label>
                    <Input type="text" name="login" id="login" placeholder="Informe o Login" />
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
        )
    }
}