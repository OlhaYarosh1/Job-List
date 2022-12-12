import React from 'react';
import Button from '../../../components/Button';
import classes from './DetailedJobComponent.module.css';

const DetailedJobComponent = ({ picture, title }) => {
    return (
        <div className={classes.detailedPage}>
            <div className={classes.commonPart}> 
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
                <div className={classes.compensation}>Compensation & Benefits:</div>
                <Button
                    className={classes.applyNowBottom}
                    title='Apply now'
                />
                <div className={classes.additionalInfo}>Additional info</div>
                <hr className={classes.lineAdditional}/>
                <div className={classes.employmentTypeTitle}>Employment type</div>
                <div className={classes.employmentTypeBox}>
                    <div className={classes.employmentTitle}>Full time</div>
                </div>
                <div className={classes.benefitsTitle}>Benefits</div>
                <div className={classes.benefitsBox}>
                    <div className={classes.benefitsBoxTitle}>Flexible shedule</div> 
                </div>
                <div className={classes.attachedImages}>Attached images</div>
                <hr className={classes.lineImages}/>
                <div className='imagesGrid'>
                    <img src={picture[0]} alt='' className={classes.imagesAttached}/>
                    <img src={picture[1]} alt='' className={classes.imagesAttached2}/>
                    <img src={picture[2]} alt='' className={classes.imagesAttached3}/>
                </div>
                <a href='/'><Button 
                    className={classes.return}
                    title='Return to job board'                  
                />
                <img src='icons/ButtonArrow.png' alt='' className={classes.arrowIcon}/>
                </a>
            </div>
            <div className={classes.individualPart}>
                {title}
            </div>
        </div>
    )
}

export default DetailedJobComponent;
