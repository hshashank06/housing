import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import { navStyle, navBarContent, navBarBrand, navBarSwitchAndDropDownStyles, switchSize, navBarSwitchAndDropDownItemFont } from "../utils/styles.ts";
import "../css/card.css"
import "../css/navbar.css"
import { NavBarProps } from "../pages/mainPage.tsx";
import { Place } from "../pages/mainPage.tsx";


export const TestNavBar: React.FC<NavBarProps> = ({ selectedHomeStays, updateSelectedStays,superHost, stays, setPropertyType }) => {

    console.log("Home stays attr are " + JSON.stringify(selectedHomeStays))

    const checkPlaceSelected = (selectedHomeStays: Place[], stay: string): boolean => {
        const selectedHomeStaysArray = Array.from(selectedHomeStays)
        return selectedHomeStaysArray.filter(eachStay => eachStay.place === stay)[0]?.selected;
    }


    return (

        <>
            <nav className="navbar navbar-expand-xxl" style={navStyle}>
                <div className="container-fluid " style={{ maxWidth: '1900px' }}>
                    <div className="navbar-brand " style={navBarBrand}>Home Stays</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ zIndex: 3, position: "relative" }}>
                        <ul className="nav nav-pills navbar-nav me-4 mb--2 mb-lg-0" style={{ ...navBarContent }} >
                            {stays.map((stay: string, index: number) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <button className={`nav-link ${checkPlaceSelected(selectedHomeStays, stay) ? 'active' : ''}`}  aria-current='page' style={{ zIndex: 1500 }} onClick={() => updateSelectedStays(stay)}>{stay}</button>

                                    </li>
                                )
                            })}
                        </ul>

                        <div className="me-1 ms-3 " style={navBarSwitchAndDropDownStyles}>
                            <div className="form-check form-switch me-4" style={navBarSwitchAndDropDownStyles}>
                                <input className="form-check-input me-2" type="checkbox" id="flexSwitchCheckDefault" style={switchSize} onClick={() => superHost()}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "20px" }}>SuperHost</label>
                            </div>

                            <div className="dropdown" style={{ color: "#800000" }}>
                                <button className={`btn btn-secondary btn-lg dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "#800000", color: "#FFFFFF", fontWeight: "bold", borderColor: "#FFFFFF" }} >
                                    Property type
                                </button>
                                <ul className="dropdown-menu" style={{ backgroundColor: "#800000", borderColor: "#FFFFFF" }}>
                                    <li><button className="dropdown-item"  style={navBarSwitchAndDropDownItemFont} value="1 Bedroom" onClick={setPropertyType}>1 Bedroom</button></li>
                                    <li><button className="dropdown-item"  style={navBarSwitchAndDropDownItemFont} value="2 Bedroom" onClick={setPropertyType}>2 Bedroom</button></li>
                                    <li><button className="dropdown-item"  style={navBarSwitchAndDropDownItemFont} value="Any" onClick={setPropertyType}>Any</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>

            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Home Stays</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="nav nav-pills navbar-nav me-auto mb-2 mb-lg-0" style={navBarContent}>
                        {stays.map((stay: string, index: number) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <button className={`nav-link ${checkPlaceSelected(selectedHomeStays, stay) ? 'active' : ''}`}  aria-current='page' onClick={() => updateSelectedStays(stay)}>{stay}</button>
                                </li>
                            );
                        })}

                        <li>
                        <div className="dropdown" style={{ color: "#800000" }}>
                            <div className="form-check form-switch me" style={{...navBarSwitchAndDropDownStyles,marginBottom:"10px", marginLeft:"-60px"}}>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >SuperHost</label>
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" style={{...switchSize,display:"inline-block"}} onClick={() => superHost()}/>
                            </div>

                                <button className={`btn btn-secondary btn-lg dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "#800000", color: "#FFFFFF", fontWeight: "bold", borderColor: "#FFFFFF" }} >
                                    Property type
                                </button>
                                <ul className="dropdown-menu" style={{ backgroundColor: "#800000", borderColor: "#FFFFFF" }}>
                                    <li><button className="dropdown-item"  style={navBarSwitchAndDropDownItemFont} value="1 Bedroom" onClick={setPropertyType}>1 Bedroom</button></li>
                                    <li><button className="dropdown-item"  style={navBarSwitchAndDropDownItemFont} value="2 Bedroom" onClick={setPropertyType}>2 Bedroom</button></li>
                                    <li><button className="dropdown-item"  style={navBarSwitchAndDropDownItemFont} value="Any" onClick={setPropertyType}>Any</button></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}