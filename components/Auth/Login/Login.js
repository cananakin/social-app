import TextField from '@material-ui/core/TextField';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div>
            <form className={styles.login} noValidate autoComplete="off">
                <TextField label="Email" placeholder="Email" type="email" />
                <TextField label="Password" placeholder="Password" type="password" />
            </form>
        </div>
    )
}

export default Login;
