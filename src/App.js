
// using the hooks by useState
// import React,{useState} from'react';
import React,{Component} from'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component{
//      const App = props =>
//      {
//       const [personsState,setPersonsState] =   useState({
//             persons: [
//                 {
//                     name:"Tanya",age:"20"},
//                 {
//                     name:"prerna",age:"21"
//                 },
//                 {
//                     name:"raj",age:"22"
//                 },
//             ],
//             // otherState:'nothing todo'
            
//         });
//         // making a variable array for otherstate so that it merges all the time
//         const [otherState,setOtherState]=useState("nothing todo");
//    console.log(personsState,otherState);

//      const switchNmaeHandler =() =>
// {
//     // alert("button clicked");
//   setPersonsState ({
//         persons: [
//             {
//                 name:"prakash",age:"20"
//             },
//             {
//                 name:"jha",age:"21"
//             },
//             {
//                 name:"raj",age:"22"
//             },
//         ],
//             //  but adding this they will not be added dynamically
//         // otherState:setPersonsState.otherState
//     });
// };
//             return(
//                 <div className="App">
//                     <h1>hi ,i am tanya</h1>
//                     <p>thia is really working</p>
//                     <button onClick ={switchNmaeHandler}>click me</button>
//                  <Person name={personsState.persons[0].name} age ={personsState.persons[0].age}/>
//                  <Person name={personsState.persons[1].name} age ={personsState.persons[1].age}> 
//                         my hobbies is racing</Person>
//                 <Person name={personsState.persons[2].name} age ={personsState.persons[2].age}/> 
//                 </div>
//             );
//         }
    

// using class states
class App extends Component{
    state ={
        persons: [
            // we are passing an id for each array element
                            {
                              id:"hfjjdj11",name:"Tanya",age:"20"},
                            {
                              id:"jdjfjjgj67", name:"prerna",age:"21"
                            },
                            {
                              id:"jdkkdkkkdkd78",  name:"raj",age:"22"
                            },
                        ],
                        otherState:'nothing todo',
                       showPersons:false
    }
//     switchNameHandler  =(newName) =>
//       {
//     // alert("button clicked");
//   this.setState ({
//         persons: [
//             {
//                 name:newName,age:"20"
//             },
//             {
//                 name:"jha",age:"21"
//             },
//             {
//                 name:"raj",age:"22"
//             },
//         ]
//             //  but adding this they will not be added dynamically
//         // otherState:setPersonsState.otherState
//     });
// };

//passing a id so that it is easy  and p is a simply variable to find the index of the array
   nameChangedHandler = (event,id ) =>{
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    // now making a new array using array spread
    const person = {
    ...this.state.persons[personIndex] 
    };

    // const person =Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex] = person;

    this.setState ({
        // persons: [ 
        //     {
        //       name:"prakash",age:"20"
        //     },
        //     {
        //      name:event.target.value,age:"21"
        //     },
        //     {
        //       name:"raj",age:"22"
        //     },
        // ]
    persons:persons 
    });
   }
deletePersonHandler = (personIndex) =>
{
// const persons = this.state.persons.slice();
// another method of doing array sis
const persons = [...this.state.persons];
persons.splice(personIndex , 1);
this.setState({persons:persons})

}
togglePersonsHandler=()=>
{
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow});
}
render ()
{
    // adding inline css
    const style=
    {
        backgroundColor:"blue",
        color:'white',
        font:"inher",
        padding:'2px',
        width:"90px",
        height:"40px",
        boxShadow:'#eee'

    };
    // this is vanilla js
    let persons =null;
    if(this.state.showPersons){
      persons =
      (
           <div>
               {this.state.persons.map((person ,index) => {
                   return <Person
                   click = {() => this.deletePersonHandler(index)}
                   name={person.name}
                   age={person.age}
                   key={person.id} 
                   changed={(event) => this.nameChangedHandler(event,person.id)}/>
               })}
           </div>
      );
    //   chamge the background-color to red after shgowing the div
    style.backgroundColor="red";
    }

    // return(
    //                     <div className="App">
    //                         <h1>hi ,i am tanya</h1>
    //                         <p>thia is really working</p>
    //                         <button style ={style} onClick ={this.togglePersonsHandler.bind(this,'Prakash')}>click me</button>
                           
    //                 {/* this is known as wrapping the data into one  */}
    //                    { 
    //                    this.state.showPersons === true ?
    //                    <div>
    //                      <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}/>
    //                      <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}  
    //                         //  click={this.switchNameHandler.bind(this,'pandey')} 
    //                          changed={this.nameChangedHandler}>  my hobbies is racing</Person>
    //                     <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}/> 
    //                     </div> : null
    //                     }
    //                     </div>
    //                 );
                    return (
                        <div className="App">
                          <h1>Hi, I'm a React App</h1>
                          <p>This is really working!</p>
                          <button
                            style={style}
                            onClick={this.togglePersonsHandler}>Toggle Persons</button>
                          {persons}
                        </div>
                      );
                }

       }



export default App;
