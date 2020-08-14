import React, { Fragment } from 'react';
import Planet from './planet';

async function getPlanets(){
    let response = await fetch('http://localhost:3001/api/planets.json')
    let data = await response.json()
    return data;
}

class Planets extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            planets: [
             
            ]
        }
    }

    componentDidMount(){
        getPlanets().then(data => {
            this.setState(state => ({
                planets: data['planets']
            }))
        })
    }

    render(){
        return (
            <Fragment>
                <h3>Planet List</h3>
                {this.state.planets.map((planet,index) =>
                    
                    <Planet 
                    id = {planet.id}
                    name= {planet.name}
                    description = {planet.description}
                    link_url = {planet.link_url}
                    img_url = {planet.img_url}
                    key ={index}
                    /> 
                 )}
            </Fragment>     
                
        )
    }
}



export default Planets;
