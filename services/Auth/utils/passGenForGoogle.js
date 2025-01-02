export const passGenForGoogle = (profile) => {
  const lastSixDigitsID = profile.id.substring(profile.id.length - 6)
  const lastTwoDigitName = profile._json.name.substring(profile._json.name.length - 2)
  const password = lastTwoDigitName + lastSixDigitsID
  return password
}