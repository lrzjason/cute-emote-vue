import defaultSettings from '@/settings'

console.log('get page title defaultSettings', defaultSettings)
const title = defaultSettings.title || 'Vue Admin Template'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
