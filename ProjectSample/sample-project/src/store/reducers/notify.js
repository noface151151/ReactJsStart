const initState = {
    notify_list:null,
    totalNotify:null
   };
 
   const reducer = (state = initState, action) => {
     switch (action.type) {
       case 'NOTITY_GETLIST_SUCCESS':
         return {
           ...state,
           notify_list: action.data,
           totalNotify:action.data.length
         };
       default:
         return state;
     }
   };
   
   export default reducer;