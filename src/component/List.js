import React from "react";
import ListItem from "./ListItem";



class List extends React.Component{
    state = {
        dosen: {
            name: "Hero",
            prodi : "Informatika"    
        },
        mahasiswa: {
            name: "Agus",
            prodi : "Informatika"    
        },
        books : ["book1","book2","book3"]


      }
    
    render () {
        return(
            <div>
                <h2> list component </h2>
                <h3> Nama Dosen : {this.state.dosen.name}</h3>
                <h3> Pekerjaan  : {this.state.dosen.prodi}</h3>
                <ListItem/>
                <h3> Nama Mhs: {this.state.mahasiswa.name}</h3>
                <h3> Pekerjaan  : {this.state.mahasiswa.prodi}</h3>
                <h3>
                    { this.state.books.map(item => 
                        <div>
                            <h4>{item}</h4>
                        </div>
                    )
                    }
                </h3>
                
            </div>
        )
    }
}

export default List;
