import React from 'react';

function Item(props){
    let items = [];
    for (let i = 0; i < 5; i++){
        items.push(<input type="radio" name="test" value="yes" />);
    }
    return (
        <div className="Item">
            {
                items.map((el, i) => {
                    
                })
                
            }
        </div>
    );
    
}

export default Item;
