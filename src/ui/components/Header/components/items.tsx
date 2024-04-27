import React from "react";
import './item.css'

type Props = {
    active?: boolean,
    text?: string,
    onClick?: () => void
}


const ItemComponent = ({text, active, onClick}:Props):React.JSX.Element => {

    const classNameChange = () => {
      if (active) {
        return "ListContainer--ul--li--active"
      } else {
        return "ListContainer--ul--li";
      }
    };

    return(
        <li className={classNameChange()} onClick={onClick}>{text}</li>
    )
}

export default ItemComponent;