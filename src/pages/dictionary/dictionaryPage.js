// import { useCallback, useEffect, useRef, useState } from "react";
// import { DictionaryPageContainer } from "./dictionaryPage.styled";
// import { ReactComponent as Plus } from "../../img/plus.svg";
// import { ReactComponent as Switch } from "../../img/switch-horizontal.svg";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getAllCategories,
//   ownWord,
//   statisticsWords,
// } from "../../redux/data/data-operation";
// import { useDictionaryHook } from "components/hooks/dictyonaryHook";
// import { debounce } from "lodash";
// import { PageButtonList } from "components/pageButtonList/pageButtonList";
// import { openModalAddWord } from "../../redux/modals/modal-slice";
// import { NavLink } from "react-router-dom";
// import { Table } from "components/table/table";

// export default function DictionaryPage() {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     filters: "",
//     statistics: "",
//     isIrregular: undefined,
//     page: 1,
//   });
//   const [isVerb, setIsVerb] = useState(false);

//   const { categories } = useDictionaryHook();
//   const data = useSelector((state) => state.data.words);
//   const statistics = useSelector((state) => state.data.statistics);
//   const isLoadingCategories = useSelector(
//     (state) => state.data.isLoadingCategories
//   );
//   const isLoadingStatistics = useSelector(
//     (state) => state.data.isLoadingStatistics
//   );
//   const isDeleteWord = useSelector((state) => state.data.isDeleteWord);
//   const isAddWord = useSelector((state) => state.data.isAddWord);

//   useEffect(() => {
//     dispatch(ownWord(isDeleteWord || isAddWord));
//     dispatch(getAllCategories());
//     dispatch(statisticsWords());
//   }, [dispatch, isDeleteWord, isAddWord]);

//   // const delayedDispatchRef = useRef(
//   //   debounce((formData) => {
//   //     dispatch(ownWord(formData));
//   //   }, 300)
//   // );

//   // useEffect(() => {
//   //   delayedDispatchRef.current(formData);
//   // }, [formData]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value.trim(),
//     });
//   };

//   // const handleBlur = () => {
//   //   delayedDispatchRef.current(formData);
//   // };

//   const handleBlur = debounce((formData) => {
//     dispatch(ownWord(formData));
//   }, 300);

//   const handleListItemClick = (value) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       statistics: value,
//     }));
//     value === "verb" ? setIsVerb(true) : setIsVerb(false);
//   };

//   const handleIsIrregularClick = (boolean) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       isIrregular: boolean,
//     }));
//   };

//   return (
//     <DictionaryPageContainer>
//       <div className="FilterContainer">
//         <form className="Form">
//           <div className="SearchContainer">
//             <input
//               id="filters"
//               className="Input"
//               type="text"
//               placeholder="Find the word"
//               name="filters"
//               value={formData.filters}
//               onChange={handleInputChange}
//               onBlur={handleBlur}
//             />
//           </div>
//           <div className="custom-input">
//             <input
//               id="statistics"
//               name="statistics"
//               className="Input"
//               type="text"
//               placeholder="Categories"
//               value={formData.statistics}
//               onChange={handleInputChange}
//             />
//             <ul className="dropdown">
//               <li className="ListItem" onClick={() => handleListItemClick("")}>
//                 categories
//               </li>
//               {!isLoadingCategories ? (
//                 categories.map((item) => (
//                   <li
//                     className="ListItem"
//                     key={item}
//                     onClick={() => handleListItemClick(item)}
//                   >
//                     {item}
//                   </li>
//                 ))
//               ) : (
//                 <div>Looding...</div>
//               )}
//             </ul>
//           </div>
//           <ul
//             className="RadioButtonList"
//             style={{ display: isVerb ? "flex" : "none" }}
//           >
//             <li className="RadioButtonItem">
//               <input
//                 className="RadioButton"
//                 id="regular"
//                 name="regular"
//                 type="radio"
//                 onChange={() => handleIsIrregularClick(false)}
//                 value={formData.isIrregular}
//                 checked={formData.isIrregular === false}
//               />
//               Regular
//             </li>
//             <li className="RadioButtonItem">
//               <input
//                 className="RadioButton"
//                 id="irregular"
//                 name="irregular"
//                 type="radio"
//                 onChange={() => handleIsIrregularClick(true)}
//                 value={formData.isIrregular}
//                 checked={formData.isIrregular === true}
//               />
//               Irregular
//             </li>
//           </ul>
//         </form>
//         <div className="CountContainer">
//           <p className="CountWord">
//             To study:
//             <span className="NumberCountWord">
//               {!isLoadingStatistics && statistics.totalCount}
//             </span>
//           </p>
//           <ul className="ButtonList">
//             <li
//               className="ButtonItem"
//               onClick={() => dispatch(openModalAddWord())}
//             >
//               Add word <Plus className="IconButton" />
//             </li>
//             <li>
//               <NavLink className="ButtonItem" to="/training">
//                 Train oneself <Switch className="IconButton" />
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="TableContainer">
//         {data.results && data.results.length !== 0 ? (
//           <Table data={data} />
//         ) : (
//           <p style={{ fontSize: "20px", textAlign: "center" }}>
//             You dont have own words
//           </p>
//         )}
//       </div>
//       {data.totalPages > 1 && (
//         <PageButtonList
//           data={data}
//           formData={formData}
//           setFormData={setFormData}
//         />
//       )}
//     </DictionaryPageContainer>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { DictionaryPageContainer } from "./dictionaryPage.styled";
import { ReactComponent as Plus } from "../../img/plus.svg";
import { ReactComponent as Switch } from "../../img/switch-horizontal.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  ownWord,
  statisticsWords,
} from "../../redux/data/data-operation";
import { useDictionaryHook } from "components/hooks/dictyonaryHook";
import { debounce } from "lodash";
import { PageButtonList } from "components/pageButtonList/pageButtonList";
import { openModalAddWord } from "../../redux/modals/modal-slice";
import { NavLink } from "react-router-dom";
import { Table } from "components/table/table";

