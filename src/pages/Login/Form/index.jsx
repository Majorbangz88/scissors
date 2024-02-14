import { FcGoogle } from "react-icons/fc";
import FilledButton from '../../../buttons/filledButton';
import { FaApple } from "react-icons/fa";
import styles from './index.module.css'


 const Form = () => {
  return (
    <div className={styles.loginMainDiv}>
        <div className={styles.loginInnerDiv}>
            <p>Log in with</p>
            <div>
                <FcGoogle />
                <FilledButton  text='Google' borderRadius='4px' />
                <FaApple />
                <FilledButton  text='Apple' borderRadius='4px' />
            </div>
            <div className={styles.hrLine}>
              <hr />
              <p>or</p>
              <hr />
            </div>
        </div>
    </div>
  )
}

export default Form
