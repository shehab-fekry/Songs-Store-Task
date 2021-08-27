const SELECT_PRICE_AMOUNT  = 'SELECT_PRICE_AMOUNT';

export const select_price_amount = (Songs) => {
    let selectedSongs = [];
    let price = 0;
    let amount = 0;

    Songs.forEach(song => {
        if(song.selected)
        { 
            selectedSongs.push(song);
            price += song.price;
            amount += 1;
        }
    })

    return {
        type: SELECT_PRICE_AMOUNT,
        selectedSongs: selectedSongs,
        price: price,
        amount: amount,
    }
}





















// const selectSongs = (songs, albums, updatedAlbums, updatedSingers) => {
//     let updatedSongs = [];

//     albums.forEach(album => {
//         Object.values(songs).forEach(song =>{
//             if(album.selected && album.id === parseInt(song.album_id))
//             updatedSongs.push({
//                 ...song,
//                 selected: true,
//             })
//         })
//     })
//     return {
//         type: actionTypes.SELECT_SONGS,
//         selectedSongs: updatedSongs,
//         selectedAlbums: updatedAlbums,
//         singers: updatedSingers,
//     }
// }

// export const selectAlbums = (singer, singers, albums, songs, selAlbums, selSongs) => {
//     return dispatch => {
//         let updatedSingers = [...singers];
//         let updatedAlbums  = [...selAlbums];
//         let updatedSongs   = [...selSongs];

//         if(!singer.selected) // onClick when singer NOT-SELECTED
//         {
//             Object.values(albums).forEach(album => {
//                 if( parseInt(album.singer_id) === singer.id)
//                 updatedAlbums.push({
//                     ...album,
//                     selected: true,
//                 });
//             })
//             updatedSingers.forEach(element => singer.id === element.id ? element.selected = true : null)
//             dispatch(selectSongs(songs, updatedAlbums, updatedSingers));
//         } 
//         else // onClick when singer SELECTED
//         {
//             updatedAlbums = updatedAlbums.filter(album => parseInt(album.singer_id) !== singer.id);
//             updatedSongs = updatedSongs.filter(song => parseInt(song.singer_id) !== singer.id);         

//             updatedSingers.forEach(element => singer.id === element.id ? element.selected = false : null);
//             return {
//                 type: actionTypes.REMOVE_ALBUMS_SONGS,
//                 selectedAlbums: updatedAlbums,
//                 selectedSongs: updatedSongs,
//                 singers: updatedSingers,
//             }
//         }
//     }
// }

// export const filterAlbums = (album, songs, selSongs, selAlbums) => {
//     let updatedSongs = [...selSongs];
//     let updatedAlbums = [...selAlbums];

//     if(!album.selected)
//     {
//         songs.forEach(song =>{
//             if(album.id === parseInt(song.album_id))
//             updatedSongs.push({
//                 ...song,
//                 selected: true,
//             })
//         });
//         updatedAlbums.forEach(element => album.id === element.id ? element.selected = true : null);
//         return {
//             type: actionTypes.FILTER_ALBUMS_SELECT,
//             selectedAlbums: updatedAlbums,
//             selectedSongs: updatedSongs,
//         }
//     }
//     else
//     {
//         updatedSongs = updatedSongs.filter(song => parseInt(song.album_id) !== album.id);
//         updatedAlbums.forEach(element => album.id === element.id ? element.selected = false : null);
//         return {
//             type: actionTypes.FILTER_ALBUMS_UNSELECT,
//             selectedAlbums: updatedAlbums,
//             selectedSongs: updatedSongs,
//         }
//     }
// }

// export const filterSongs = (song, selSongs) => {
//     let updatedSongs = [...selSongs];
//     updatedSongs.map(element => {
//         if (song.id === element.id) element.selected = !element.selected            
//         return element
//     })
//     return {
//         type: actionTypes.FILTER_SONGS,
//         selectedSongs: updatedSongs,
//     }
//}