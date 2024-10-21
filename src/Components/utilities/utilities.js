const getLocalStorageBookmark =()=>{    
    const storeCartString = localStorage.getItem('bookmark');
    if(storeCartString){
        return JSON.parse(storeCartString);
    }
    return [];
}

const saveBookmarkToLocalStorage=(bookmark)=>{
    const cartStringified =JSON.stringify(bookmark);
    localStorage.setItem('bookmark',cartStringified);
}

const addToLocalStorage=(id)=>{
    const bookmark =getLocalStorageBookmark();
    // console.log(bookmark)
    const existingBookmark =bookmark.find((item)=>item===id);
    // console.log(existingBookmark)
    if(!existingBookmark){
        bookmark.push(id);
    }
    // Save to local Storage
    saveBookmarkToLocalStorage(bookmark);

}
const removeFromLocalStorage = (id)=>{
    const cart = getLocalStorageBookmark();
    // removing every id
    const remaining =cart.filter(idx => idx !== id);
    saveBookmarkToLocalStorage(remaining)
}

export {addToLocalStorage, getLocalStorageBookmark, removeFromLocalStorage};