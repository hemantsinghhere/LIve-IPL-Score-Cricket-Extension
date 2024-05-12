window
  .fetch(
    "https://api.cricapi.com/v1/cricScore?apikey=04b27c94-b0ea-4009-be90-7c4db97b64f5"
  )
  .then((result) => result.json())
  .then((result) => {
    const data = result.data;

    if (!data) return [];

    const relevantData = data.filter((match) => match.ms == "live");

    const seriesname = relevantData[0].series;
    const matchtype = relevantData[0].matchType;
    const team1 = relevantData[0].t1;
    const team2 = relevantData[0].t2;
    const matchstatues = relevantData[0].status;
    const team1score = relevantData[0].t1s;
    const team2score = relevantData[0].t2s;

    const upperdiv = document.getElementById("upper");
    const matchType = document.getElementById("matchtype");
    const team1name = document.getElementById("team1");
    const team2name = document.getElementById("team2");
    const Team1score = document.getElementById("team1score");
    const Team2score = document.getElementById("team2score");

    upperdiv.innerHTML = seriesname;
    matchType.innerHTML = matchtype;
    team1name.innerHTML = team1;
    team2name.innerHTML = team2;
    Team1score.innerHTML = team1score;
    Team2score.innerHTML = team2score;
    console.log({ relevantData });
  })
  .catch((err) => {
    console.log("An error occured. Please check your code", err);
  });
