import * as React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import styles from "./profilemenupopup.module.scss"
import UserPlaceHolderImage from "../../assets/images/profileuser.jpg"
import LogoutIcon from "../../assets/icons/logout.svg"
import ProfileIcon from "../../assets/icons/profileiconblack.svg"
import { useHistory } from 'react-router-dom';
import { PATH } from '../../constants/paths';

type Props = {
    right?: boolean;
    setShowProfilePopUp: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileMenuPopUp: React.FC<Props> = ({ right, setShowProfilePopUp }) => {
    const history = useHistory();

    return (<div className={right ? styles.profileMenuPopUpContainerRight : styles.profileMenuPopUpContainer}>
        <UserAvatar image={UserPlaceHolderImage} width="4.8rem" height="4.8rem" />
        <div onClick={() => {
            setShowProfilePopUp(false)
            history.push(PATH.EditProfile)
        }} className={styles.popUpOption}>
            <img src={ProfileIcon} alt='logout_icon' />
            <p>Account Setting</p>
        </div>
        <div onClick={() => {
            localStorage.removeItem('user')
            history.push('/')
            setShowProfilePopUp(false)
        }} className={styles.popUpOption}>
            <img src={LogoutIcon} alt='logout_icon' />
            <p>Log out</p>
        </div>
    </div>);
}

export default ProfileMenuPopUp;