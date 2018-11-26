import React from 'react'

class SearchBar extends React.Component {
    state = {value: ''}
    
    onFormSubmit = e => {
        e.preventDefault();
        this.props.onVideoSearch(this.state.value);
    }

    render() {
        return (
            <div className="ui container" style={{paddingTop: "1rem"}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui icon input" style={{width: "100%"}}>
                        <input style={{borderRadius:"15px"}} 
                            type="text" 
                            placeholder="Search videos..." 
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