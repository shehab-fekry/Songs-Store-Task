import React, {Component} from 'react';
import Card from '../Card/Card';
import './SelectArea.css';

import {connect} from 'react-redux';
import * as actions from '../../Store/actions/index';

class SelectArea extends Component {
    state = {
        singers:[],
        selectedAlbums:[],
        selectedSongs:[],
        formElements:{
            name:{
                elementConfig:{
                    type:'text',
                    placeholder:'Name',
                },
                value:'',
            },

            email:{
                elementConfig:{
                    type:'email',
                    placeholder:'E-Mail',
                },
                value:'',
            },

            phone:{
                elementConfig:{
                    type:'text',
                    placeholder:'Phone',
                },
                value:'',
            },
        },
    }

    componentDidMount()
    {
        let selectedSingers = [];
        Object.values(this.props.data.singers).forEach(singer =>{
            selectedSingers.push({
                ...singer,
                selected: false,
            })
        })
        this.setState({singers: selectedSingers});
    }

    selectAlbums = (singer) => {
        let updatedSingers = [...this.state.singers];
        let updatedAlbums  = [...this.state.selectedAlbums];
        let updatedSongs   = [...this.state.selectedSongs];

        if(!singer.selected) // onClick when singer NOT-SELECTED
        {
            Object.values(this.props.data.albums).forEach(album => {
                if( parseInt(album.singer_id) === singer.id)
                updatedAlbums.push({
                    ...album,
                    selected: true,
                });
            })
            this.selectSongs(updatedAlbums);

            updatedSingers.forEach(element => singer.id === element.id ? element.selected = true : null)
            this.setState({selectedAlbums: updatedAlbums, singers: updatedSingers})
        } 
        else // onClick when singer SELECTED
        {
            updatedAlbums = updatedAlbums.filter(album => parseInt(album.singer_id) !== singer.id);
            updatedSongs = updatedSongs.filter(song => parseInt(song.singer_id) !== singer.id);         

            this.props.setPriceAmount(updatedSongs);
            updatedSingers.forEach(element => singer.id === element.id ? element.selected = false : null);
            this.setState({selectedAlbums: updatedAlbums, singers: updatedSingers, selectedSongs: updatedSongs})
        }
    }

    selectSongs = (albums) => {
        let updatedSongs = [];
        let songs = Object.values(this.props.data.songs);

        albums.forEach(album => {
            songs.forEach(song =>{
                if(album.selected && album.id === parseInt(song.album_id))
                updatedSongs.push({
                    ...song,
                    selected: true,
                })
            })
        })
        this.props.setPriceAmount(updatedSongs);
        this.setState({selectedSongs: updatedSongs})
    }


    filterAlbums = (album) => {
        let songs = Object.values(this.props.data.songs);
        let updatedSongs = [...this.state.selectedSongs];
        let updatedAlbums = [...this.state.selectedAlbums];

        if(!album.selected)
        {
            songs.forEach(song =>{
                if(album.id === parseInt(song.album_id))
                updatedSongs.push({
                    ...song,
                    selected: true,
                })
            });
            this.props.setPriceAmount(updatedSongs);
            updatedAlbums.forEach(element => album.id === element.id ? element.selected = true : null);
            this.setState({selectedSongs: updatedSongs, selectedAlbums: updatedAlbums})
        }
        else
        {
            updatedSongs = updatedSongs.filter(song => parseInt(song.album_id) !== album.id);
            updatedAlbums.forEach(element => album.id === element.id ? element.selected = false : null);
            this.props.setPriceAmount(updatedSongs);
            this.setState({selectedSongs: updatedSongs, selectedAlbums: updatedAlbums})
        }
    }
    

    filterSongs = (song) => {
        let updatedSongs = [...this.state.selectedSongs];
        
        updatedSongs = updatedSongs.map(element => {
            if (song.id === element.id) element.selected = !element.selected            
            return element
        })
        this.props.setPriceAmount(updatedSongs);
        this.setState({selectedSongs: updatedSongs})
    }

    onChangeHandler = (event, key) => {
        // deep cloning
        let toUpdateForm = {...this.state.formElements};
        let toUpdateElement = {...toUpdateForm[key]};

        toUpdateElement.value = event.target.value;
        toUpdateForm[key] = toUpdateElement;
        this.props.setFormInfo(toUpdateForm, key);
    }


    render()
    {
        let formElementsArray = [];
        for(let key in this.state.formElements)
        formElementsArray.push({
                id: key,
                ...this.state.formElements[key],
        })


        let selectArea;
        switch(this.props.step)
        {
            case 4:
                selectArea = (
                <div>
                    <center>
                        <form id='my-form'>
                            {
                                formElementsArray.map(element =>{
                                    return <input 
                                    key={element.id}
                                    name={element.id}
                                    type={element.elementConfig.type}
                                    placeholder={element.elementConfig.placeholder}
                                    onChange={(event) => this.onChangeHandler(event, element.id)}/>
                                })
                            }
                        </form>
                    </center>
                </div>
                )
                break;
            case 3:
                selectArea = this.state.selectedSongs.map( song => <Card 
                    clicked={() => this.filterSongs(song)}
                    selected={song.selected}
                    name={song.name} 
                    key={song.id}/>)  
                break;
            case 2:
                selectArea = this.state.selectedAlbums.map( album => <Card 
                    clicked={() => this.filterAlbums(album)}
                    selected={album.selected} 
                    name={album.name} 
                    key={album.id}/>)
                break;
            default:
                selectArea = this.state.singers.map( singer => <Card 
                    clicked={() => this.selectAlbums(singer)}
                    selected={singer.selected}
                    name={singer.name} 
                    key={singer.id}/>)                     
        }

        return (
            <div className='SelectArea'>
                {selectArea}
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return{
        setPriceAmount: (Songs) => dispatch(actions.select_price_amount(Songs)),
        setFormInfo: (updatedForm, key) => dispatch(actions.setFormElements(updatedForm, key)),
    }
}

export default connect(null, mapDispatchToProps)(SelectArea);