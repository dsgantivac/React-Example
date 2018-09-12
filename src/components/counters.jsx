import React, { PureComponent } from 'react';
import Items from "./items.jsx"


class Counters extends PureComponent {


  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className = "btn btn-info ml-3" >Reset</button>
        {this.props.items.map(item =>(
          //en ve de todo eso se puede utilizar para tener acceso a todos los elementos del objeto
          //<Items key={item.id} onDelete={this.handleDelete} itms:{items}   />
          // en vez de this.props.value se utilizara this.props.items.value
          <Items
            key={item.id}
            value= {item.value}
            onDelete={this.props.onDelete}
            onIncrement = {this.props.onIncrement}
            id={item.id}
            item = {item}
            >
            <h4> CUALQUIER MONDA #{item.id} </h4>
          </Items>
        ))}
      </div>
    );
  }

}

export default Counters ;
