import { execSync } from 'child_process'

export function getGitInfo() {
  let username = ''
  let useremail = ''

  try {
    const buffer = execSync(
      'git config --get user.name && git config --get user.email'
    )

    if (buffer && buffer.toString()) {
      const text = buffer.toString().replace(/\n/gi, ',')
      const textArray = text.split(',')

      username = textArray[0] || ''
      useremail = textArray[1] || ''
    }
  } catch (e) {}

  return { username, useremail }
}
