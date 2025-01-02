import User from '../models/user.models.js'
import aetherError from '../../../shared/utils/aetherError.js'
import aetherResponse from '../../../shared/utils/aetherResponse.js'

const registerUser = async (req, res)=> {
  try {
    const {fullname, email, password} = req.body;
    if([fullname, email, password].some((field)=> field?.trim() == "")){
      throw new aetherError(300, `${field} is required`)
    }
  
    const existedUser = await User.findOne({email})
    if(existedUser) throw new aetherError(404, `email already exist`)
    
    let imageLocalPath
    if(req.files && Array.isArray(req.files.image) && req.files.image.length>0){
      imageLocalPath = req.files.image[0].path
    }
  
    const image =await uploadOnCloudinary(imageLocalPath)
  
    const user = await User.create({
      fullname,
      email,
      password,
      image: image?.url || ""
    })
  
    const createdUser = await User.findById(user._id).select("-password -refreshToken")
    if(!createdUser) throw new aetherError(404, `User could not be created at last moment`)
  
    return res.status(201).json(new aetherResponse.success(201, createdUser, `User registration Successfully`))
  } catch (err) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}

export default registerUser