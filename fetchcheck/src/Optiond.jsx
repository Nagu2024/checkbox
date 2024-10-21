import React, { useState } from 'react';

const Optiond = () => {
    const countries = [
        {
            name: "India",
            value: "IN",
            capital: ["New Delhi", "Kolkata"]
        },
        {
            name: "Pakistan",
            value: "PK",
            capital: ["Lahore", "Karachi"]
        },
        {
            name: "Bangladesh",
            value: "BL",
            capital: ["Dhaka", "Chittagong"]
        }
    ];

    const [optionValue, setOptionValue] = useState('');

    const handleCountryChange = (e) => {
        setOptionValue(e.target.value);
    };

    const selectedCountry = countries.find(country => country.value === optionValue);

    return (
        <div>
            <select onChange={handleCountryChange}>
                {countries.map(country => (
                    <option key={country.value} value={country.value}>
                        {country.name}
                    </option>
                ))}
            </select>

            <select>
                {selectedCountry && selectedCountry.capital.map(capital => (
                    <option key={capital}>{capital}</option>
                ))}
            </select>

            <p>{optionValue}</p>
        </div>
    );
};

export default Optiond;
