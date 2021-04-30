import React,{useState} from 'react'
import data from './data'
import List from './List'
import "./birthday.css"
const Index = () => {
    const [people, setPeople] = useState(data)

    const closeHandle = (id) =>{
        console.log('id is:  ', id);
        let newPeople = people.filter((person)=> person.id !== id)
        setPeople(newPeople)
    }
  
    return (
        <main>
            <h2>{people.length} Birthays today</h2>
            <List people = {people} closeBtn = {closeHandle} />
            <button className="btn" onClick={()=>{
                setPeople([])
            }}>Clear All</button>
            <button className="btn" onClick={()=>{
                setPeople(data)
            }}>Reset</button>
        </main>
    )
}

export default Index
