import React, { Fragment } from 'react';
import GrayImg from '../../shared/gray-img';


async function getSatellites(id){
    let response = await fetch(`http://localhost:3001/api/${id}.json`)
    let data = await response.json();
    return data;

}

class Planet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            satellites: []
        }
    }

    componentDidMount(){
        getSatellites(this.props.id).then(data => {
            this.setState(state => ({
                satellites: data['satellites']
            }))
        })
    }
    render(){
        return (
        <div>
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
            <p><a href={this.props.link_url}>{this.props.link_url}</a></p>
            <h4>Satélites</h4>
            <ul>
            {this.state.satellites.map((satellite, index) =>
                <li key ={index}>{satellite.name}</li>
            )}
            </ul>
            <GrayImg img_url = {this.props.img_url} gray={this.props.gray} />
        </div>
          )

    }
}

  

export default Planet;