import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";

import "./InfoBox.css";

function InfoBox({title, cases, casesType, isRed, active, total, ...props}) {
    return (
        <Card className={`infoBox ${active && 'infoBox--selected'}`} onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox__tile" color="textSecondary">{title}</Typography>

                <h2 className={`infoBox__cases ${casesType === "recovered" ? "infoBox__cases--green" : casesType === "deaths" ? "infoBox__cases--violet" : null}`}>{cases}</h2>

                <Typography className="infoBox__total" color="textSecondary">Total: {total}</Typography>
            </CardContent>            
        </Card>
    )
}

export default InfoBox
