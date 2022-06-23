const fetch = require("node-fetch");

const baseUrl = ""; //FIXME: trouver une api de jobs en json
export default async function fetchGithub() {
  console.log("fetching datas");
  let resultCount = 1,
    onPage = 0;
  const allJobs = [];
  while (resultCount > 0) {
    const res = await fetch(baseUrl);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log("trouvé", resultCount, "emplois");
    onPage++;
  }
}
