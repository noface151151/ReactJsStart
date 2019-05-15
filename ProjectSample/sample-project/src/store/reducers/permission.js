const initState = {
    permission:null
   };
 
   const reducer = (state = initState, action) => {
     switch (action.type) {
       case 'PERMISSION_GET_SUCCESS':
         return {
           ...state,
           permission: action.data.permision
         };
       default:
         return state;
     }
   };
   
   export default reducer;