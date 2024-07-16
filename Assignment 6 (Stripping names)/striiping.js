// 6.	Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let name_wih_white_space = "\n\t Sadaf \t\n";
console.log(name_wih_white_space);
let name_wih_whiteout_space = name_wih_white_space.trim();
console.log(name_wih_whiteout_space);
export {};
