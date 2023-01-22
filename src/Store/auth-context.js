import React,{useState} from 'react'

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token)=> {},
  logout: () => {}
})


export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)

    const useIsloggedIn = !!token; //if token is a string not empty this is will give true otherwise this will give false


    const loginHandler  = (token) => {
      setToken(token);
    };
    const logoutHandler = () => {
        setToken(null);
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