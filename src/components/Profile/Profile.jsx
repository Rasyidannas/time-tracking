import { useState } from 'react';
import './Profile.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import jeremy from '/img/image-jeremy.png';

function Profile (props) {
    const [isActive, setIsActive] = useState("Daily");

    const targetLinkHandler = function (element) {
        const textLink = element.target.textContent;
        element.preventDefault();

        props.onKeyData(textLink);

        // change for active class
        // setIsActive(!isActive);
        setIsActive(textLink)
        console.log(isActive);
    }

    return (
        <div className={props.className}>
            <Card className="card--profile">
                <img src={jeremy} />
                <span className="small-text">Report for</span>
                <h2>Jeremy Robson</h2>
            </Card>

            <Card className="card--menu">
                <ul>
                    <li>
                        <Button className={isActive == "Daily" ? "active" : "" } onClick={targetLinkHandler}>Daily</Button>
                    </li>
                    <li>
                        <Button className={isActive == "Weekly" ? "active" : "" } onClick={targetLinkHandler}>Weekly</Button>
                    </li>
                    <li>
                        <Button className={isActive == "Monthly" ? "active" : "" } onClick={targetLinkHandler}>Monthly</Button>
                    </li>
                </ul>
            </Card>
        </div>
    )
}

export default Profile;