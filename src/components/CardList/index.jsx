import React from 'react';
import {Card} from '../';

import './CardList.scss'

const CardList = ({items}) => {
    return ( 
        <div className="card-list">
            {items ? items.map(user => <Card key={user.id} {...user}/>) : 'Loading...'}
        </div>
     );
}
 
export default CardList;