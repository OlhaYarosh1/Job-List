import React from 'react';
import classes from './JobComponent.module.css';
import jobsJson from '../jobs.json'

const JobComponent = ({ title, address, picture, daysAgo, index }) => {

    const jobs = jobsJson;

    return (
        <div className={classes.component}>
            <div className={classes.picture}>
                <img src={picture} alt='' className={classes.imgPicture}/>
            </div>
            <div className={classes.title}>
                <a href={'/DetailedPage/' + `${jobs[0].id}`} className={classes.titleHref}>{title}</a>
            </div>
            <div className={classes.address}>
                {address}
            </div>
            <img 
                src='icons/Location.png' 
                alt='' 
                className={classes.imgLocation}/>
            <div className={classes.starsBox}>
                <img src='icons/Star.png' alt='' className={classes.star}/>
                <img src='icons/Star.png' alt='' className={classes.star}/>
                <img src='icons/Star.png' alt='' className={classes.star}/>
                <img src='icons/Star.png' alt='' className={classes.star}/>
                <img src='icons/Star.png' alt='' className={classes.star}/>
            </div>
            <div className={classes.saveBox}>
                <img src='icons/Save.png' alt='' className={classes.save}/>
            </div>
            <div className={classes.postedBox}>
                <div className={classes.posted}>Posted {daysAgo} days ago</div>
            </div>
        </div>
    )
}

export default JobComponent;
