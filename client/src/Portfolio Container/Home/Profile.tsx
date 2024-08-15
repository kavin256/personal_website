
import * as React from "react";

const Profile: React.FC = () => {
    return (
        <div className={'profile-container'}>
            <div className={'profile-parent'}>
                <div className={'profile-details'}>
                    <div className={'colz'}>
                        <a href={'https://www.linkedin.com/in/kavin-ranawella/'}>
                            <i className={'fa fa-linkedin'}></i>
                        </a>
                        <a href={'https://www.facebook.com/kavin.ranawella'}>
                            <i className={'fa fa-facebook-square'}></i>
                        </a>
                        <a href={'https://www.instagram.com/kavinranawella/'}>
                            <i className={'fa fa-instagram'}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;