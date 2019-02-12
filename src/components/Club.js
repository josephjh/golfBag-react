import React from 'react';


function Club(props){
    
        return (
        <form onSubmit={(e) => props.updater(e, props.club.id)}>
            <input placeholder="Type" name="type" defaultValue={props.club.type}/>
            <input placeholder= "Brand" name="brand" defaultValue={props.club.brand}/>
            <input placeholder="Model" name="model" defaultValue={props.club.model}/>
            <button type="submit">Update</button>
            <button type="button" onClick={(e) => props.eraser( props.club.id)}>Delete</button>
        </form>
        )
    }

export default Club