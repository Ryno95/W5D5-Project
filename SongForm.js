import React from "react"

class SongForm extends React.Component {   
    
    constructor (props) {
        super(props)
        this.state = {
            title: "",
            artist: "",
            genre: "",
            rating: ""
        }
        this.myChangeHandler = this.myChangeHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
     
    myChangeHandler = (event) => {
        let updatedField = {}
        updatedField[event.target.name] = event.target.value
        console.log(updatedField) //sanity check
        this.setState(
            updatedField
        )
        event.preventDefault();
    }

        handleSubmit = (e) => {
            e.preventDefault();
            const songInfo = {
                    title: this.state.title,
                    artist: this.state.artist,
                    genre: this.state.genre,
                    rating: this.state.rating
            }
            this.props.addSong(songInfo)
            console.log('your song info', songInfo);
          
    }
    render (){
    return (

        // onSubmit={onSubmit}
        <form onSubmit={this.handleSubmit} style={{width: "100%", backgroundColor: "#EFE7BC"}} method="GET" >
                <input 

                    name = "title"
                    type="text" 
                    placeholder="Title"
                    value = {this.state.song} 
                    onChange={this.myChangeHandler}
                    
                />

                <input 

                    type="text" 
                    placeholder="Artist" 
                    name="artist" 
                    value = {this.state.artist}
                    onChange={this.myChangeHandler}
                />

                <input 
                    type="text" 
                    placeholder="Genre" 
                    name="genre" 
                    value = {this.state.genre}
                    onChange={this.myChangeHandler}
                />

                <input 
                    type="text" 
                    placeholder="Rating" 
                    name="rating" 
                    value = {this.state.rating}
                    onChange={this.myChangeHandler}
                />

                <button type="submit" >Add Song</button>
            </form>
        )
    
    }
}

export default SongForm