import React from "react";
import NewTrailerForm from "./NewTrailerForm";
import EditTrailerForm from "./EditTrailerForm";
import TrailerList from "./TrailerList";
import TrailerDetail from "./TrailerDetail";

class TrailerControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTrailerList: [{
        name: "6x12 Enclosed Trailer",
        price: 5000,
        quantity: 100,
        description: "A 6ft by 12ft enclosed trailer",
        imgURL: "https://dealer-cdn.com/rW3v2m/C6T6Wm/2022_Spartan_Cargo_Spartan_SP6X12SA_Enclosed_Cargo_Trailer_eqG0Po.jpg",
        id: "1"
      },
      {
        name: "7x14 Enclosed Trailer",
        price: 8000,
        quantity: 100,
        description: "A 7ft by 14ft enclosed trailer",
        imgURL: "https://allamericantrailer.com/wp-content/uploads/2019/05/IMG_0136.jpg",
        id: "2" 
      },  
      {
        name: "6x12 Dump Trailer",
        price: 9500,
        quantity: 100,
        description: "A 6ft by 12ft dump trailer",
        imgURL: "https://dealer-cdn.com/rW3v2m/hrMXvU/2022_Hawke_Trailers_6X12TA_10K_Low_Profile_Dump_Trailer_USLgbA.jpg",
        id: "3" 
      },
      {
        name: "7x14 Dump Trailer",
        price: 14000,
        quantity: 100,
        description: "A 7ft by 14ft dump trailer",
        imgURL: "https://www.victoriatrailers.ca/wp-content/uploads/2020/08/7x14-sure-trac-dump-trailer.png",
        id: "4" 
      },
      {
        name: "Trimaran Sailboat Trailer",
        price: 5000,
        quantity: 100,
        description: "A custom Trimaran sailboat trailer",
        imgURL: "http://sailtrailers.com/yahoo_site_admin/assets/images/100_0074.1262228_large.jpg",
        id: "5" 
      },
      {
        name: "Fixed Keel Sailboat  Trailer",
        price: 15000,
        quantity: 100,
        description: "A custom triple axle sailboat trailer",
        imgURL: "http://sailtrailers.com/yahoo_site_admin/assets/images/c30_purple_trailer.59113338_large.jpg",
        id: "6" 
      }],
      selectedTrailer: null,
      editing: false
    }
  }
}


export default TrailerControl;