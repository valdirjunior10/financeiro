import React, {Component} from 'react';
import   'reactstrap';

export default class FormDespesa extends Component {

    constructor() {
        super();
        this.state = ({})
    }


    handleChange(e) {
        let change = {};
        console.log(e.target.name);
        // change[e.target.name] = e.target.value;
        // this.setState(change);
    }

    render(){
        return(
            <div>
                <form>
                    <div className="form-group">
                        <label>Fornecedor</label>
                        <select className="form-control">
                            <option className="form-control">Selecione</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Numero Documento</label>
                        <input type="text" name="numero" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Vencimento</label>
                        <input type="date" name="vencimento" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Valor</label>
                        <input type="text" name="numero" className="form-control" value={this.handleChange(this).bind(this)} />
                    </div>
                </form>
            </div>
        )
    }
}