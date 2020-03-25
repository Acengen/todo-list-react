import React from 'react';
import './App.css';
import People from './People';
import AddPeople from './AddPeople';

class App extends React.Component {

  state = {
    people: [
      {name: "clean dishes", id:1},
      {name: "Wash your hands", id:2},
      {name: "Talk to people", id:3}
    ]
  }

  AddMore = (ppl) => {
    ppl.id = Math.random();
    let man = [...this.state.people,ppl];
    this.setState({
      people: man
    })
  }

  deleteItems = (id) => {
      let ppl = this.state.people.filter(men => {
        return men.id !== id;
      });

      this.setState({
        people: ppl
      })
  }

  clearFields = () => {
    let people = [];

    this.setState({
      people: people
    })
  }

  render() {
    return (
      <div className="container">
        <div className="form-cont">
          <h2 className="text-center my-3 text-muted">To Do List</h2>
          <People ppls={this.state.people}  delete={this.deleteItems} clear={this.clearFields}/>
          <AddPeople addPeople={this.AddMore}/>
        </div>
      </div>
    )
  }
}

export default App;
