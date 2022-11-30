const API_KEY = "246b1211-168b-465b-a8ab-5a62fc64ca18";

export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/matches?apikey=${API_KEY}&offset=0`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the score of the cuurent match

export const getMatchDetail = async (id) => {
  const url=`https://api.cricapi.com/v1/match_info?apikey=${API_KEY}&id=${id}`;
  // const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }
   
   let response = await fetch(url, { 
     method: "GET",
     headers: headersList
   });
   
   let data = await response.json();
  //  console.log(data.data);
   return data.data
};

export const searchMatch=(input)=>{
  const url = `https://api.cricapi.com/v1/series?apikey=246b1211-168b-465b-a8ab-5a62fc64ca18&offset=0&search=${input}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
} 
// export const getBBB=(id)=>{
//   const url = `https://api.cricapi.com/v1/match_scorecard?apikey=246b1211-168b-465b-a8ab-5a62fc64ca18&id=${id}`;
//   return fetch(url)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// } 