import React from 'react';

const Avatarlist =(props) => {
return (
    <div className="avatarstyle ma4 bg-red ba grow dib pa3 tc shadow-4">
        <img src={`http://joeschmoe.io/api/v1/${props.name}`} alt="" />
        <h1>{ props.name } </h1>
        <p> { props.work } </p>
    </div>
    )
}

export default Avatarlist;
