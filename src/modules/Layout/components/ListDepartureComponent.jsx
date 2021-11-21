import React, { Component } from 'react';
import DepartureService from '../services/DepartureService';
import './About.css';
class ListDepartureComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                departures: []
        }
        this.addDeparture = this.addDeparture.bind(this);
        // this.editDeparture = this.editDeparture.bind(this);
        // this.deleteDeparture = this.deleteDeparture.bind(this);
    }

    // deleteDeparture(departureId){
    //     DepartureService.deleteDeparture(departureId).then( res => {
    //         this.setState({departures: this.state.departures.filter(departure => departure.departureId !== departureId)});
    //     });
    // }
    // viewDeparture(departureId){
    //     this.props.history.push(`/view-departure/${departureId}`);
    // }
    // editDeparture(departureId){
    //     this.props.history.push(`/update-departure/${departureId}`);
    // }

    componentDidMount(){
        DepartureService.getDepartures().then((res) => {
            this.setState({ departures: res.data});
        });
    }

    addDeparture(){
        this.props.history.push('/add-departure');
    }

    render() {
        return(
         <>
         <section className="p-1 bg-teal text-white">
             <div className="container">
                 <div className="row">
                     <h1>
                         <i className="fa fa-chart-bar"></i>Dashboard
                     </h1>
                 </div>
             </div>
         </section>
         <section className="p-3 bg-light">
             <div className="container">
                 <div className="row">
                     <div className="col-md-4 d-grid gap-2">
                         <button className="btn btn-primary btn-block" size="lg">
                             <i className="fa fa-plus-circle"></i>Add Task
                         </button>
                     </div>
                     <div className="col-md-4 d-grid gap-2">
                         <button className="btn btn-primary btn-block">
                             <i className="fa fa-plus-circle"></i>Add Task
                         </button>
                     </div>
                     <div className="col-md-4 d-grid gap-2">
                         <button className="btn btn-primary btn-block">
                             <i className="fa fa-plus-circle"></i>Add Task
                         </button>
                     </div>
                 </div>
             </div>
         </section>
         {/* Main content section */}
         <section className="p-3">
             <div className="container">
                 <div className="row">
                     <div className="col-md-9">
                         <div className="card">
                             <div className="card-header bg-secondary">
                                 <div className="row">
                                     <div className="col"><h3>Departure List</h3></div>
                                     <div className="col ml-auto">
                                     <button className="btn btn-primary" onClick={this.addDeparture}> Add Departure</button>
                                     </div>
                                 </div>
                                 
                                 {/* <div className = "">
                    
                 </div> */}

                             </div>
                             <div className="card-body bg-light">
                                <table className="table table-hover text-center">
                                    <thead className="bg-dark text-white">
                                    <tr>
                                    <th>Departure Id</th>
                                    <th> IMU Number</th>
                                    <th> Full Name</th>
                                    <th> Phone</th>
                                    <th> Email</th>
                                    <th> Action</th>
                                    <th> Action</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                {
                                    this.state.departures.map(
                                        departure => 
                                        <tr key = {departure.departureId}>
                                            <td> { departure.departureId} </td>
                                             <td> { departure.imulNumber} </td>   
                                             <td> {departure.fullName}</td>
                                             <td> {departure.phone}</td>
                                             <td> {departure.email}</td>
                                             <td>
                                                 <button onClick = { () =>this.editDeparture(departure.departureId)} className="btn btn-primary btn-sm">Update</button>
                                                 {/* <button style={{marginLeft:"5px"}}onClick = { () =>this.deleteDeparture(departure.departureId)} className="btn btn-danger btn-sm">Delete</button> */}
                                                 {/* <button style={{marginLeft:"10px"}}onClick = { () =>this.viewDeparture(departure.departureId)} className="btn btn-info btn-sm">View</button> */}
                                             </td>
                                                
                                             <td>
                                             <button style={{marginLeft:"5px"}}onClick = { () =>this.deleteDeparture(departure.departureId)} className="btn btn-danger btn-sm">Delete</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>

                                </table>
                             </div>
                         </div>

                     </div>
                     <div className="col-md-3">
                         <div className="card">
                             <div className="card-header bg-primary text-white">
                                 <div className="row align-items-center">
                                     <div className="col">
                                        <i className="fa fa-list fa-4x"></i>
                                     </div>
                                     <div className="col">
                                       <h3 className="display-3">09</h3>
                                       <h6>Departures</h6>
                                     </div>
                                 </div>
                             </div>
                             <div className="card-footer text-center">
                                    <h4>
                                        <a href="" className="text-primary">
                                            View Details <i className="fa fa-arrow-circle-right"></i>
                                        </a>
                            
                                    </h4>
                             </div>
                             
                         </div>
                         <div className="card">
                             <div className="card-header bg-primary text-white">
                                 <div className="row align-items-center">
                                     <div className="col">
                                        <i className="fa fa-list fa-4x"></i>
                                     </div>
                                     <div className="col">
                                       <h3 className="display-3">09</h3>
                                       <h6>Departures</h6>
                                     </div>
                                 </div>
                             </div>
                             <div className="card-footer text-center">
                                    <h4>
                                        <a href="" className="text-primary">
                                            View Details <i className="fa fa-arrow-circle-right"></i>
                                        </a>
                            
                                    </h4>
                             </div>
                             
                         </div>
                         <div className="card">
                             <div className="card-header bg-primary text-white">
                                 <div className="row align-items-center">
                                     <div className="col">
                                        <i className="fa fa-list fa-4x"></i>
                                     </div>
                                     <div className="col">
                                       <h3 className="display-3">09</h3>
                                       <h6>Departures</h6>
                                     </div>
                                 </div>
                             </div>
                             <div className="card-footer text-center">
                                    <h4>
                                        <a href="" className="text-primary">
                                            View Details <i className="fa fa-arrow-circle-right"></i>
                                        </a>
                            
                                    </h4>
                             </div>
                             
                         </div>


                     </div>
                 </div>
             </div>
         </section>
         </>
     )
 }
}

 export default ListDepartureComponent

