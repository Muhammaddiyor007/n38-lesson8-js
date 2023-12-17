// String 1
// function printLargeLettersAsString(n) {
//     if (n < 1 || n > 26) {
//         console.log("Noto'g'ri qiymat! 1 dan 26 gacha bo'lgan butun son kiriting.");
//         return;
//     }

//     let result = "";
//     for (let i = 0; i < n; i++) {
//         let letter = String.fromCharCode(65 + i); 
//         result += letter;
//     }
//     console.log(result);
// }


// String 2
// function checkCharacterType(input) {
//     if (typeof input === 'string' && input.length === 1) {
//         let charCode = input.charCodeAt(0);

//         if (charCode >= 48 && charCode <= 57) {
//             console.log("digit");
//         } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             console.log("lotin");
//         } else {
//             console.log("Nol");
//         }
//     } else {
//         console.log("Nol");
//     }
// }

// checkCharacterType("A"); 
// checkCharacterType("5"); 
// checkCharacterType("&"); 


// String 3
// function printUTF16Codes(str) {
//     if (typeof str === 'string' && str.length > 0) {
//         let firstCharCode = str.charCodeAt(0);
//         let lastCharCode = str.charCodeAt(str.length - 1);

//         console.log("Birinchi belgi UTF-16 kodi: " + firstCharCode);
//         console.log("Oxirgi belgi UTF-16 kodi: " + lastCharCode);
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki bo'sh.");
//     }
// }

// printUTF16Codes("Hello");

// String 4
// function generateString(n, char) {
//     if (n > 0) {
//         let result = char.repeat(n);
//         console.log(result);
//     } else {
//         console.log("Noto'g'ri qiymat! N soni musbat bo'lishi kerak.");
//     }
// }

// generateString(8, 'A');

// String 5
// function reverseString(input) {
//     if (typeof input === 'string' && input.length > 0) {
//         let reversedString = input.split('').reverse().join('');
//         console.log(reversedString);
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki bo'sh.");
//     }
// }

// reverseString("Muhammaddiyor");

// String 6
// function StringStar(inputStr, N) {
//     if (typeof inputStr === 'string' && inputStr.length > 0 && Number.isInteger(N) && N > 0) {
//         let result = "";
//         for (let i = 0; i < inputStr.length; i++) {
//             result += inputStr[i];
//             for (let j = 0; j < N; j++) {
//                 result += "*";
//             }
//         }
//         console.log(result);
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki bo'sh, N soni musbat butun son bo'lishi kerak.");
//     }
// }

// StringStar("Muhammaddiyor", 2);

// String 7
// function findNumbers(inputStr) {
//     if (typeof inputStr === 'string' && inputStr.length > 0) {
//         let numbers = "";
//         for (const char of inputStr) {
//             if (!isNaN(char)) {
//                 numbers += char;
//             }
//         }
//         console.log("Satrdagi raqamlar soni: " + numbers);
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki bo'sh.");
//     }
// }

// findNumbers("Muhammaddiyor007Odiljonov18");

// String 8
// function countLowercaseLetters(inputStr) {
//     if (typeof inputStr === 'string' && inputStr.length > 0) {
//         let count = 0;
//         for (const char of inputStr) {
//             // Kirill alifbosi harflari (а - я) va lotin alifbosi harflari (a - z)
//             if ((char >= 'а' && char <= 'я') || (char >= 'a' && char <= 'z')) {
//                 count++;
//             }
//         }
//         console.log("Satrdagi kichik lotin va kirill harflarining umumiy soni: " + count);
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki bo'sh.");
//     }
// }

// countLowercaseLetters("Muhammaddiyor Привет ");

// String 9
// function convertUppercaseToLowercase(inputStr) {
//     if (typeof inputStr === 'string' && inputStr.length > 0) {
//         let result = "";
//         for (const char of inputStr) {
//             if (char >= 'A' && char <= 'Z') {
//                 // Katta lotin harfini kichikiga o'zgartirish
//                 result += String.fromCharCode(char.charCodeAt(0) + 32);
//             } else {
//                 result += char;
//             }
//         }
//         console.log("Natija: " + result);
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki bo'sh.");
//     }
// }

// convertUppercaseToLowercase("MUHAMMADDIYOR ODILJONOV");

// String 10
// function swapCase(inputStr) {
//     if (typeof inputStr === 'string' && inputStr.length > 0) {
//         let result = "";
//         for (const char of inputStr) {
//             if (char >= 'A' && char <= 'Z') {
//                 result += String.fromCharCode(char.charCodeAt(0) + 32);
//             } else if (char >= 'a' && char <= 'z') {
//                 result += String.fromCharCode(char.charCodeAt(0) - 32);
//             } else {
//                 result += char;
//             }
//         }
//         console.log("Natija: " + result);
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki bo'sh.");
//     }
// }

