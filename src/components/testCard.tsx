import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import { HousingData } from "../utils/houseData";
import "../css/card.css"
import { Place, PropertType } from "../pages/mainPage.tsx";


interface TestFunctionProps {
  homeStayDetails: HousingData[];
  selectedPlaces: Place[],
  superHost: boolean,
  propertyType: PropertType
}
export const Testfunction: React.FC<TestFunctionProps> = ({
  homeStayDetails, selectedPlaces, superHost, propertyType
}) => {
  const [homeStayCards, setHomeStayCards] = useState<HousingData[]>([]);
  
  useMemo(() => {
    const allStaysIsSelected = selectedPlaces.some(stay => stay.place === 'All Stays' && stay.selected);
    let homeStays : HousingData[] ;
    if (allStaysIsSelected) {
      const otherStayArePresent = selectedPlaces.filter(stay => stay.place !== 'All Stays' && stay.selected);
      if (otherStayArePresent.length > 0) {
        homeStays = homeStayDetails.filter(homeStay => otherStayArePresent.some(stay => stay.place === homeStay.location))
      }
      else {
        homeStays = homeStayDetails
      }
    }
    else {
      const otherPlacesSelected = selectedPlaces.filter(place => place.selected);
      homeStays = homeStayDetails.filter(homeStay => otherPlacesSelected.some(otherPlace => otherPlace.place === homeStay.location))
    }
    const superHostFiltered = superHost ? homeStays.filter(stays => stays.superhost) : homeStays;
    const filteredPropertyType = () => {
      if(propertyType === PropertType.ONE_BEDROOM){
        setHomeStayCards(superHostFiltered.filter(property => property.capacity.bedroom === 1))
      } 
      else if(propertyType === PropertType.TWO_BEDROOM){
        setHomeStayCards(superHostFiltered.filter(property => property.capacity.bedroom === 2))
      }
      else{
        setHomeStayCards(superHostFiltered);
      }
      console.log("Property type is " + propertyType)
    }
    filteredPropertyType();

  }, [selectedPlaces, homeStayDetails,superHost,propertyType])

  return (

    <div className="container-fluid">
      <div className="row">
        {homeStayCards.map((homeStay) => {
          return (
            <div className="col-md-4 mb-4" key={homeStay.id}>
              <div className={`card h-100`}>
                {homeStay.superhost &&
                  <span className="badge rounded-pill text-bg-light" style={{ position: "absolute", marginTop: "6px", marginLeft: "5px" }}>
                    <i className="bi bi-stars" style={{fontSize:'15px'}}> SuperHost </i>
                  </span>
                }
                <img
                  src={`${homeStay.image}`}
                  className="card-img-top"
                  alt="...."
                />
                <div className="card-body">
                  <h5 className="card-title"> {`${homeStay.title}`}</h5>
                  <p className="card-text"> {`${homeStay.description}`} </p>
                  <i className="bi bi-house-add-fill me-2">
                    {` ${homeStay.capacity.bedroom}`} Bedrooms{" "}
                  </i>
                  <i className="bi bi-person-fill">
                    {` ${homeStay.capacity.people}`} People{" "}
                  </i>
                  <hr />
                  <div className='container' style={{ display: "inline-block" }}>
                    <h4 className="ms" style={{ display: "inline-block" }}>{`$${homeStay.price}`}</h4><p style={{ display: "inline-block" }}>/night</p>
                    <h4 className="me-2" style={{ display: "inline-block", float: "right", marginTop: "4px" }}> {homeStay.rating} </h4>
                    <i className="bi bi-star-fill bi-xxl" style={{ float: "right", fontSize: "25px", marginRight: "8px" }}></i>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
