import { useEffect, useState, useRef } from "react";
import arrow from "/arrow.svg";

/**
 * DropDown component renders a customizable dropdown menu.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.name - The label displayed on the dropdown button.
 * @param {string} props.componentClassName - Base class name for BEM-style CSS classes.
 * @param {Array|string} props.items - The list of items to display in the dropdown. Can be an array of items or a string.
 * @returns {JSX.Element} The rendered dropdown component.
 */
function DropDown({ name, componentClassName, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen, items]);

  const displayedItem =
    typeof items === "object"
      ? items.map((item, index) => <li key={`${index}`}>{item}</li>)
      : items;

  return (
    <div className={`${componentClassName} dropdown`}>
      <button
        className={`${componentClassName}__btn dropdown__btn`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${componentClassName}__btn-name dropdown__btn-name`}>
          {name}
        </div>
        <img
          src={arrow}
          alt=""
          className={`${componentClassName}__btn-arrow dropdown__btn-arrow ${
            isOpen ? "up" : "down"
          }`}
        />
      </button>

      <div
        className={`dropdown__content-wrapper ${
          isOpen ? "light-grey" : "toWhite"
        }`}
      >
        <ul
          ref={contentRef}
          className={`${componentClassName}__list dropdown__list`}
          style={{ height: `${height}px` }}
        >
          {displayedItem}
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
