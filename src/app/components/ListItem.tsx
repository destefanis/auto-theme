import * as React from "react";
import classNames from "classnames";

function ListItem(props) {
  const node = props.node;

  const handleClick = id => {
    props.onClick(id);
  };

  return (
    <li
      id={node.id}
      className={classNames(`list-item`, {
        "list-item--active": props.activeLayer === node.id,
        "list-item--selected": props.activeLayer === node.id
      })}
      onClick={() => handleClick(node.id)}
    >
      <div className="list-flex-row">
        <span className="list-arrow"></span>
        <span className="list-icon">
          <img src={require("../assets/" + node.type.toLowerCase() + ".svg")} />
        </span>
        <span className="list-name type type--pos-small-normal">
          {node.name}
        </span>
      </div>
    </li>
  );
}

export default ListItem;
