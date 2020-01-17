import React from "react"

class SongList extends React.Component {
    constructor() {
        super()
        this.state = {
            songs: [{ title: "", artist: "", genre: "", rating: "" }]
        }
    }

    render(){
        return (
            <tbody style = {{color: "charcoal", width: "100%"}}>
              {this.props.songs.map(song => (
                  
                    <tr key={song.id}>
                        <th className="song-row__item">{song.title}</th>
                        <th className="song-row__item">{song.artist}</th>
                        <th className="song-row__item">{song.genre}</th>
                        <th className="song-row__item">{song.rating}</th>
                    </tr>
                 
                  
              ))}
            </tbody>

    )
}
}

export default SongList

//     }
//     render() {
//       return (
//         <table>
//           {this.props.songItems.map(song => (
//             <tr key={song.id}>
//               <th>{song.title}</th>
//               <th>{song.artist}</th>
//               <th>{song.genre}</th>
//               <th>{song.rating}</th>
//             </tr>
//           ))}
//         </table>
//       );
//     }
  
// }