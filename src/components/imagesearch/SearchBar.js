import React from 'react'

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {value: ''}
    }
    
    
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui icon input" style={{width: "100%"}}>
                        <input style={{borderRadius:"15px"}} 
                            type="text" 
                            placeholder="Search images..." 
                            value={this.state.value}
                            onChange={e => this.setState({value: e.target.value})}
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }
};
 
export default SearchBar;