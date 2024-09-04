import { Row } from "react-bootstrap";
import PropTypes from "prop-types";
import PlayerCard  from "./PlayerCard";

const CardContainer = ({ data, search }) => {
  return (
    <div className="container rounded-4 my-4 bg-light card-container">
        {/* Row it is using for styling in bootstrap
            data is for all players and I am using filtering to search some players according to the search. 
            It will give an array that I need to map to render each card for each player that is inside
        */}
        
      <Row className="g-3 justify-content-center mt-4">
        {/* data.filter: to search accordingly to name, will give an array
            It is used to make sure that the card contains the criteria that I am looking for(in that case the criteria is the search, because in case I want to filter by name, so it is necessary to take in account that the cards that they will be shown contains that name.
            
            .map: it will loop over and select the cards accordinly to the name. It is used to show the cards in the container */}
        {data.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ).map((item, index) => (
         
            <PlayerCard key={index} name={item.name} img={item.img} stat={item.statistics} />
        ))}
      </Row>
    </div>
  );
};

CardContainer.protoTypes = {
  data: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
};

export default CardContainer;

// .propTypes --> It allows me to define the type of variable
// TypeScript is an adavanced version of JavaScript
// You need to define what type of Search, what type or setSearch....
// The reason of defining the type of variables is to check if this search coming value is string or the setSearch is a function

// It is necessary to define types for the props by using PropTypes. This will allow to prevent future problems like if it is string you cannot use object methods for instance. So it makes you sure that type is correct before coming as props. However this PropTypes is old method and currently people are using TypeScript language to handle types. For that reason it is not used that. It would use TypeScript
