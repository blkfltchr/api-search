import React from 'react';
import {NavLink} from 'react-router-dom';
class SearchBar extends React.Component {

    render() {
        // if (this.props.searchType === 'all') {
            return (

            <div className="ui"  style={{marginBottom:"1rem"}}>
                    <div style={{backgroundColor: "#F6F9FC", borderBottom: "solid 1px lightgrey"}}>
                    
                <div className="ui container" style={{paddingTop: "1rem"}}>
                    <form className="ui form">
                        <div className="ui icon input" style={{width: "100%"}}>
                            <input style={{borderRadius:"15px"}} 
                                type="text" 
                                placeholder="Search..." 
                            />
                            <i className="search icon"></i>
                        </div>
                    </form>
                </div>
                        <div className="ui nav-wrapper">
                            <NavLink exact onClick={e => this.setState({searchType: 'all'})} activeStyle={{ textDecoration: 'underline' }} to="/" className="nav-element">Home</NavLink>    
                            <NavLink onClick={e => this.setState({searchType: 'image'})} activeStyle={{ textDecoration: 'underline' }} to="/images" className="nav-element">Images</NavLink>
                            <NavLink onClick={e => this.setState({searchType: 'video'})} activeStyle={{ textDecoration: 'underline' }} to="/videos" className="nav-element">Videos</NavLink>
                        </div>
                    </div>
                </div>

            );
        // } else if (this.props.searchType === 'image') {
        //     return(
        //         <ImageSearchBar />
        //     )
        // } else if (this.props.searchType === 'video') {
        //     return (
        //         <VideoSearchBar />
        //     )
        // }
    }
}

export default SearchBar