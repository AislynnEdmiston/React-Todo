import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      item: '', 
      toDoList: [{
        item: 'Make todo list',
        id: 1,
        complete: false
      },
      {
        item: 'Add new items',
        id: 2,
        complete: false
      }
    ]
    };
  }

  toggleItem = itemId => {
    this.setState({
      toDoList: this.state.toDoList.map(item => {
        if(itemId === item.id){
          return{
            ...item, complete: !item.complete
          }
        }
        return item
      })
    })
  }

  


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
