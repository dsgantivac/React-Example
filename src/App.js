import React, { Component } from 'react';
import NavBar from "./components/navbar.jsx";
import Counters from "./components/counters.jsx";


class App extends Component {

  state = {
    items: [
      { id: 1, value: 4},
      { id: 2, value: 0},
      { id: 3, value: 0},
      { id: 4, value: 0}
    ]
  };

  constructor(){
    super();
    console.log('App - Contructor');

  }

  componentDidMount(){
    console.log('App - Mounted');
  }




  handleDelete = (itemId) =>{
    //eliminar el elemento
    //se crea un nuevo arreglo sin el item y se actualiza el arrelgo
    const counters = this.state.items.filter(c => c.id !== itemId);
    console.log("this handle delete", itemId);
    this.setState({
      items: counters
    });

  };

  handleIncrement = (item) => {
    //console.log(item);
    //se hace una copia total de los elementos
    const items = [...this.state.items];
    //consigue el indice de el item que se esta mirando
    const index = items.indexOf(item);
    items[index] = {...item};
    items[index].value++;
    console.log(items[index]);
    this.setState({ items })

  }


  handleReset = () => {
    const counters = this.state.items.map(item =>{
      item.value = 0;
      return item;
    });
    this.setState({
      items: counters
    })
  };


  render() {
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters = {this.state.items.filter(c => c.value > 0).length} />
        <main className = "container">
          <Counters
            onReset = {this.handleReset}
            onIncrement= {this.handleIncrement}
            onDelete ={this.handleDelete}
            items = {this.state.items}
          />
        </main>
      </React.Fragment>
    );
  }

}

export default App;