// swapCase("Muhamaadiyor Odiljonov");

// String 11
// function checkNumberType(inputStr) {
//     if (typeof inputStr === 'string' && inputStr.length > 0) {    
//         const number = Number(inputStr);
//         if (!isNaN(number)) {   
//             if (inputStr.includes('.')) {
//                 console.log(2); 
//             } else {
//                 console.log(1);
//             }
//         } else {
//             console.log(0); 
//         }
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki bo'sh.");
//     }
// }

// checkNumberType("3");   
// checkNumberType("8.74");  
// checkNumberType("Muhammaddiyor");  

// String 12
// function getInverseNumber(n) {
//     if (Number.isInteger(n)) {
//         let inverseNumber = 0;
//         let originalNumber = n;
//         while (originalNumber > 0) {
//             let lastDigit = originalNumber % 10;
//             inverseNumber = inverseNumber * 10 + lastDigit;
//             originalNumber = Math.floor(originalNumber / 10);
//         }
//         return inverseNumber;
//     } else {
//         console.log("Noto'g'ri qiymat! N soni butun son bo'lishi kerak.");
//         return null;
//     }
// }

// let result = getInverseNumber(987654321);
// console.log(result);

// String 13
// function evaluateExpression(expression) {
//     if (typeof expression === 'string' && expression.length > 0) {
//         let currentNumber = 0;
//         let result = 0;
//         let currentOperator = 1;

//         for (let i = 0; i < expression.length; i++) {
//             const char = expression[i];
//             if (char === '+' || char === '-') {
//                 result += currentOperator * currentNumber;     
//                 currentNumber = 0;
//                 currentOperator = (char === '+') ? 1 : -1;
//             } else if (!isNaN(char)) {
                
//                 currentNumber = currentNumber * 10 + parseInt(char, 10);
//             } else {
//                 console.log("Noto'g'ri belgi! Faqat sonlar, '+' va '-' belgilari qabul qilinadi.");
//                 return null;
//             }
//         }
//         result += currentOperator * currentNumber;

//         return result;
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki bo'sh.");
//         return null;
//     }
// }

// let result = evaluateExpression("7+3-2");
// console.log(result); 

// String 14
// function concatenateStrings(N1, N2, S1, S2) {
//     if (Number.isInteger(N1) && Number.isInteger(N2) && typeof S1 === 'string' && typeof S2 === 'string') {

//         let result = S1.slice(0, N1);

//         result += S2.slice(-N2);

//         console.log("Yangi satr: " + result);
//         return result;
//     } else {
//         console.log("Noto'g'ri qiymat! N1 va N2 sonlari butun son, S1 va S2 satrlari esa satr bo'lishi kerak.");
//         return null;
//     }
// }

// concatenateStrings(3, 2, "abc", "defgh"); 

// String 15
// function duplicateCharacter(c, s) {
//     if (typeof c === 'string' && c.length === 1 && typeof s === 'string') {
//         let result = "";
//         for (const char of s) {
//             if (char === c) {
//                 result += c + c;
//             } else {
//                 result += char;
//             }
//         }
//         console.log("Natija: " + result);
//         return result;
//     } else {
//         console.log("Noto'g'ri qiymat! C belgisi yoki S satr kiritilmagan, yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// duplicateCharacter('o', "Muhammaddiyor Odiljonov"); 

// String 16
// function insertSubstringBeforeCharacter(c, s1, s2) {
//     if (typeof c === 'string' && c.length === 1 && typeof s1 === 'string' && typeof s2 === 'string') {
//         let result = "";
//         for (const char of s1) {
//             if (char === c) {
//                 result += s2;
//             }
//             result += char;
//         }
//         console.log("Natija: " + result);
//         return result;
//     } else {
//         console.log("Noto'g'ri qiymat! C belgisi yoki S1 va S2 satrlari kiritilmagan, yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// insertSubstringBeforeCharacter('a', "Muhammaddiyor Odiljonov", "007"); 

// String 17
// function countOccurrences(s1, s2) {
//     if (typeof s1 === 'string' && typeof s2 === 'string') {
//         let count = 0;
//         let index = -1;

//         while ((index = s1.indexOf(s2, index + 1)) !== -1) {
//             count++;
//         }

