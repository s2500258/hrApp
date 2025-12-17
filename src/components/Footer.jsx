import styles from './Footer.module.css';
import Typography from "@mui/material/Typography";


function Footer(props) {
    return (
    <>
      {/* <div className={styles.footer}>
        {props.copyright}
      </div> */}
      <Typography className={styles.footer} variant="h6" component="div" sx={{flexGrow: 1}} >
          {props.copyright}
      </Typography> 
    </>
    )
}

export default Footer;