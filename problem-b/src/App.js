import React, { Component } from 'react';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: this.props.pets
    };
  }

  handleAdopt = (petName) => { 
    this.setState((currentState)=>{
      let currentPet = _.find(currentState.pets, ['name', petName]);
      currentPet.adopted = true;
      return currentPet;
    }); 
  }

  render() {
    return (
      <div>
          <header className="jumbotron jumbotron-fluid py-4">
            <div className="container">
              <h1>Adopt a Pet</h1>
            </div>
          </header>

          <main className="container">
            <div className="row">
              <div id="navs" className="col-3">
                <AboutNav />
                <BreedNav breeds={Object.keys(_.groupBy(this.state.pets, 'breed'))} />
              </div>
              <div id="petList" className="col-9">
              <PetList pets={this.state.pets} handleAdopt={this.handleAdopt} />
              </div>
            </div>
          </main>

          <footer className="container">
            <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
          </footer>
      </div >
    );
  }
}

class AboutNav extends Component {
  render() {
    return (
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li><a href="#/">How to Adopt</a></li>
          <li><a href="#/">Volunteering</a></li>
          <li><a href="#/">Events</a></li>
          <li><a href="#/">Donate</a></li>
          <li><a href="#/">About Us</a></li>
        </ul>
      </nav>
    );
  }

}

class BreedNav extends Component {

  render() {
    let breedArray = this.props.breeds.map((d) => {
      return (<li key={d}><a href="">{d}</a></li>);
    });
    return (
      <nav id="breedLinks">
        <h2>Pick a Breed</h2>
        <ul className="list-unstyled">
          {breedArray};
      </ul>
      </nav>
    );
  }

}

class PetCard extends Component {
  handleClick = () => { 
    this.props.handleAdopt(this.props.pet.name);
  }
  render() {
    let isAdopted = this.props.pet.adopted;
    return (
      <div className="card" onClick={this.handleClick}>
        <img className="card-img-top" src={this.props.pet.img} alt={this.props.pet.name} />
        <div className="card-body">
          <h3 className="card-title">{this.props.pet.name + ''} {isAdopted ? '(Adopted)' : ''}</h3>
          <p className="card-text">{this.props.pet.sex + ' ' + this.props.pet.breed}</p>
        </div>
      </div>
    );
  }
}

class PetList extends Component { 
  render() { 
    let petCardArray = this.props.pets.map((p)=>{
      return(<PetCard pet={p} handleAdopt={this.props.handleAdopt} key={p.name}/>);
    })
    return (
      <div>
        <h2>Dogs for Adoption</h2>
        {petCardArray};
      </div>
    );
  }
}
export default App;
