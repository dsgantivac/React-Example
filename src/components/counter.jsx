import React, { Component } from 'react';


class Counter extends Component {

  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200',
    //tags: ['tag1','tag2','tag3']
    tags: []
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic"
  }


  renderTags(){
    if (this.state.tags.length === 0) {
      return <p>Esta monda esta vacia</p>;
    }else {
      return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>;
    }
  }

  handleIncrement = () => {
    //incrementar count en 1
    console.log(this.state.count);
    this.setState({
       count: this.state.count + 1
    })

  }

  handleZero= () => {
    //volver count 0
    this.setState({
      count: 0
      }
    );
  }

  handleIdIncrement = (id ) => {
    //incrementar count en 1
    console.log(id);


  }



  render() {

    return (
      <React.Fragment>
      
        <img src = {this.state.imageUrl}></img>
        <h1>!!Helo world!!</h1>
        <button onClick = {this.handleIncrement}  className = "btn btn-secondary btn-sm">Increment</button>
        <span className= "badge badge-primary m-3">{this.formatCount()}</span>
        <span style = {{fontSize: 30}}>{this.state.count}</span>
        <span style = {this.styles}>  esto es una prueba</span>
        <br />
        <span className = {this.getBadge()} >  esto es una segunda prueba </span>
        <br />
        <div>{this.renderTags()}</div>
        <button onClick = {this.handleZero}  className = "btn btn-secondary btn-sm">zero</button>
        <button onClick = {() => {this.handleIdIncrement({id:1})}}  className = "btn btn-secondary btn-sm m-4">id 1</button>

    </React.Fragment>
    );
  }

  getBadge(){
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "success";
    return classes;
  }

  formatCount(){
    const x = <h1>Zero!!</h1>;
    return this.state.count === 0 ? x : '  other';
  }


}

export default Counter;


//
