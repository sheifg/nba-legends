import { Form } from "react-bootstrap";
import PropTypes from 'prop-types';

const Search = ({search, setSearch}) => {


    return(
        <div className="flex-grow-1 ">
            {/* For search it is used form, but using react bootstrap is used Form.Control */}
            {/* <form>
                <input type="text" />
            </form> */}
            {/* Form is the parent <form></form> and .Control is the <input> */}
            {/* aria-label: it is only for accesibility, like screen readers.... It can be used in html tag like an attribute*/}
            <Form.Control 
            placeholder="Search player..." 
            aria-label="Search" 
            value={search} 
            onChange={(event) => setSearch(event.target.value)}
            className="w-50 m-auto">
            </Form.Control>

        </div>
    )
}


Search.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired
    // Adding .isRequired, without this infor your form wont be sent it
}

export default Search;

