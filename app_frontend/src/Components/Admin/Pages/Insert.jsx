import React, { Component } from "react";
import Base from "./../../../Modules/Base";
import axios from "axios";
import Navbar from './../../Partials/Navbar';

class Insert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: [],
      idMateria: 0,
      votoValore: 0
    };
  }

  componentDidMount = () => {
    axios
      .get(`http://${Base.getIp()}:${Base.getPort()}/db/create`)
      .then((res) => {
        this.setState({ subjects: res.data });
        console.log(this.state.subjects);
      });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandle = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`http://${Base.getIp()}:${Base.getPort()}/db/create`, { idMateria: this.state.idMateria, votoValore: this.state.votoValore })
      .then((res) => {
        console.log(res)
      })
  }

  render = () => {
    return (
      <div>
        <Navbar />
        <section id="formSection">
          <form id="formInsert" className="w3-animate-zoom">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" width="50" height="50" alt="" />
            <hr />
            <div className="form-group">
              <label htmlFor="idMateria">Seleziona materia:</label>
              <select className="form-control" name="idMateria" id="idMateria" onChange={this.changeHandler} value={this.state.valoreVoto}>
                <option value="0">-</option>
                {this.state.subjects.map((element) => {
                  return (
                    <option value={element.idSubject}>{element.nameSubject}</option>
                  );
                })}
              </select>
            </div>
            <label htmlFor="votoValore">Seleziona voto:</label>
            <select className="form-control" name="votoValore" id="votoValore" onChange={this.changeHandler} value={this.state.value}>
              <option value="0">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button className="btn" type="submit" onClick={this.submitHandle}>Conferma</button>
          </form>
        </section>
      </div>
    );
  };
}

export default Insert;
