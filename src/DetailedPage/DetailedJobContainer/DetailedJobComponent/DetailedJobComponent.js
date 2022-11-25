import React from 'react';
import Button from '../../../components/Button';
import classes from './DetailedJobComponent.module.css';

const DetailedJobComponent = () => {
    return (
        <div>
            <div className={classes.commonPart}> 
                <div className={classes.upperPart}>
                    <div className={classes.title}>Job Details</div>
                    <div className={classes.saveToList}>
                        <img src='icons/Save.png' alt='' className={classes.saveIcon}/>
                        <div className={classes.saveTitle}>Save to my list</div>
                    </div>
                    <div className={classes.share}>
                        <img src='icons/Share.png' alt='' className={classes.shareIcon}/>
                        <div className={classes.shareTitle}>Share</div>
                    </div>
                    <hr className={classes.line}/>
                    <Button
                        className={classes.applyNow}
                        title='Apply now'
                    />
                </div>
            </div>
            <div className={classes.individualPart}>

            </div>
        </div>
    )
}

export default DetailedJobComponent;
