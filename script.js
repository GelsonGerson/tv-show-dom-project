//You can edit ALL of the code here
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

// window.onload = setup;

function getAllShows() {
  return [
    {
      "id": 1632,
      "url": "http://www.tvmaze.com/shows/1632/horatio-hornblower",
      "name": "Horatio Hornblower",
      "type": "Scripted",
      "language": "English",
      "genres": [
        "Drama",
        "Action",
        "Adventure"
      ],
    },
    {
    id: 82,
    url: "http://www.tvmaze.com/shows/82/game-of-thrones",
    name: "Game of Thrones",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Adventure", "Fantasy"],
    status: "Ended",
    runtime: 60,
    premiered: "2011-04-17",
    officialSite: "http://www.hbo.com/game-of-thrones",
    schedule: { time: "21:00", days: ["Sunday"] },
    rating: { average: 9.1 },
    weight: 97,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
    }
  ]
  };
