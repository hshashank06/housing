import React, { useEffect, useMemo, useState } from "react";
import { Testfunction } from "../components/testCard.tsx";
import { TestNavBar } from "../components/testNavBar.tsx";
import {
  backGroundImg,
  backGroundImgText,
  backGroundImgContent,
} from "../utils/styles.ts";
import { getAllHousingData } from "../utils/houseData.ts";
import { HousingData } from "../utils/houseData.ts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import { navBarBrand } from "../utils/styles.ts";

export interface NavBarProps {
  selectedHomeStays: Place[],
  updateSelectedStays: (stay: string) => void,
  stays: string[],
  superHost: () => void,
  setPropertyType: (propertyType: React.MouseEvent<HTMLButtonElement,MouseEvent>) => void
}

export enum PropertType {
  ALL_TYPES,
  ONE_BEDROOM,
  TWO_BEDROOM
}

export interface Place {
  place: string,
  selected: boolean
}

export default function TestPage() {
  const [listOfStays, setListOfStays] = useState([
    "All Stays",
    "Norway",
    "Finland",
    "Sweden",
    "Switzerland",
  ])
  const [housingData, setHousingData] = useState<HousingData[]>([]);
  const [selectedStays, setSelectedStays] = useState<Place[]>([]);
  const [superHost,setSuperHost] = useState<boolean>(false);
  const [propertyType,setPropertyType] = useState<PropertType>(PropertType.ALL_TYPES)
  const [loading,setLoading] = useState<boolean>(false);

  const updateSuperHost = () => {
    setSuperHost(current => !current)
  }

  useMemo(() => {
    const initalStaySelection = listOfStays.map(stay => {
      const place: Place = stay === "All Stays" ? { place: stay, selected: true } : { place: stay, selected: false }
      return place
    })
    setSelectedStays(initalStaySelection)
  }, [listOfStays])


  useEffect(() => {
    const data = getAllHousingData();
    setLoading(true);
    setHousingData(data);
    setLoading(false)
  }, []);

  const updatePropertyType = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    if(event.currentTarget.value === "1 Bedroom"){
      setPropertyType(PropertType.ONE_BEDROOM)
    }
    else if(event.currentTarget.value === "2 Bedroom"){
      console.log("Im here")
      setPropertyType(PropertType.TWO_BEDROOM)
    }
    else{
      setPropertyType(PropertType.ALL_TYPES)
    }
  }



  const updateStaySelected = (stay: string) => {
    setSelectedStays(currentStays => {
      const updatedStays = [...currentStays];
      updatedStays.forEach(eachStay => {
        if (eachStay.place === stay) {
          eachStay.selected = !eachStay.selected
        }
      })
      return updatedStays;
    })
  };

  const navBarProps: NavBarProps = {
    selectedHomeStays: selectedStays,
    updateSelectedStays: updateStaySelected,
    superHost:updateSuperHost,
    stays: listOfStays,
    setPropertyType : updatePropertyType
  };

  return (
    <>
      {loading &&  <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div> 
      }
      <div className="bg-image " style={backGroundImg}>
        <h1 style={backGroundImgText}> Peace, Nature, and Dream </h1>
        <p style={backGroundImgContent}>
          {" "}
          Choose from the best collection of home stays{" "}
        </p>
      </div>

      <div>
        <div className="container" >
          <TestNavBar {...navBarProps} />
        </div>
        <div
          className="container-fluid"
          style={{ maxWidth: "80%", margin: "0 auto" }}>
          <h1 className="mb-3" style={{ ...navBarBrand, zIndex: 1, position: "relative" }}>
            {" "}
            Over 200 Stays
          </h1>
          <Testfunction homeStayDetails={housingData} selectedPlaces={selectedStays} superHost={superHost} propertyType={propertyType} />
        </div>
      </div>
    </>
  );
}
