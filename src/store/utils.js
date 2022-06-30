export async function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Response is not ok: status = ${response.status}`);
    })
    .catch((error) => {
      console.log(`Cannot fetch ${url}: error = ${error}`);
      return undefined;
    });
}
