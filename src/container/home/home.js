import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './home.scss';
import LoginForm from './Form/form';
import { submit_home, doHomeRes } from '../../action/homeAction';
// import { setItem, getItem } from '../../utils/localStore';
import Loader from 'react-loader-advanced';
import loaderImg from '../../assets/images/loader-example.gif';

class HomeComponent extends React.PureComponent {
// constructor function
    constructor() {
        super();
        this.state = {
            isLoader: false,
            client_ip: null,
            remainingDay: '',
            orderData:[],
            formData:undefined,
            showForm:false,
            getData:true,
        }
    }

    // on component receive new props
    componentWillReceiveProps(nextProps) {

        console.log(nextProps)
        if(nextProps.HomeRes && nextProps.HomeRes.data && nextProps.HomeRes.data.doHomeRes ){
            this.setState({
                orderData:[...nextProps.HomeRes.data.doHomeRes],
                formData:undefined,
                isLoader:false,
                getData:false,
            },()=>console.log(this.state.orderData))
        }
    }

    // form submit 
    handleSubmit(data) {
        console.log(data)
        let orderData = this.state.orderData;
        if(this.state.formData){
            if(data.id === ""){
                orderData[0] = data;
            }else{
                orderData[data.id] = data;
            }
            
        }else{
            orderData.push(data);
        }
        
        this.setState({
            isLoader: true,
            getData:true,
            showForm:false,
        })
        
        // login action call
        this.props.handleFormSubmit(orderData);
    };


    //delete data
    delete = (i) => {
        console.log(i)
        let orderData = this.state.orderData;
        orderData.splice(i,1)
        console.log(orderData)
        this.setState({
            getData:true,
        })
        this.props.handleFormSubmit(orderData);
    }

    // edit data
    edit = (i) => {
        this.setState({
            formData:{...this.state.orderData[i],id:i},
            showForm:true
        })
    }

    addNew = () => {
        this.setState({
            showForm:true
        })
    }

    render() {
		const spinner = <span><img src={loaderImg} alt="" /></span>;
        return (
            <Loader show={this.state.isLoader} message={spinner}>
                <div className="row">
                    <div className="col-md-8">
                        <button className="bt btn-block" onClick={this.addNew}>Add New</button>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Note</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orderData.map((item,index) => 
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>$ {item.price}.00</td>
                                        <td>{item.note}</td>
                                        <td><button className="btn btn-danger" onClick={() => this.delete(index)}>Delete</button>
                                        <button className="btn btn-primary" onClick={() => this.edit(index)}>Edit</button></td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="col-md-4">
                        {
                            this.state.showForm &&
                                <div style={{maxWidth:'400px',margin:'0 auto'}}>
                                    <LoginForm formData={this.state.formData} handleFormSubmit={(data) => { this.handleSubmit(data) }} />
                                </div>
                        }
                    </div>
                    
                </div>
            </Loader>
        )
    }
}

// setup props data
HomeComponent.propTypes = {
    handleFormSubmit: PropTypes.func,
    homeRes: PropTypes.any
};

// setup response function
const mapStateToProps = createStructuredSelector({
    HomeRes: doHomeRes
});

// dispatch function
function mapDispatchToProps(dispatch) {
    return {
        handleFormSubmit: (data) => dispatch(submit_home(data))
    };
}

// connect component to redux store
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomeComponent);