//         console.log("S2 satri S1 satrida " + count + " marta takrorlangan.");
//         return count;
//     } else {
//         console.log("Noto'g'ri qiymat! S1 va S2 satrlari kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// countOccurrences("Muhammaddiyor", "m"); 

// String 18
// function removeFirstOccurrence(s1, s2) {
//     if (typeof s1 === 'string' && typeof s2 === 'string') {
//         const index = s1.indexOf(s2);

//         if (index !== -1) {
//             const result = s1.slice(0, index) + s1.slice(index + s2.length);
//             console.log("Natija: " + result);
//             return result;
//         } else {
//             console.log("S2 satri S1 satrida uchmadi. S1 satr o'zgarishsiz qoldirildi.");
//             return s1;
//         }
//     } else {
//         console.log("Noto'g'ri qiymat! S1 va S2 satrlari kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }


// removeFirstOccurrence("Muhammaddiyor", "Muhammad"); 
// removeFirstOccurrence("Odiljonov", "ov"); 

// String 19
// function removeAllOccurrences(s1, s2) {
//     if (typeof s1 === 'string' && typeof s2 === 'string') {
//         let result = s1;

//         while (result.includes(s2)) {
//             // S2 satrini o'chirib tashlash
//             result = result.replace(s2, '');
//         }

//         if (result !== s1) {
//             console.log("Natija: " + result);
//             return result;
//         } else {
//             console.log("S2 satri S1 satrida uchmadi. S1 satr o'zgarishsiz qoldirildi.");
//             return s1;
//         }
//     } else {
//         console.log("Noto'g'ri qiymat! S1 va S2 satrlari kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// // Test
// removeAllOccurrences("Muhammaddiyor", "Muhammad"); 
// removeAllOccurrences("Odiljonov", "ov"); 

// String 20
// function replaceFirstOccurrence(s1, s2, s3) {
//     if (typeof s1 === 'string' && typeof s2 === 'string' && typeof s3 === 'string') {
//         const index = s1.indexOf(s2);

//         if (index !== -1) {
//             const result = s1.slice(0, index) + s3 + s1.slice(index + s2.length);
//             console.log("Natija: " + result);
//             return result;
//         } else {
//             console.log("S2 satri S1 satrida uchmadi. S1 satr o'zgarishsiz qoldirildi.");
//             return s1;
//         }
//     } else {
//         console.log("Noto'g'ri qiymat! S1, S2 va S3 satrlari kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// replaceFirstOccurrence("Muhammaddiyor", "Muhammad", "007");
// replaceFirstOccurrence("Odiljonov", "ov", "007");

// String 21
// function replaceLastOccurrence(s1, s2, s3) {
//     if (typeof s1 === 'string' && typeof s2 === 'string' && typeof s3 === 'string') {
//         const index = s1.lastIndexOf(s2);

//         if (index !== -1) {
//             const result = s1.slice(0, index) + s3 + s1.slice(index + s2.length);
//             console.log("Natija: " + result);
//             return result;
//         } else {
//             console.log("S2 satri S1 satrida oxirida uchmadi. S1 satr o'zgarishsiz qoldirildi.");
//             return s1;
//         }
//     } else {
//         console.log("Noto'g'ri qiymat! S1, S2 va S3 satrlari kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// replaceLastOccurrence("Muhammaddiyor", "Muhammad", "007"); 
// replaceLastOccurrence("Odiljonov", "ov", "007"); 

// String 22
// function findSameInitialAndFinalWords(str) {
//     if (typeof str === 'string') {
//         const words = str.split(' ');

//         if (words.length > 1) {
//             const firstWord = words[0].toLowerCase();
//             const lastWord = words[words.length - 1].toLowerCase();

//             if (firstWord.charAt(0) === lastWord.charAt(0) && firstWord.slice(-1) === lastWord.slice(-1)) {
//                 console.log("Boshlanuvchi va tugovchi so'zlar bir xil harflar bilan boshlanadi va tugaydi.");
//                 return true;
//             } else {
//                 console.log("Boshlanuvchi va tugovchi so'zlar bir xil harflar bilan boshlanmaydi va tugaydi.");
//                 return false;
//             }
//         } else {
//             console.log("Satrda kamida ikkita so'z bo'lishi kerak.");
//             return false;
//         }
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// findSameInitialAndFinalWords("Salom Muhammaddiyor");
// findSameInitialAndFinalWords("Katta uy"); 
// findSameInitialAndFinalWords("O'quv narkaz");        

// String23
// function findWordsWithTwoAs(str) {
//     if (typeof str === 'string') {
//         const words = str.split(' ');
//         let count = 0;

