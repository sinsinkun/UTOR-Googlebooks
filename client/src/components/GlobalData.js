import { createContext, useReducer, useContext } from "react"

const initialData = [];

/*! IMPORTANT all your reducer functionality goes here */
const dataReducer = (state, action) => {
  switch (action.type) {
  case "POST":
    // post new data
    return action.data;
  case "CLEAR":
    // clear data
    return [];
  default:
    throw new Error(`Invalid action type: ${action.type}`)
  }
}

const StoreContext = createContext()

const useStoreContext = function(){ return useContext(StoreContext) }

const StoreProvider = function(props){
  const [state, dispatch] = useReducer( dataReducer, initialData )
  return <StoreContext.Provider value={[state, dispatch]} {...props} />
}

export { StoreProvider, useStoreContext }