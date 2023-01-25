import React,{useState, useEffect} from 'react'

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token)=> {},
  logout: () => {}
})


export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken)

    const useIsloggedIn = !!token; //if token is a string not empty this is will give true otherwise this will give false

 useEffect(() => {
  
 })
    const loginHandler  = (token) => {
      setToken(token);
    
      localStorage.setItem('token',token)
      
    };
    const logoutHandler = () => {
        setToken(null);
      localStorage.removeItem('token'); 
      
    }

    const contextValue = {
      token: token,
      isLoggedIn: useIsloggedIn,
      login: loginHandler,
      logout: logoutHandler
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext