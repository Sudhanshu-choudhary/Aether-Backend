import aetherError from "../../../shared/utils/aetherError.js"

const authorizeRole = async ()=> {
  return (req, _, next)=> {
    const userRole = req.user?.role

    if (!userRole || !allowedRoles.includes(userRole)) {
      return next(new aetherError(403, 'Access denied: insufficient permissions.'))
    }
    next()
  }
}

export default authorizeRole