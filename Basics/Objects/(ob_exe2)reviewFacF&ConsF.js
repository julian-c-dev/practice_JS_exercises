// My exercise:

// factory function
function createAddress(street, city, postcode) {
  return {
    street,
    city,
    postcode,
  };
}

let myAddress = createAddress("a", "b", "c");
console.log(myAddress);

// Constructor function

function Address(street, city, postcode) {
  (this.street = street), (this.city = city), (this.postcode = postcode);
}

let myAddress2 = new Address("a", "b", "c");
console.log(myAddress2);
