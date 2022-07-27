const { isYesterday, isToday, isTomorrow, format} = require('date-fns') 

const contextTime = (date) => {
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    if (isYesterday(date)) return `Yesterday at ${time}`
    if (isToday(date)) return `Today at ${time}`
    if (isTomorrow(date)) return `Tomorrow at ${time}`
    return format(date, 'MMM do, yyyy')
}

module.exports = contextTime