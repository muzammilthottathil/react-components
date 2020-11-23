import styles from './styles/hamburger.module.scss';

export default function Hamburger({ hamburger, setHamburger }) {
    return (
        <div
            className={
                hamburger
                    ? `${styles.hamburger} ${styles.open}`
                    : styles.hamburger
            }
            onClick={() => setHamburger((ham) => !ham)}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
