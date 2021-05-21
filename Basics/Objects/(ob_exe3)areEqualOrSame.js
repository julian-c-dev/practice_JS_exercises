//Mosh approach: ( I couldn't do it :( )

//Constructor function
function Address(street, city, postcode) {
  (this.street = street), (this.city = city), (this.postcode = postcode);
}

//Objects
let myAddress1 = new Address("a", "b", "c");
let myAddress2 = new Address("a", "b", "c");
let myAddress3 = myAddress1;

// are the same Obj1 and Obj2? (the point to the same object)
function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areSame(myAddress1, myAddress2)); // false
console.log(areSame(myAddress1, myAddress3)); // true

// are the equal Obj1 and Obj2? (they have the same properties values)
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.postcode === address2.postcode
  );
}

console.log(areEqual(myAddress1, myAddress2));
