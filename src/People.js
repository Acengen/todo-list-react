import React from 'react';
import './People.css';

const People = (props) => {
  const button = props.ppls.length > 3 ? (alert('Task Added')) : null;
  const people =  props.ppls.length ? (
    props.ppls.map(ppl => {
        return (
            <div className="ppl" key={ppl.id}>
                <div>{ppl.name}</div>
                <button onClick={()=>props.delete(ppl.id)}>delete</button>
            </div>
        )
    })
    ) : (
        <p className="text-muted">No more lists</p>
    )
    
    return(
        <div className="people">
            {people}
            {button}
            <button onClick={()=>props.clear()}>ClearAll</button>
        </div>
    )
}

export default People;