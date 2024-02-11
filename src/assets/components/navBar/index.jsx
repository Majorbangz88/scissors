import logo from "../../images/Logo.png";
import FilledButton from "../../../buttons/filledButton";
import GhostButton from "../../../buttons/ghostButton";
import styles from "../../components/navBar/index.module.css"
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
    return(
        <div className={styles.mainContainer}>
            <div>
                <img src={logo} alt="page logo"/>
            </div>

            <div className={styles.midSection}>
                <p className={styles.urlTextColor}>My URLs</p>
                <div className={styles.featureBtn}>
                    <p>Features</p>
                    <IoIosArrowDown />
                </div>
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