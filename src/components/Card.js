import React from 'react';

const Card = (props) => {
    const {id, email, name} = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

// now function component Card accepts props as an argument
// hence we can use props.id, props.name, props.email
// but need to use bracket because it is a javascript expression

export default Card;

    