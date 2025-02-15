import sampleData from "./sample.json";

export interface HousingData {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  superhost: boolean;
  capacity: Capacity;
  location: string;
  image: string;
}

interface Capacity {
  people: number;
  bedroom: number;
}

export const getAllHousingData = (): HousingData[] => {
  //let housingData: HousingData | null = null;

  //   const makeHousingDataFetchCall = async (): Promise<Array<HousingData>> => {
  //     const response = await fetch(
  //       "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         mode: "cors",
  //       }
  //     );
  //     const data = await response.json();
  //     console.log("Dta is " + JSON.stringify(data));
  //     housingData = data;
  //     return data;
  //   };
  //   makeHousingDataFetchCall();

  //   if (!housingData) {
  //     throw new Error(
  //       "Some issue occured while fetching home stays. Please try again after sometime"
  //     );
  //   }

  return sampleData;
};
