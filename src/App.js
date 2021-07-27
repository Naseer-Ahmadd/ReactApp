// import logo from './logo.svg';
import './App.css';
// import Radium, {StyleRoot} from 'radium';
import React, { Component } from 'react';
import Person from './Person/Person.js'

class App extends Component {
    state ={
        persons : [
            {id:'asdf1',name:"max" , age:23},
            {id:'asdf2',name:"sam" , age:24},
            {id:'asdf3',name:"tin" , age:25}
        ],
        otherPersons: 'some othr persons',
        showPersons: false
    }

    // switchNamehandler = (newName) =>{
    //     // console.log("clicked");
    //     this.setState({
    //         persons : [
    //             {name: newName , age:23},
    //             {name:"sam" , age:24},
    //             {name:"tin" , age:20}
    //         ]}
    //     );
    // }

    nameChangedHandler=(event, id)=>{
        const personIndex = this.state.persons.findIndex(p=>{
            return p.id === id;
        });
        
        const person = {
             ...this.state.persons[personIndex]
        };

        person.name= event.target.value;
        const persons = [...this.state.persons];

        persons[personIndex]=person;
        this.setState({persons : persons}
        );
    }

    togglePersonsHandler=()=>{
const doesShow=this.state.showPersons;
this.setState({showPersons:!doesShow})
    }

    deletePersonHandler = (personIndex) => {
        // const persons= this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons:persons})
    }
    render(){
        const style={
            backgroundColor:'green',
            color:'white',
            font:'inherit',
            border:'1px solid blue',
            padding:'8px',
            cursor: 'pointer'
            
        }

        let persons=null;
        if(this.state.showPersons){
            persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return <Person 
                     click={()=>this.deletePersonHandler(index)}
                     name={person.name}
                     age={person.age}
                     key={person.id}
                     changed={(event)=>this.nameChangedHandler(event, person.id)}/>
                })}
            </div>
          );
          style.backgroundColor = 'red';
          
        }
        const classes = [];
        if(this.state.persons.length <= 2){
            classes.push('red');
        }
        if(this.state.persons.length <= 1){
            classes.push('bold');
        }
    return ( 
    
            <div className = "App" > 
                <h1>welcome user</h1>
                <p className = {classes.join(' ')}>This is Dashboard</p>
                <button style={style}
                onClick={this.togglePersonsHandler}>Toggle Peraons</button>
                {persons}
            </div>
       
);
    }
// return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello world'));

}

export default App;