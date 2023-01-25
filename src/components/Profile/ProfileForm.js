import classes from './ProfileForm.module.css';
import {useRef, useContext} from 'react'
import AuthContext from '../../Store/auth-context';
import { useHistory } from 'react-router-dom'
const ProfileForm = () => {
  const history = useHistory()
  const changePasswordInputRef = useRef()
     const authCtx = useContext(AuthContext)
  const changePasswordHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = changePasswordInputRef.current.value
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAiGl0NfvThOsetxvG95he9IF1xc8JSE8M',{
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type':'application/json'
      }
    }).then((res) => {
       history.replace('/')
    })
  }
  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' minLength="7" id='new-password' ref={changePasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
