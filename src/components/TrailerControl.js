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
        quantity: 10,
        numberOrdered: 0,
        description: "A 6ft by 12ft enclosed trailer",
        imgURL: "https://dealer-cdn.com/rW3v2m/C6T6Wm/2022_Spartan_Cargo_Spartan_SP6X12SA_Enclosed_Cargo_Trailer_eqG0Po.jpg",
        id: "1"
      },
      {
        name: "7x14 Enclosed Trailer",
        price: 8000,
        quantity: 10,
        numberOrdered: 0,
        description: "A 7ft by 14ft enclosed trailer",
        imgURL: "https://allamericantrailer.com/wp-content/uploads/2019/05/IMG_0136.jpg",
        id: "2" 
      },  
      {
        name: "6x12 Dump Trailer",
        price: 9500,
        quantity: 10,
        numberOrdered: 0,
        description: "A 6ft by 12ft dump trailer",
        imgURL: "https://dealer-cdn.com/rW3v2m/hrMXvU/2022_Hawke_Trailers_6X12TA_10K_Low_Profile_Dump_Trailer_USLgbA.jpg",
        id: "3" 
      },
      {
        name: "7x14 Dump Trailer",
        price: 14000,
        quantity: 10,
        numberOrdered: 0,
        description: "A 7ft by 14ft dump trailer",
        imgURL: "https://www.victoriatrailers.ca/wp-content/uploads/2020/08/7x14-sure-trac-dump-trailer.png",
        id: "4" 
      },
      {
        name: "Trimaran Sailboat Trailer",
        price: 5000,
        quantity: 10,
        numberOrdered: 0,
        description: "A custom Trimaran sailboat trailer",
        imgURL: "http://sailtrailers.com/yahoo_site_admin/assets/images/100_0074.1262228_large.jpg",
        id: "5" 
      },
      {
        name: "Fixed Keel Sailboat  Trailer",
        price: 15000,
        quantity: 10,
        numberOrdered: 0,
        description: "A custom triple axle sailboat trailer",
        imgURL: "http://sailtrailers.com/yahoo_site_admin/assets/images/c30_purple_trailer.59113338_large.jpg",
        id: "6" 
      }],
      selectedTrailer: null,
      editing: false
    }
  }

  handleClick = () => {
    if(this.state.selectedTrailer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTrailer: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({
      editing: true
    });
  }

  handleAddingNewTrailerToList = (newTrailer) => {
    const newMainTrailerList = this.state.mainTrailerList.concat(newTrailer);
    this.setState({
      mainTrailerList: newMainTrailerList,
      formVisibleOnPage: false
    });
  }  

  handleEditingTrailerInList = (trailerToEdit) => {
    const editedTrailerMainList = this.state.mainTrailerList.filter(trailer => trailer.id !== this.state.selectedTrailer.id).concat(trailerToEdit);
    this.setState({
      mainTrailerList: editedTrailerMainList,
      editing: false,
      selectedTrailer: null
    });
  }

  handleChangingSelectedTrailer=(id) => {
    const selectedTrailer = this.state.mainTrailerList.filter(trailer => trailer.id === id)[0];
    this.setState({selectedTrailer: selectedTrailer}
    );
  }

  handleDeletingTrailer = (id) => {
    const newMainTrailerList = this.state.mainTrailerList.filter(trailer => trailer.id !== id);
    this.setState ({
      mainTrailerList: newMainTrailerList,
      selectedTrailer: null
    });
  }

  handleRestockingTrailer = (id) => {
    const trailerToRestock = this.state.mainTrailerList.filter(trailer => trailer.id === id)[0];
    const restockedTrailer = {...trailerToRestock, quantity:10};
    const newMainTrailerList = this.state.mainTrailerList.filter(trailer => trailer.id !== id).concat(restockedTrailer);
    this.setState({
      mainTrailerList: newMainTrailerList,
      selectedTrailer: null
    });
  }

  handleOrderingTrailer = (id) => {
    const trailerToOrder = this.state.mainTrailerList.filter(trailer => trailer.id === id)[0];
    
    if(trailerToOrder.quantity > 0) {
      const newTotal = trailerToOrder.quantity -1;
      const newNumberOrderedTotal = trailerToOrder.numberOrdered +1;
      const orderedTrailer = {...trailerToOrder, quantity:newTotal, numberOrdered: newNumberOrderedTotal};

      const newMainTrailerList = this.state.mainTrailerList.filter(trailer => trailer.id !== id).concat(orderedTrailer);

      this.setState({
        mainTrailerList: newMainTrailerList,
        selectedTrailer: null,
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditTrailerForm 
      trailer={this.state.selectedTrailer} 
      onEditTrailer={this.handleEditingTrailerInList} />
      buttonText = "Return to Trailer List";
    } else if (this.state.selectedTrailer) {
      currentlyVisibleState = <TrailerDetail 
      trailer={this.state.selectedTrailer} 
      onClickingDelete={this.handleDeletingTrailer} 
      onClickingEdit={this.handleEditClick} 
      onClickingRestock={this.handleRestockingTrailer} 
      onOrderingTrailer={this.handleOrderingTrailer}/>
      buttonText = "Return to Trailer List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTrailerForm 
      onNewTrailerCreation={this.handleAddingNewTrailerToList} />
      buttonText = "Return to Trailer List";
    } else {
      currentlyVisibleState = <TrailerList 
      trailerList={this.state.mainTrailerList} 
      onTrailerSelection={this.handleChangingSelectedTrailer}/>
      buttonText="Add Trailer"
    } return (
      <React.Fragment>
        {currentlyVisibleState}
        <hr/>
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}


export default TrailerControl;