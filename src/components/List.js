import React,{Component} from 'react';

class List extends Component{
  render(){
    //   loop over the fruits fropm parent
    const fruitItems = this.props.fruits.map((fruit, i)=>{
        return <li key={`fruitItem${i}`} >{fruit}</li>
    })
    const removedFruit = this.props.removedFruits.map((removedFruit,i)=>{
        return <li key={`removedFruit${i}`}>{removedFruit}</li>
    })
    return(
        <>
            <ul>
                {fruitItems}
            </ul>

            <p>Fruits that dont match:</p>
            <ul>
                {removedFruit}
            </ul>
        </>
    )
  }
}

export default List;