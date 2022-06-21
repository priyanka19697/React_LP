import React from "react";
import PropTypes from 'prop-types'

function ListView({numbers}){
    const default_array = [1,2,3,4,5,6,7,8,9,10];
    const array = numbers || default_array;
    const listItems = array.map((number) =>
    <li key={number.toString()}>{number}</li>);
    return(
        <ul>
            {listItems}
        </ul>
    );
}

ListView.propTypes = {
    value: PropTypes.array
}
export default ListView;
