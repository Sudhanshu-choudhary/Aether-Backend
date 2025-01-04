import mongoose from 'mongoose'

const newsPreferenceSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  categories: [String], 
  languages: [String],  
  sources: [String],  
})

export default mongoose.model('newsPreference', newsPreferenceSchema)