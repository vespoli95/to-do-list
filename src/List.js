import React from 'react';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: ["abc"],
            isToggleOn: true
        };
        this.addItem = this.addItem.bind(this);
        //this.handleClick = this.handleClick.bind(this);
        let list_element = <li class="list-member" onclick={this.handleClick}><span class="circle"></span></li>
      
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    addItem(e) {
        this.setState((state) => {
            var newState = this.state.items.push("anthony");
            return {items: newState}
        });
    }

    render() {
        return (
            <div className="List">
                <form>
                    <input type="text" placeholder="enter task" />
                    <button type="button" id="add_task" class="btn btn-success" onClick={this.addItem()}>Add</button>
                </form>
                <ul id="to-do-list">
                    {               
                        this.props.items.map((el, i) => {
                            return <li class="list-member">{el} {i + 1}</li>
                        })
                        
                    }
                </ul>
            </div>
        );
    }
    
    
}

// document.addEventListener('click', e =>
// {
//     console.log(e);
//     if (e.target.className.indexOf('circle') > -1){
//         if (e.target.className.indexOf('complete') === -1)
//             e.target.className += ' complete';
//         else 
//             e.target.className = 'circle';
//     } else if (e.target.id === "add_task"){
//         items.push(list_element);
//     }
// });

export default List;
