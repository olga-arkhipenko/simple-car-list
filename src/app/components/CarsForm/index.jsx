import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import Car from '../../models/car';
import FormField from '../FormField';
import FormButton from '../FormButton';
import routes from '../../constants/routes';
import { getPropertyOrDefault } from '../../../utilities/getPropertyOrDefault';
import './index.css';

class CarsForm extends Component {
    static propTypes = {
        car: PropTypes.instanceOf(Car).isRequired,
        onSubmit: PropTypes.func.isRequired,
        history: ReactRouterPropTypes.history.isRequired
    }

    constructor(props) {
        super(props);

        this.carPropertyNames = Object.getOwnPropertyNames(props.car);
        const getCarPropertyOrDefault = propertyName => getPropertyOrDefault(props.car, car => car[ propertyName ]);
        const car = this.carPropertyNames.reduce((result, propertyName) => {
            result[ propertyName ] = getCarPropertyOrDefault(propertyName);
            return result;
        }, {});

        this.state = { car };
    }

    handleChange = name => event => {
        const { value } = event.target;
        this.setState(
            state => ({
                car: {
                    ...state.car,
                    [ name ]: value
                }
            })
        );
    }

    handleChangeBrand = this.handleChange('brand');

    handleChangeModel = this.handleChange('model');

    handleChangeProductionYear = this.handleChange('productionYear');

    handleChangeEngineCapacity = this.handleChange('engineCapacity');

    handleChangeEnginePower = this.handleChange('enginePower');

    handleChangePrice = this.handleChange('price');

    handleChangeOwner = this.handleChange('owner');

    goToPage = path => this.props.history.push(path);

    clearForm = () => {
        const car = this.carPropertyNames.reduce((result, propertyName) => {
            result[ propertyName ] = '';
            return result;
        }, {});
        this.setState({ car });
    };

    handleCancel = () => {
        this.clearForm();
        this.goToPage(routes.HOME);
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.car);
        this.clearForm();
    };

    render() {
        const {
            brand,
            model,
            productionYear,
            engineCapacity,
            enginePower,
            price,
            owner
        } = this.state.car;

        return (
            <form
                className="form"
                onSubmit={ this.handleSubmit }
            >
                <FormField
                    name="Brand"
                    type="text"
                    value={ brand }
                    onChange={ this.handleChangeBrand }
                />
                <FormField
                    name="Model"
                    type="text"
                    value={ model }
                    onChange={ this.handleChangeModel }
                />
                <FormField
                    name="Production year"
                    type="number"
                    value={ productionYear }
                    onChange={ this.handleChangeProductionYear }
                />
                <FormField
                    name="Engine capacity"
                    type="number"
                    value={ engineCapacity }
                    onChange={ this.handleChangeEngineCapacity }
                />
                <FormField
                    name="Engine power"
                    type="number"
                    value={ enginePower }
                    onChange={ this.handleChangeEnginePower }
                />
                <FormField
                    name="Price"
                    type="number"
                    value={ price }
                    onChange={ this.handleChangePrice }
                />
                <FormField
                    name="Owner"
                    type="text"
                    value={ owner }
                    onChange={ this.handleChangeOwner }
                />
                <div className="form__actions">
                    <FormButton
                        value="Submit"
                        type="submit"
                        design="accept"
                        onClick={ this.handleSubmit }
                    />
                    <FormButton
                        value="Cancel"
                        type="reset"
                        design="cancel"
                        onClick={ this.handleCancel }
                    />
                </div>
            </form>
        );
    }
}

export default withRouter(CarsForm);
