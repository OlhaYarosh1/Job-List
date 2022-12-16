import React from 'react';
import { Link } from 'react-router-dom';
import classes from './JobComponent.module.css';

const JobComponent = ({ title, name, picture, daysAgo, address, jobId, mySetData }) => {

    const handleOnClick = () => {
        mySetData(jobId)
    }

    return (
        <div className={classes.component}>
            <div className={classes.picture}>
                <img src={picture} alt='' className={classes.imgPicture}/>
            </div>
            <div className={classes.saveBox}>
                <img src='icons/Save.png' alt='' className={classes.save}/>
            </div>
            <div className={classes.rating}>
                <img src='icons/Rating.png' alt=''/>
            </div>
            <div className={classes.postedMobile}>Posted {daysAgo} days ago</div>
            <div className={classes.title}>
                <Link to='/DetailedPage' className={classes.titleHref} onClick={handleOnClick}>{title}</Link>
            </div>
            <div className={classes.name}>
                Department name • {name}
            </div>
            <img 
                src='icons/Location.png' 
                alt='' 
                className={classes.imgLocation}
            />
            <div className={classes.address}>
                {address}
            </div>
            <div className={classes.starsBox}>
                <img src='icons/Star.png' alt='' className={classes.star}/>
                <img src='icons/Star.png' alt='' className={classes.star}/>
                <img src='icons/Star.png' alt='' className={classes.star}/>
                <img src='icons/Star.png' alt='' className={classes.star}/>
                <img src='icons/Star.png' alt='' className={classes.star}/>
            </div>
            <div className={classes.postedBox}>
                <div className={classes.posted}>Posted {daysAgo} days ago</div>
            </div>
        </div>
    )
}

export default JobComponent;
