// task 1
let upperCase = (string) => {
    const regexp = /^[A-Z]/;
    const result = regexp.test(string);
    if (result === true) {
        return "string's first character is uppercase";
    } else {
        return "string's first character is not uppercase";
    }
};
console.log(upperCase("Abcd"));
console.log(upperCase("abcd"));

// task 2
let isDateString = (string) => {
    const regexp =
        /^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    return regexp.test(string);
};
console.log(isDateString("01/01/2015")); // true
console.log(isDateString("32/01/2015")); // false

// task 3
let trim = (string) => {
    const regexp = /\s/g;
    return string.replace(regexp, "");
};
console.log(trim("    ololo ")); // ololo

// task 4
let vowelCount = (string) => {
    const result = string.match(/[aeiou]/gi);
    return result.length;
};
console.log(vowelCount("The quick brown fox jumps over the lazy dog"));

// task 5
let isUSZipCode = (string) => {
    const regexp = /^\d{5}-\d{4}$/;
    return regexp.test(string);
};
console.log(isUSZipCode("03201-2150")); // true
console.log(isUSZipCode("7892")); // false
