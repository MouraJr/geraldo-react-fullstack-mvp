import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const Cards = ({ data: { categories, teleport_city_score }, city }) => {

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={8} className={cx(styles.card, styles.borderBottom)}>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {city} City Scores
                        </Typography>
                        <Typography variant="h5">Overall Score</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={teleport_city_score} duration={2.5} separator="," />
                        </Typography>
                        {categories ? categories.map((eachItem) =>
                            <div className={styles.scores}>
                                <Typography variant="h5">
                                    {eachItem.name} Score
                                </Typography>
                                <Typography variant="h5">
                                    <CountUp start={0} end={eachItem.score_out_of_10} duration={2.5} separator="," />
                                </Typography>
                            </div>
                        ) : null}
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
