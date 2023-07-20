import React from 'react';


const renderYear = (props) => {


  const eachYear = props.yearlyData.map((year) => {

    return (
      <tr>
        <td>{year.year}</td>
        <td>{year.yearlyInterest}</td>
        <td>{year.savingsEndOfYear}</td>
        <td>{year.yearlyContribution}</td>
        <td>{year.year}</td>
      </tr>
    );
  });
  

  return <>{eachYear}</>;
};

export default renderYear;
