import React from 'react';
import './App.css'
class AddPeople extends React.Component {

    state = {
        name: ''
    }

    handelSubmit = (e) => {
        e.preventDefault(e);
        this.props.addPeople(this.state);

        this.setState({
            name: ''
        })
    }

    handelChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.handelSubmit}>
                <input type="text" value={this.state.name} onChange={this.handelChange} placeholder="Add To Do" required/>
            </form>
        )
    }
    
}


export default AddPeople;