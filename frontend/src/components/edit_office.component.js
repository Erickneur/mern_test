import React, { Component } from 'react';
import axios from 'axios';

export default class EditOffice extends Component {

  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      phone: '',
      location: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/offices/find/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          phone: response.data.phone,
          location: response.data.location
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const office = {
      username: this.state.username,
      description: this.state.description,
      phone: this.state.phone,
      location: this.state.location,
    };

    console.log(office);
    
    axios.post('http://localhost:5000/offices/update/' + this.props.match.params.id, office)
      .then(res => console.log(res.data));
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Crear nueva fiscalía</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Usuario: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Descripción: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-group">
            <label>Teléfono: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.phone}
                onChange={this.onChangePhone}
                />
          </div>
          <div className="form-group">
            <label>Ubicación: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Actualizar fiscalía" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }

}