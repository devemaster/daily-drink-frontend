import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { doHomeRes } from '../../../action/homeAction';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './form.scss';






class HomeForm extends React.PureComponent {

    constructor(props) {
        super(props);
        console.log(props)
        this.state ={
            name:props.formData && props.formData.name,
            price:props.formData && props.formData.price ,
            note:props.formData && props.formData.note,
            id:props.formData && props.formData.id,
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            name:nextProps.formData && nextProps.formData.name,
            price:nextProps.formData && nextProps.formData.price,
            note:nextProps.formData && nextProps.formData.note,
            id:nextProps.formData && nextProps.formData.id,
        })
    }

    // exit component clear data
    componentWillUnmount() {
        this.props.reset();
    }
    //submit edit form
    handleSubmit = () => {
        let data = {
            name:this.state.name,
            price:this.state.price,
            note:this.state.note,
            id:this.state.id
        }
        this.props.handleFormSubmit(data)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-content">
                <h3>Enter order detail here</h3>
                <input type="hidden" name="id" value={this.state.id} />
                <div className="small-12 columns error_message form_field_wrapper email_feild_wrapper">
                    <input
                        name="name"
                        placeholder="Enter Name"
                        className="form-control"
                        autoComplete="off"
                        type="text"
                        value={this.state.name}
                        onChange={(e) => this.setState({name:e.target.value})}
                    />
                </div>
                <div className="small-12 columns error_message form_field_wrapper password_feild_wrapper">
                    <input
                        name="price"
                        className="form-control"
                        placeholder="Enter price"
                        autoComplete="off"
                        type="number"
                        value={this.state.price}
                        onChange={(e) => this.setState({price:e.target.value})}
                    />
                </div>
                <div className="small-12 columns error_message form_field_wrapper password_feild_wrapper">
                    <input
                        name="note"
                        className="form-control"
                        placeholder="Enter note"
                        autoComplete="off"
                        type="note"
                        value={this.state.note}
                        onChange={(e) => this.setState({note:e.target.value})}
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary login_button" disabled={this.props.submitting}>Submit</button>
                </div>
            </form>
        )
    }
}

// setup props data
HomeForm.propTypes = {
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    handleFormSubmit: PropTypes.func,
    doHomeRes: PropTypes.any
};

// setup response function
const mapStateToProps = createStructuredSelector({
    doHomeRes: doHomeRes
});
  
// dispatch function
function mapDispatchToProps(dispatch,ownProps) {
    return {
        
    };
}


const ReduxHomeForm = reduxForm({
    form: 'ReduxHomeForm',
    destroyOnUnmount: false,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    touchOnBlur: false,
})(HomeForm)

// connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(ReduxHomeForm);