export default function DictionaryPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    filters: "",
    statistics: "",
    isIrregular: undefined,
    page: 1,
  });
  const [isVerb, setIsVerb] = useState(false);

  const { categories } = useDictionaryHook();
  const data = useSelector((state) => state.data.words);
  const statistics = useSelector((state) => state.data.statistics);
  const isLoadingCategories = useSelector(
    (state) => state.data.isLoadingCategories
  );
  const isLoadingStatistics = useSelector(
    (state) => state.data.isLoadingStatistics
  );
  const isDeleteWord = useSelector((state) => state.data.isDeleteWord);
  const isAddWord = useSelector((state) => state.data.isAddWord);

  useEffect(() => {
    dispatch(ownWord(isDeleteWord || isAddWord));
    dispatch(getAllCategories());
    dispatch(statisticsWords());
  }, [dispatch, isDeleteWord, isAddWord]);

  const delayedDispatchRef = useRef(
    debounce((formData) => {
      dispatch(ownWord(formData));
    }, 300)
  );

  useEffect(() => {
    delayedDispatchRef.current(formData);
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const handleListItemClick = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      statistics: value,
    }));
    value === "verb" ? setIsVerb(true) : setIsVerb(false);
  };

  const handleIsIrregularClick = (boolean) => {
    setFormData((prevState) => ({
      ...prevState,
      isIrregular: boolean,
    }));
  };

  return (
    <DictionaryPageContainer>
      <div className="FilterContainer">
        <form className="Form">
          <div className="SearchContainer">
            <input
              id="filters"
              className="Input"
              type="text"
              placeholder="Find the word"
              name="filters"
              value={formData.filters}
              onChange={handleInputChange}
            />
          </div>
          <div className="custom-input">
            <input
              id="statistics"
              name="statistics"
              className="Input"
              type="text"
              placeholder="Categories"
              value={formData.statistics}
              onChange={handleInputChange}
            />
            <ul className="dropdown">
              <li className="ListItem" onClick={() => handleListItemClick("")}>
                categories
              </li>
              {!isLoadingCategories ? (
                categories.map((item) => (
                  <li
                    className="ListItem"
                    key={item}
                    onClick={() => handleListItemClick(item)}
                  >
                    {item}
                  </li>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </ul>
          </div>
          <ul
            className="RadioButtonList"
            style={{ display: isVerb ? "flex" : "none" }}
          >
            <li className="RadioButtonItem">
              <input
                className="RadioButton"
                id="regular"
                name="regular"
                type="radio"
                onChange={() => handleIsIrregularClick(false)}
                checked={formData.isIrregular === false}
              />
              Regular
            </li>
            <li className="RadioButtonItem">
              <input
                className="RadioButton"
                id="irregular"
                name="irregular"
                type="radio"
                onChange={() => handleIsIrregularClick(true)}
                checked={formData.isIrregular === true}
              />
              Irregular
            </li>
          </ul>
        </form>
        <div className="CountContainer">
          <p className="CountWord">
            To study:
            <span className="NumberCountWord">
              {!isLoadingStatistics && statistics.totalCount}
            </span>
          </p>
          <ul className="ButtonList">
            <li
              className="ButtonItem"
              onClick={() => dispatch(openModalAddWord())}
            >
              Add word <Plus className="IconButton" />
            </li>
            <li>
              <NavLink className="ButtonItem" to="/training">
                Train oneself <Switch className="IconButton" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="TableContainer">
        {data.results && data.results.length !== 0 ? (
          <Table data={data} />
        ) : (
          <p style={{ fontSize: "20px", textAlign: "center" }}>
            You dont have own words
          </p>
        )}
      </div>
      {data.totalPages > 1 && (
        <PageButtonList
          data={data}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </DictionaryPageContainer>
  );
}
