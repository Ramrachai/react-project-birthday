import React from "react";

const List = (props) => {
    const people = props.people 
    console.log(props);
     
  return (
    <>
      {people.map((person) => {
        const {id, name, image, age} = person;
        return (
          <div className="item" key={id}>
            <img src={image} alt="" />
            <div>
              <h3 className="name">{name}</h3>
              <p className="age">{age}</p>
            </div>
            <button onClick={() => {props.closeBtn(id)}} className="close">
              x
            </button>
          </div>
        );
      })}
    </>
  );
};

export default List;
