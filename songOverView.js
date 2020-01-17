import React from "react"
import SongForm from "./SongForm.js"
import SongList from "./SongList.js"



class SongOverview extends React.Component {
      
    constructor() {
      super()
      this.state = 
      {
        songs: [{
        }]
      }
      
    }

   addSong = song => {
    this.setState({
      songs: [...this.state.songs, song]
    });
  };

    
        
    
  
    render() {
      return (
        <div>
        <SongForm addSong={this.addSong}/>
              <table style={{width:"100%", backgroundColor: "salmon"}}>
                  <thead style ={{color: "#FFFFF2"}}>
                        <tr className="song-header">  
                          <th className="song-row__item">Song</th>
                          <th className="song-row__item">Artist</th>
                          <th className="song-row__item">Genre</th>
                          <th className="song-row__item">Rating</th>
                        </tr>
                  </thead>
                  
                  <SongList songs={this.state.songs}/>
                  
              </table>
              
        </div>
      );
    }
  }
  
  
  export default SongOverview;