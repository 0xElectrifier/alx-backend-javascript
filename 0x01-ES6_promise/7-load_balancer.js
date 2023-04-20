export default function loadBalancer(chinaDownload, USDownload) {
  const locations = [chinaDownload, USDownload];
  return Promise
    .race(locations)
    .then((result) => result);
}
