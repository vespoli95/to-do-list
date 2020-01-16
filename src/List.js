import React from 'react';

let list_element = <span class="circle"></span>
let items = [];

function List(props){
    for (let i = 0; i < 5; i++){
        items.push(list_element);
    }
    return (
        <div className="List">
            <input type="button" id="add_task" value="Add Task" class="btn btn-success"/>
            <ul id="to-do-list">
                {               
                    items.map((el, i) => {
                        return <li class="list-member">{el}{props.name} {i + 1}</li>
                    })
                    
                }
            </ul>
        </div>

    );
    
}

document.addEventListener('click', e =>
{
    console.log(e);
    if (e.target.className.indexOf('circle') > -1){
        if (e.target.className.indexOf('complete') === -1)
            e.target.className += ' complete';
        else 
            e.target.className = 'circle';
    } else if (e.target.id === "add_task"){
        items.push(list_element);
    }
});

export default List;
