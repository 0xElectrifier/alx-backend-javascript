export default function loadBalancer(chinaDownload, USDownload) {
  const locations = [chinaDownload, USDownload];
  return Promise
    .any(locations)
    .then((result) => result);
}
