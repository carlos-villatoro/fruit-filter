import React,{Component} from 'react';

class Input extends Component{
  render(){
    return(
        <>

            <label htmlFor='fruitInput'>Filter the fruit</label>
            <input
                type='text'
                id='fruitInput'
                value={this.props.value}
                onChange={this.props.handleFilterChange}
                />
        </>
    )
  }
}

export default Input;