import moment from 'moment';
import 'moment-timezone';
import React, { Component } from 'react';

import './timer.css';

// Credit: https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/ 
export default class Timer extends Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat).tz("America/Los_Angeles");
            const now = moment();
            // const countdown = moment.duration(then.diff(now));
            // const days = parseInt(countdown.asDays());
            // const hours = parseInt(countdown.asHours()) - days * 24;
            // const minutes = parseInt(countdown.asMinutes()) - (days*24*60 + hours*60);
            // const seconds = parseInt(countdown.asSeconds()) 
            // - (days*24*60*60 + hours*60*60 + minutes*60);

            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            // const countdown = moment.duration(moment(then).diff(moment(now)));
            // const days = parseInt(countdown.asDays());
            // const hours = parseInt(countdown.asHours()) - days * 24;
            // const minutes = parseInt(countdown.asMinutes()) - (days*24*60 + hours*60);
            // const seconds = parseInt(countdown.asSeconds()) 
            // - (days*24*60*60 + hours*60*60 + minutes*60);

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        // Mapping the date values to radius values
        const daysRadius = mapNumber(days, 0, 30, 0, 360);
        const hoursRadius = mapNumber(hours, 0, 24, 0, 360);
        const minutesRadius = mapNumber(minutes, 0, 60, 0, 360);
        const secondsRadius = mapNumber(seconds, 0, 60, 0, 360);

        if (!seconds) {
            return null;
        }

        return (
            <div>
                {/* <p className='header'>until the next día de dilla</p> */}
                <h1>countdown to día de dilla</h1>
                <div className='countdown-wrapper'>
                    <div className='countdown-wrapper'>
                    {days && (
                        <div className='countdown-item'>
                            <SVGCircle radius={daysRadius} />
                            {days}
                            <span>days</span>
                        </div>
                    )}
                    {hours && (
                        <div className="countdown-item">
                            <SVGCircle radius={hoursRadius} />
                            {hours}
                            <span>hours</span>
                        </div>
                    )}
                    </div>
                    <div className='countdown-wrapper'>
                    {minutes && (
                        <div className="countdown-item">
                            <SVGCircle radius={minutesRadius} />
                            {minutes}
                            <span>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item">
                            <SVGCircle radius={secondsRadius} />
                            {seconds}
                            <span>seconds</span>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        )
    }
}

const SVGCircle = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#D4CAB8"
            strokeWidth="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}