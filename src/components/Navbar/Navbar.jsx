import React from 'react'
import { Button, Grid } from '@material-ui/core'

import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <Grid container justify="center" className={styles.container}>
            <Button className={styles.btn} variant="contained" color="secondary">Home</Button>
            <Button className={styles.btn} variant="contained" color="secondary">Dashboard</Button>
            <Button className={styles.btn} variant="contained" color="secondary">Save Data</Button>
        </Grid>
    )
}

export default Navbar
