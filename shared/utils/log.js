import winston from 'winston';
import rightDateTime from './dateFormatter.js'

const log = winston.createLogger({
  level: 'debug',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          const { _time, _date } = rightDateTime(timestamp)
          return `${_date} ${_time} [${level}]: ${message}`
        })
      ),
    }),
    new winston.transports.File({
      filename: 'logs/app.log',
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          const { _time, _date } = rightDateTime(timestamp)
          return `${_date} ${_time} [${level}]: ${message}`
        })
      ),
    }),
  ],
})

export default log