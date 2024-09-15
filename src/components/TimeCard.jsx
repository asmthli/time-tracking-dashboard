import '../styles/TimeCard.css'

function TimeCard( props ) {

    let cardClassModifier = ''

    switch(props.title) {
        case 'Work':
            cardClassModifier = 'time-card--work'
            break
        case 'Play':
            cardClassModifier = 'time-card--play'
            break
        case 'Study':
            cardClassModifier = 'time-card--study'
            break
        case 'Exercise':
            cardClassModifier = 'time-card--exercise'
            break
        case 'Social':
            cardClassModifier = 'time-card--social'
            break
        case 'Self Care':
            cardClassModifier = 'time-card--self-care'
            break
    }

    return (
        <div 
            className={`time-card ${cardClassModifier}`}>

            <div className='time-card__content'>
                <h1
                    className='time-card__category'>
                    {props.title}
                </h1>

                <button className='time-card__ellipsis'>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 
                             0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" 
                          fill="#BBC0FF" fill-rule="evenodd"/></svg>
                </button>

                <p
                    className='time-card__current'>
                    {props.timeframes[props.timeframe].current}hrs
                </p>
                
                <p
                    className='time-card__previous'>
                    Last Week - {props.timeframes[props.timeframe].previous}hrs
                </p>
            </div>
        </div>
    )
}

export default TimeCard