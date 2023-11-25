const makeChange = (amount) => {
 const quarterValue = 25;
  const dimeValue = 10;
  const nickelValue = 5;
  const pennyValue = 1;

  // Initialize variables to store the number of each coin needed
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Calculate the number of quarters
  quarters = Math.floor(amount / quarterValue);
  amount %= quarterValue;

  // Calculate the number of dimes
  dimes = Math.floor(amount / dimeValue);
  amount %= dimeValue;

  // Calculate the number of nickels
  nickels = Math.floor(amount / nickelValue);
  amount %= nickelValue;

  // The remaining amount is the number of pennies
  pennies = amount;

  // Create and return the result object
  const result = {
    q: quarters,
    d: dimes,
    n: nickels,
    p: pennies,
  };

  return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");

alert(JSON.stringify(makeChange(c)));