//         for (const word of words) {
//             const uppercaseWord = word.toUpperCase();
//             const aCount = (uppercaseWord.match(/A/g) || []).length;

//             if (aCount === 2) {
//                 console.log("2 ta 'A' harfi bor so'z: " + word);
//                 count++;
//             }
//         }

//         if (count === 0) {
//             console.log("Satrda 2 ta 'A' harfi bor so'z topilmadi.");
//         }

//         return count;
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// findWordsWithTwoAs("bog'dagi mevalar nok anor nok");  

// String 24
// function getMaxWordOfString(str) {
//     if (typeof str === 'string') {
//         const words = str.split(' ');
        
//         let maxLength = 0;
//         let maxWord = "";

//         for (const word of words) {
//             if (word.length > maxLength) {
//                 maxLength = word.length;
//                 maxWord = word;
//             }
//         }

//         if (maxLength > 0) {
//             console.log("Eng uzun so'z: " + maxWord);
//             return maxWord;
//         } else {
//             console.log("Satrda so'z topilmadi.");
//             return null;
//         }
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// getMaxWordOfString("bog'dagi mevalar nok anor nok");      

// String 25
// function printWordsWithDot(str) {
//     if (typeof str === 'string') {
//         const words = str.split(' ');

//         if (words.length > 0) {
//             const result = words.join('.');
//             console.log(result);
//             return result;
//         } else {
//             console.log("Satrda so'z topilmadi.");
//             return null;
//         }
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// printWordsWithDot(`bog'dagi mevalar nok anor nok`);         

// String 26
// function capitalizeFirstLetter(str) {
//     if (typeof str === 'string') {
//         const words = str.split(' ');

//         const result = words.map(word => {
//             if (word.length > 0) {
//                 return word.charAt(0).toUpperCase() + word.slice(1);
//             } else {
//                 return word;
//             }
//         }).join(' ');

//         console.log(result);
//         return result;
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// capitalizeFirstLetter(`bog'dagi mevalar nok anor nok`); 

// String 27
// function countPunctuationMarks(str) {
//     const marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];

//     if (typeof str === 'string') {
//         let count = 0;

//         for (const char of str) {
//             if (marks.includes(char)) {
//                 count++;
//             }
//         }

//         console.log("Tinish belgilari soni: " + count);
//         return count;
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// countPunctuationMarks(`bog'dagi mevalar, nok, anor, nok`); 
// countPunctuationMarks("Bu satrda tinish belgisi yo'q."); 

// String 28
// function getFileName(filePath) {
//     if (typeof filePath === 'string') {
//         const pathArray = filePath.split('/');
//         const fileNameWithExtension = pathArray[pathArray.length - 1];
//         const fileNameArray = fileNameWithExtension.split('.');

//         if (fileNameArray.length > 1) {
//             const fileName = fileNameArray.slice(0, -1).join('.');
//             console.log("Faylning nomi: " + fileName);
//             return fileName;
//         } else {
//             console.log("Kengaytma topilmadi.");
//             return null;
//         }
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// getFileName("D:/Qudrat_c++/books/My_book.exe");
// getFileName("C:/Users/username/Documents/example.txt");

// String 29
// function getFileExtension(filePath) {
//     if (typeof filePath === 'string') {
//         const pathArray = filePath.split('/');
//         const fileNameWithExtension = pathArray[pathArray.length - 1];
//         const fileNameArray = fileNameWithExtension.split('.');

//         if (fileNameArray.length > 1) {
//             const fileExtension = fileNameArray[fileNameArray.length - 1];
//             console.log("Fayl kengaytmasi: " + fileExtension);
//             return fileExtension;
//         } else {
//             console.log("Kengaytma topilmadi.");
//             return null;
//         }
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// getFileExtension("D:/Qudrat_c++/books/My_book.exe");
// getFileExtension("C:/Users/username/Documents/example.txt");

// String 30
// function getLastFolderName(filePath) {
//     if (typeof filePath === 'string') {
//         const pathArray = filePath.split('/');
//         const lastFolderName = pathArray[pathArray.length - 2] || "/"; // Agar papka tub bo'lsa "/" belgisini chiqaradi
//         console.log("Oxirgi papka nomi: " + lastFolderName);
//         return lastFolderName;
//     } else {
//         console.log("Noto'g'ri qiymat! Satr kiritilmagan yoki noto'g'ri formatda kiritilgan.");
//         return null;
//     }
// }

// getLastFolderName("D:/Qudrat_c++/books/My_book.exe");
// getLastFolderName("/root/directory/file.txt");



























