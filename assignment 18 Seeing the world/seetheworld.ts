// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let favourite_world_place: string[] = [
  "Islamabad",
  "Korea",
  "United States",
  "Bangkok",
  "LosAngeles",
];
// • Print your array in its original order.
console.log(`Origninal Order\n${favourite_world_place}\n`);
// • Print your array in alphabetical order without modifying the actual list.
// ... three dots create a copy of array 
console.log(`\nAlphabetical Order\n${[...favourite_world_place].sort()}\n`);
// • Show that your array is still in its original order by printing it.
console.log(`Origninal Order\n${favourite_world_place}\n`);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Reverse alphabetical order\n${[...favourite_world_place].sort().reverse()}\n`);
// • Show that your array is still in its original order by printing it again.
console.log(`Origninal Order\n${favourite_world_place}\n`);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(`Reverse Order\n${favourite_world_place.reverse()}\n`);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`Reverse Order\n${favourite_world_place.reverse()}\n`);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`Alphabetical Order\n${favourite_world_place.sort()}\n`);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`Reverse Alphabetical Order\n${favourite_world_place.sort().reverse()}`);
