class aetherResponse{
  constructor(statusCode, data, metadata=null, message="Success"){
    this.statusCode = statusCode
    this.data = data
    this.message = message
    this.success = statusCode < 400
    if (metadata) this.metadata = metadata
  }
  static success(statusCode = 200, data, metadata = null, message = "Success") {
    return new aetherResponse(statusCode, data, metadata, message)
  }

  static error(statusCode = 500, message = "Error") {
    return new aetherResponse(statusCode, message)
  }
}

export default aetherResponse