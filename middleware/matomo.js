export default function({ route, store }) {
  route.meta.matomo = {
    setDomains: ['setDomains', ['*.newsgradient.org', '*.bih.newsgradient.org']],
    enableCrossDomainLinking: ['enableCrossDomainLinking'],
    enableLinkTracking: ['enableLinkTracking']
  }
}
