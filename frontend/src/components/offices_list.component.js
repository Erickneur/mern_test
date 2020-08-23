import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Office = props => (
  <tr>
    <td>{props.office.username}</td>
    <td>{props.office.description}</td>
    <td>{props.office.phone}</td>
    <td>{props.office.location}</td>
    <td>
      <Link to={"/office/edit/"+props.office._id}>Editar</Link> | <a href="#" className="text-danger" onClick={() => { if (window.confirm('¿Estás segura(o) de que deseas eliminar la fiscalía: ' + props.office.description + '?')) props.deleteOffice(props.office._id) }}>Eliminar</a>
    </td>
  </tr>
)

export default class OfficesList extends Component {

  constructor(props) {
    super(props);

    this.deleteOffice = this.deleteOffice.bind(this);

    this.state = { offices: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/offices/')
      .then(response => {
        this.setState({ offices: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteOffice(id) {
    axios.delete('http://localhost:5000/offices/delete/' + id)
      .then(res => console.log(res.data));
    this.setState({
      offices: this.state.offices.filter(el => el._id !== id)
    })
  }

  getOfficesList() {
    return this.state.offices.map(current_office=> {
      return <Office office={current_office} deleteOffice={this.deleteOffice} key={current_office._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Listado de fiscalías offices</h3>
        <table className="table table-responsive-lg table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Fiscal</th>
              <th scope="col">Descripción</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Ubicación</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.getOfficesList()}
          </tbody>
        </table>
      </div>
    )
  }
}