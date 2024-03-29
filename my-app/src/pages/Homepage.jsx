import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCards } from "../redux/action";
import { ImCross } from "react-icons/im";
import moment from 'moment';
import { GETCARDS_SUCCESS } from "../redux/actionType";

import img1 from "../Images/Ellipse 1.png";
import img2 from "../Images/Rectangle 17.png";
import img3 from "../Images/Rectangle 31.png";

function Homepage({ togle2, togle, pageLast, page }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);
  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const carddata = useSelector((store)=>store);
  const Data = carddata?.carddata;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, []);

  const date = Date.now();
  let formattedDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');

  const removeCard = (id) => {
    const updatedCards = cards.filter(card => card.id !== id);
    setCards(updatedCards);
  };

  useEffect(() => {
    if (Data) {
      setCards(Data);
    }
  }, [Data]);

  return (
    <>
      {/* Modal Code */}
      {isOpen && (
        <div id="default-modal" tabIndex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-10 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full m-auto">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-center justify-between p-4 md:p-5 ">
                <img className="w-full" src={img3} alt="" />
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Display Cards */}
      {cards.map((card, index) => {
        if (index > pageLast && index < page) {
          return (
            <div key={card.id} className="m-auto  flex justify-center mt-12 ">
              {togle ? (
                <div className="flex gap-2 ">
                  <div class="flex flex-col items-center bg-white  rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-white-800 shadow-lg shadow-indigo-100/40 " onClick={openModal}>
                    <img class=" w-20 rounded-t-lg  md:rounded-none md:rounded-s-lg" src={img1} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">{`${card.title.substr(0, 20)}...`}</h5>
                      <p class="mb-3 font-normal text-black-700 dark:text-black-400">{`${card.body.substr(0, 50)}...`}</p>
                      <h3 className="text-midGray font-bold">{formattedDate}</h3>
                    </div>
                    <div className="flex justify-center  items-center ml-2 rounded-xl">
                    </div>
                  </div>
                  <div className="rounded-xl text-pinkii flex justify-center items-center">
                    <ImCross onClick={() => removeCard(card.id)} />
                  </div>
                </div>
              ) : null}

              {/* Display togle2 content */}
              {togle2 ? (
                <div className="">
                  <div class="max-w-sm bg-white border  rounded-lg shadow-xl ">
                    <div class="p-5 ">
                      <a href="#" className="flex justify-between">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">{`${card.title.substr(0, 20)}...`}</h5>
                        <div className="rounded-xl text-pinkii flex justify-center items-center">
                    <ImCross onClick={() => removeCard(card.id)} />
                  </div>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${card.body.substr(0, 50)}...`}
                      </p>
                      <h3 className="text-midGray font-bold">{formattedDate}</h3>
                      <div className="m-auto flex justify-center">
                        <img class="w-full" src={img2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )
        }
      })}
    </>
  );
}

export default Homepage;
