import React from 'react';

class Dogs extends React.Component {
  constructor() {
    super();

    this.state = {
      dogObj: undefined,
      loading: true,
      storedDogs: [],
    };
  }

  fetchDog = async () => {
    const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
    const requestObject = await requestReturn.json();
    this.setState({
      dogObj: requestObject
    })
  }

  componentDidMount() {
    this.fetchDog()
  }

  saveDog = () => {

  }

  renderDogElement = () => {
    return (
      <div>
        <p>{ this.state.dogObj.message }</p>
        <button type="button" onClick={ this.saveDog }>Salvar Dog!</button>
      </div>
    )
  }

  render() {

    const { storedDogs, dogObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          { storedDogs.map(({ message }) => (<p key={ message }>{ message }</p>)) }
        </span>

        { dogObj ? <img src={dogObj.message}/> : loadingElement }
      </div>
    )
  }
}

export default Dogs;
