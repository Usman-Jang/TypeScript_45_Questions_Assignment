/* Qs.45 Cars: Write a function that stores information about a car in a Object.The function
should always receive a manufacturer and a model name. It should then accept an arbitrary number
of keyword arguments. Call the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to make sure all the information
was stored correctly. */

// Define the function to store car information
function carInfo(
  manufacturer: string,
  model: string,
  ...options: { [key: string]: any }[]
): { [key: string]: any } {
  const car: { [key: string]: any } = {
    manufacturer: manufacturer,
    model: model,
  };

  // Add additional options to the car object
  options.forEach((option) => {
    for (let key in option) {
      car[key] = option[key];
    }
  });
  return car;
}

// Call the function with required information and additional options
const myCar = carInfo("Toyota", "Corolla", { color: "blue" }, { year: 2022 });

// Print the returned object
console.log(myCar);
