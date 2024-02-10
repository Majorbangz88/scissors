import logo from "../../images/Logo.png";
import FilledButton from "../../../buttons/filledButton";
import GhostButton from "../../../buttons/ghostButton";
import styles from "../../components/navBar/index.module.css"

const NavBar = () => {
    return(
        <div className={styles.mainContainer}>
            <div>
                <img src={logo} alt="page logo"/>
            </div>

            <div className={styles.midSection}>
                <p>My URLs</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Analytics</p>
                <p>FAQs</p>
            </div>

            <div className={styles.btn}>
                <GhostButton text="Log in" color='none'/>
                <FilledButton text="Try for free" color="blue"/>
            </div>
        </div>
    )    
}

export default NavBar;