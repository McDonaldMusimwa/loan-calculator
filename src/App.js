
import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/table";
import Header from "./components/header";

function App() {
  const [calculatedData, setCalculatedData] = useState([]);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.savings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.contribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedreturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      //console.log(yearlyInterest)
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log(yearlyData);

    setCalculatedData(yearlyData);
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />

      <Form calculate={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Table yearlyData={calculatedData} />
    </div>
  );
}

export default App;