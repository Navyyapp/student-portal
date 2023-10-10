const initialData = [
   
]

function favouriteReducer(state = initialData, action) {
    // console.log("fav statew",state)
    if (action.type == "FAV_STUDENT") {
        state.push(action.payload)
    }
    return state

}
export default favouriteReducer