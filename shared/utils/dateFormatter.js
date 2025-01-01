import aetherError from './aetherError.js'

const rightDateTime = input=>{
  const date = new Date(input)
  if(isNaN(date)){
    throw new aetherError(301, 'Invalid date')
  }

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')  // Month is 0-indexed
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  const _time = `${hours}:${minutes}:${seconds}`
  const _date = `${getMonth(month)} ${day},${year}`

  return {_time, _date}
}

export default rightDateTime

function getMonth(month) {
  switch (month) {
    case '1':
      return 'Jan';
    case '2':
      return 'Feb';
    case '3':
      return 'Mar';
    case '4':
      return 'Apr';
    case '5':
      return 'May';
    case '6':
      return 'June';
    case '7':
      return 'July';
    case '8':
      return 'Aug';
    case '9':
      return 'Sept';
    case '10':
      return 'Oct';
    case '11':
      return 'Nov';
    case '12':
      return 'Dec';
    default:
      return 'Invalid month number';  // For values outside 1-12
  }
}