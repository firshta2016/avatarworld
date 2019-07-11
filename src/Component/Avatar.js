import React, { Component }from 'react';
import './Avatar.css';
import AvatarList from './Avatarlist';
import 'tachyons';

class Avatar extends Component {
    constructor(){
        super();
        this.state = {
            name : "Welcome to Avatar World"
        }
    }
    namechange(){
        this.setState({
            name : "The Best Team there is..."
        })
    }
    
    render() {
        const avatarlistarray = [
            {
                id:1,
                name:"Rachel Green",
                work:"Frontend Web Developer"
             },
             {
                id:2,
                name:"Chandler Bing",
                work:"Backend Web Developer"
             },
             {
                id:3,
                name:"Monica Geller",
                work:"Data Developer"
             },
             {
                id:4,
                name:"Ross Geller",
                work:"Project Manager"
             }
        ]
    
        const arrayavatarcard = avatarlistarray.map( (avatarcard, i) => {
            return <AvatarList key={i} id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
                
        })
        return (
            <div className="mainpage">
                <h1> {this.state.name} </h1>
                    { arrayavatarcard }
                <button onClick={ () => this.namechange() }>Click me </button>
            </div>
           )

    }
}


export default Avatar;