import React from 'react';

{/*1. Описати всю сім'ю сімпсонів (5 персонажів). Характеристики :
          ім‘я приізвище вік стать,
          фотографія (посиланням на зовнішній ресурс,тобто не локальна фотка)
          */
}

const SimpsonsComponent = ({name, surname, age, gender, photo}) => {
    return (
        <div>
            <div> {name} {surname} {age} {gender}</div>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default SimpsonsComponent;