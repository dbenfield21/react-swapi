const baseUrl = "https://swapi.dev/api"

export function getStarships() {
  return fetch(`${baseUrl}/starships`)
  .then(res => res.json())
}


// export const getAllStarships = async () => {
//   return fetch(`${baseUrl}/starships`)
//   .then(res => res.json())
// }

export function getDetails(apiUrl) {
  return fetch(`${apiUrl}`)
  .then(res => res.json()) }