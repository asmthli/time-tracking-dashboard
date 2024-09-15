import '../styles/HeaderCard.css'

function HeaderCard( {setTimeframe, currentTimeframe} ) {

    const buttonTimeframes = ['Daily', 'Weekly', 'Monthly']
    const buttons = []

    for (let timeframe of buttonTimeframes) {
        let className = 'header-card__button'

        if (timeframe === currentTimeframe) {
            className += ' header-card__button--active'
        }

        buttons.push(
            <button className={className} onClick={buttonHandler}>
                {timeframe}
            </button>
        )
    }

    function buttonHandler(e) {
        setTimeframe(e.target.innerText)
    }

    return (
        <div className='header-card'>
            <div className='header-card__id-section'>
                <img className='header-card__img' src='./image-jeremy.png'></img>
                <h1 className='header-card__header'><span>Report for</span> Jeremy Robson</h1>
            </div>

            <div className='header-card__buttons'>
                {buttons}
            </div>
        </div>
    )
}

export default HeaderCard