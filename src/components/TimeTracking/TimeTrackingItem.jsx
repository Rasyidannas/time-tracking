import './TimeTrackingItem.css';
import kebabIcon from '/img/icon-ellipsis.svg';

function TimeTrackingItem (props) {
    return (
        <div className="time-tracking__wrapper">
            <div className="time-tracking__header">
                <h5 className="time-tracking--title">{props.title}</h5>
                <figure className="time-tracking--icon">
                    <img src={kebabIcon} />
                </figure>
            </div>

            <div className="time-tracking__main">
                <h1 className="time-tracking--present">{props.mainPresent}</h1>
                <span className="time-tracking--previous text-small">last + {props.mainPrevious}</span>
            </div>
        </div>
    )
}

export default TimeTrackingItem;