import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';
import routes from '../../constants/routes';
import FormField from '../FormField';
import FormButton from '../FormButton';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            model: '',
            productionYear: '',
            engineCapacity: '',
            enginePower: '',
            price: '',
            owner: ''
        }
    }

    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        });
    }

    handleChangeBrand = this.handleChange('brand');

    handleChangeModel = this.handleChange('model');

    handleChangeProductionYear = this.handleChange('productionYear');

    handleChangeEngineCapacity = this.handleChange('engineCapacity');

    handleChangeEnginePower= this.handleChange('enginePower');

    handleChangePrice = this.handleChange('price');

    handleChangeOwner = this.handleChange('owner');

    goToPage = (path) => this.props.history.push(path);

    clearForm = () => this.setState({
        brand: '',
        model: '',
        productionYear: '',
        engineCapacity: '',
        enginePower: '',
        price: '',
        owner: ''
    });

    handleCancel = () => {
        this.clearForm();
        this.goToPage(routes.HOME);
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.clearForm();
    };

    render() {
        return (
            <form className="form" onSubmit={ this.handleSubmit } >
                <FormField name="Brand" type="text" value={ this.state.brand } onChange={ this.handleChangeBrand } />
                <FormField name="Model" type="text" value={ this.state.model } onChange={ this.handleChangeModel } />
                <FormField name="Production year" type="number" value={ this.state.productionYear } onChange={ this.handleChangeProductionYear } />
                <FormField name="Engine capacity" type="number" value={ this.state.engineCapacity } onChange={ this.handleChangeEngineCapacity } />
                <FormField name="Engine power" type="number" value={ this.state.enginePower } onChange={ this.handleChangeEnginePower } />
                <FormField name="Price" type="number" value={ this.state.price } onChange={ this.handleChangePrice } />
                <FormField name="Owner" type="text" value={ this.state.owner } onChange={ this.handleChangeOwner } />
                <div className="form__actions">
                    <FormButton value="Submit" type="submit" design="accept" onClick={ this.handleSubmit } />
                    <FormButton value="Cancel" type="reset" design="cancel" onClick={ this.handleCancel }/>
                </div>
            </form>
        );
    }
};

export default withRouter(Form);
