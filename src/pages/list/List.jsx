import "./list.css";
import { Header, Navbar, SearchItem } from "../../components/index";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list__container">
        <div className="list__wrapper">
          <div className="list__search">
            <h1 className="list__title">Search</h1>

            <div className="list__item">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="list__item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd / MM / yyyy"
              )} - ${format(date[0].endDate, "dd / MM / yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="list__item">
              <label>Options</label>
              <div className="list__option">
                <div className="list__option-item">
                  <span className="list__option-text">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="list__option-input" />
                </div>

                <div className="list__option-item">
                  <span className="list__option-text">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="list__option-input" />
                </div>

                <div className="list__option-item">
                  <span className="list__option-text">Adult</span>
                  <input
                    type="number"
                    min={1}
                    placeholder={option.adult}
                    className="list__option-input"
                  />
                </div>

                <div className="list__option-item">
                  <span className="list__option-text">Children</span>
                  <input
                    type="number"
                    min={0}
                    placeholder={option.children}
                    className="list__option-input"
                  />
                </div>

                <div className="list__option-item">
                  <span className="list__option-text">Room</span>
                  <input
                    type="number"
                    min={1}
                    placeholder={option.adult}
                    className="list__option-input"
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>

          <div className="list__result">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
