import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { format } from "date-fns";
import { useState } from "react";

import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, option } });
  };

  return (
    <div className="app__header">
      <div
        className={
          type === "list"
            ? "app__header-container listmode"
            : "app__header-container"
        }
      >
        <div className="app__header-list__container">
          <div className="app__header-list__item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="app__header-list__item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="app__header-list__item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="app__header-list__item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="app__header-list__item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="app__header-title">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="app__header-desc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free nikubooking account
            </p>
            <button className="app__header-button">Sign In / Register</button>

            <div className="app__header-search">
              <div className="app__header-search_item">
                <FontAwesomeIcon icon={faBed} className="app__header-icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header-searchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="app__header-search_item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="app__header-icon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="app__header-search_text"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )} `}</span>

                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="app__header-calendar"
                  />
                )}
              </div>

              <div className="app__header-search_item">
                <FontAwesomeIcon icon={faPerson} className="app__header-icon" />
                <span
                  onClick={() => setOpenOption(!openOption)}
                  className="app__header-search_text"
                >
                  {`${option.adult} adult . ${option.children} children . ${option.room} room`}
                </span>

                {openOption && (
                  <div className="header__option">
                    <div className="header__option-item">
                      <span className="header__option-text">Adult</span>
                      <div className="header__button-component">
                        <button
                          disabled={option.adult <= 1}
                          className="header__option-counter_button"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="header__option-text">
                          {option.adult}
                        </span>
                        <button
                          className="header__option-counter_button"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="header__option-item">
                      <span className="header__option-text">Children</span>
                      <div className="header__button-component">
                        <button
                          disabled={option.children <= 1}
                          className="header__option-counter_button"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="header_option-text">
                          {option.children}
                        </span>
                        <button
                          className="header__option-counter_button"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="header__option-item">
                      <span className="header__option-text">Room</span>
                      <div className="header__button-component">
                        <button
                          disabled={option.room <= 1}
                          className="header__option-counter_button"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="header__option-text">
                          {option.room}
                        </span>
                        <button
                          className="header__option-counter_button"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="app__header-search_item">
                <button className="app__header-button" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
