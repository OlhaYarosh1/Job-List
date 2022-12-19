import React from 'react';
import Button from '../../../components/Button';
import InfoBlock from '../../../components/InfoBlock';
import classes from './DetailedJobComponent.module.css';

const DetailedJobComponent = ({ picture, address, name, title, phone, email, postedAt, description, responsibilities, salary, benefits, employmentType, compensation1, compensation2, compensation3 }) => {
    return (
        <div className={classes.detailedPage}>
            <div className={classes.title}>Job Details</div>
            <hr className={classes.line}/>
            <div className={classes.saveToList}>
                <img src='icons/Save.png' alt='' className={classes.saveIcon}/>
                <div className={classes.saveTitle}>Save to my list</div>
            </div>
            <div className={classes.share}>
                <img src='icons/Share.png' alt='' className={classes.shareIcon}/>
                <div className={classes.shareTitle}>Share</div>
            </div>
            <Button
                className={classes.applyNow}
                title='Apply now'
            />
            <div className={classes.titleItem}>
                {title}
            </div>
            <div className={classes.salary}>€ {salary}</div>
            <div className={classes.salaryText}>Brutto, per year</div>
            <div className={classes.postedAt}>
                Posted {postedAt} days ago
            </div>
            <div className={classes.description}>
                {description}
            </div>
            <div className={classes.responsibilitiesTitle}>Responsibilities</div>
            <div className={classes.responsibilities}>
                {responsibilities}
            </div>
            <div className={classes.compensation}>Compensation & Benefits:</div>
            <img className={classes.square1} src='icons/Square.png' alt=''/>
            <div className={classes.compensation1}>{compensation1}.</div>
            <img className={classes.square2} src='icons/Square.png' alt=''/>
            <div className={classes.compensation2}>{compensation2}.</div>
            <img className={classes.square3} src='icons/Square.png' alt=''/>
            <div className={classes.compensation3}>{compensation3}.</div>
            <Button
                className={classes.applyNowBottom}
                title='Apply now'
            />
            {/* <div className={classes.additionalInfo}>Additional info</div>
            <hr className={classes.lineAdditional}/>
            <div className={classes.employmentTypeTitle}>Employment type</div>
            <InfoBlock className={classes.employmentBox} title={employmentType}/>  
            <div className={classes.benefitsTitle}>Benefits</div>
            <InfoBlock className={classes.benefitsBox} title={benefits}/>  
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
            <div className={classes.cardLocation}>
                <img className={classes.cardImg} src='icons/LocationCircle.png' alt=''/>
                <div className={classes.locationTitle}>Department name.</div>
                <div className={classes.locationName}>{name}.</div>
                <img className={classes.locationImg} src='icons/Location.png' alt=''/>
                <div className={classes.locationAddress}>{address}</div>
                <div className={classes.locationPhone}>{phone},</div>
                <div className={classes.locationEmail}>{email}</div>
            </div> */}
        </div>
    )
}

export default DetailedJobComponent;
