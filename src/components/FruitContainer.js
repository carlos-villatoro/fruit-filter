import React,{Component} from 'react';
import Input from './Input';
import List from './List';

const starterFruit = [
    'mango',
    'apple',
    'pinapple',
    'watermelon',
    'melon',
    'banana',
    'apricot',
    'date'
]

class FruitContainer extends Component{
    // state will live here in the parent componetn
    state = {
        // data to display list
        fruitsToDisplay: starterFruit,
        // data input to use to filter fruit
        filterValue: '',
        filteredOut: []
    }
    // event handlers
    handleFilterChange = e =>{ 
        // what the user typed in
        const filterValue = e.target.value
        // loop over the fruits to display and filter and include if they match what user typed in
        const filteredFruitList  = this.state.fruitsToDisplay.filter(fruit =>{
            // return a bool - if true the fruit will stay
            // if false fruit go bye bye
            return fruit.toLowerCase().includes(filterValue.toLowerCase())
        })
        
        const removedFruitList = starterFruit.filter(fruit =>{
            return !fruit.toLowerCase().includes(filterValue.toLowerCase())
        })
        
      
        if (filterValue < 1){
            this.setState({
                filterValue,
                fruitsToDisplay:starterFruit,
                filteredOut:removedFruitList,
            })
        } else {
            this.setState({
                filterValue,
                fruitsToDisplay:filteredFruitList,
                filteredOut:removedFruitList
            })
        }
        
    }


  render(){
    return(
        <>
            <h1>Fruit Filter</h1>
            {/* pass event handlers to input */}
            <Input 
                handleFilterChange={this.handleFilterChange}
                value={this.state.filterValue}
            />
            {/* pass the data from state to the list */}
            <List 
            fruits={this.state.fruitsToDisplay}
            removedFruits={this.state.filteredOut}
            />
        </>
    )
  }
}

export default FruitContainer;