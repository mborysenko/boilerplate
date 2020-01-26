export default (text: string = '', color: string = '') => (logMessage: string) =>
    console.log(
        `%c${text}`,
        `font-weight:bold;color:${color}`,
        logMessage
    )
