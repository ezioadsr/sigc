import maleAvatar from './placeholder/man_avatar.jpg'
import femaleAvatar from './placeholder/woman_avatar.png'

import logo from './logo.svg'

const avatar = (gender) => {
  if (gender === 'female') {
    return femaleAvatar
  }
  return maleAvatar
}

export { avatar, logo }
