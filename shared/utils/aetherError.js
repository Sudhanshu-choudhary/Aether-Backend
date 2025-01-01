class aetherError extends Error{
  constructor(statusCode, message){
    super(message)
    this.statusCode = statusCode || 500
    this.name = this.constructor.name
  }
}

export default aetherError