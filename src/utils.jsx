export function getBusinessURL(businessInfo) {
  const url = 'http://cloudtemplates.cloudfrontend.net/app/live-preview/?clone_id=1576931&site=';
  const siteUrl = JSON.stringify({ business: businessInfo });
  const encodedSiteUrle = encodeURIComponent(siteUrl);
  return url + encodedSiteUrle;
}
