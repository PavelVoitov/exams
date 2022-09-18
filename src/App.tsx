import React, {useState} from 'react';
import {Count} from "./components/Count";
import './App.css';
// import {ButtonForOddEven} from "./components/ButtonForOddEven";
// import {Selector} from "./components/СolorChange/Selector";

const arrOfNumber = [1, 5, 8, 96, 28, 101, 4];

export type FilterType = 'Odd' | 'Even' | 'All';

function App() {

    // console.log(devArr);
    const [number, setNumber] = useState(arrOfNumber)

    const [filter, setFilter] = useState<FilterType>("All");

    let filterNumber = number;
    if (filter === "Odd") {
        filterNumber = number.filter((el) => !(el%2));
    } else if (filter === "Even") {
        filterNumber = number.filter((el) => el%2);
    } else if (filter === "All") {
        filterNumber = number.filter((el) => el);
    }
     const FilterNumber = (num : FilterType) => {
         setFilter(num);
     }

  return (
    <div className="App">
          <h1>Site for exams!</h1>
        <Count/>
        {/*<ButtonForOddEven arrOfNumber={filterNumber} callback={FilterNumber}/>*/}
        {/*<Selector />*/}
    </div>
  );
}


export default App;
