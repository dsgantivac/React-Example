import React, { PureComponent } from 'react';

class Items extends PureComponent {
  state = {
    value: this.props.value
  }

/*
  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    })
  }
*/



  handleZero = ()=>{
    this.setState({
      value: 0
    })
  }


  render() {
    //console.log('props',this.props);

    //va en el return con otro increment
    //<button onClick = {this.handleIncrement} className = "btn btn-secondary btn-sm" > increment</button>

    return (
      <div className = "m-3">
        <button onClick = {() => this.props.onIncrement(this.props.item)} className = "btn btn-secondary btn-sm" > increment</button>
        <span className = {this.getBadge()} style= {{fontSize: 22}}> {this.props.item.value} </span>
        <button onClick = {this.handleZero} className = "btn btn-primary" > zero</button>
        <button onClick = {() => this.props.onDelete(this.props.item.id)} className = "btn btn-danger ml-2" > delete</button>
        {this.props.children}
      </div>

    );
  }

  getBadge(){
    let classes = "badge m-2 badge-";
    classes += this.props.item.value === 0 ? "warning" : "success";
    return classes;
  }
}

export default Items;
