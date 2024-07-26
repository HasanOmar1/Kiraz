// This was used to filter products by color or size,
// but i changed it to filter using server request and queries

// import { useState } from "react";
// import * as Types from "../types/ClothesTypes";

// const useFilteredArray = (array?: Types.Clothes[]) => {
//   const [isColorChecked, setIsColorChecked] = useState({
//     green: false,
//     black: false,
//     blue: false,
//   });
//   const [isSizeChecked, setIsSizeChecked] = useState({
//     L: false,
//     M: false,
//     S: false,
//   });

//   //  ART
//   const filteredArray = array?.filter((pants: Types.Clothes) => {
//     if (
//       isColorChecked.green &&
//       isColorChecked.black &&
//       isColorChecked.blue &&
//       isSizeChecked.L &&
//       isSizeChecked.M &&
//       isSizeChecked.S
//     ) {
//       return (
//         (pants.color === "green" ||
//           pants.color === "black" ||
//           pants.color === "blue") &&
//         (pants.size === "L" || pants.size === "M" || pants.size === "S")
//       );
//     }

//     if (
//       isColorChecked.green &&
//       isColorChecked.black &&
//       isColorChecked.blue &&
//       isSizeChecked.L &&
//       isSizeChecked.M
//     ) {
//       return (
//         (pants.color === "green" ||
//           pants.color === "black" ||
//           pants.color === "blue") &&
//         (pants.size === "L" || pants.size === "M")
//       );
//     }

//     if (
//       isColorChecked.green &&
//       isColorChecked.black &&
//       isColorChecked.blue &&
//       isSizeChecked.L &&
//       isSizeChecked.S
//     ) {
//       return (
//         (pants.color === "green" ||
//           pants.color === "black" ||
//           pants.color === "blue") &&
//         (pants.size === "L" || pants.size === "S")
//       );
//     }

//     if (
//       isColorChecked.green &&
//       isColorChecked.black &&
//       isColorChecked.blue &&
//       isSizeChecked.M &&
//       isSizeChecked.S
//     ) {
//       return (
//         (pants.color === "green" ||
//           pants.color === "black" ||
//           pants.color === "blue") &&
//         (pants.size === "M" || pants.size === "S")
//       );
//     }
//     //
//     if (
//       isColorChecked.green &&
//       isColorChecked.black &&
//       isColorChecked.blue &&
//       isSizeChecked.L
//     ) {
//       return (
//         (pants.color === "green" ||
//           pants.color === "black" ||
//           pants.color === "blue") &&
//         pants.size === "L"
//       );
//     }

//     if (
//       isColorChecked.green &&
//       isColorChecked.black &&
//       isColorChecked.blue &&
//       isSizeChecked.M
//     ) {
//       return (
//         (pants.color === "green" ||
//           pants.color === "black" ||
//           pants.color === "blue") &&
//         pants.size === "M"
//       );
//     }

//     if (
//       isColorChecked.green &&
//       isColorChecked.black &&
//       isColorChecked.blue &&
//       isSizeChecked.S
//     ) {
//       return (
//         (pants.color === "green" ||
//           pants.color === "black" ||
//           pants.color === "blue") &&
//         pants.size === "S"
//       );
//     }

//     //
//     // 2 COLORS 3 SIZES
//     if (
//       isColorChecked.green &&
//       isColorChecked.black &&
//       isSizeChecked.L &&
//       isSizeChecked.M &&
//       isSizeChecked.S
//     ) {
//       return (
//         (pants.color === "green" || pants.color === "black") &&
//         (pants.size === "L" || pants.size === "M" || pants.size === "S")
//       );
//     }

//     if (
//       isColorChecked.green &&
//       isColorChecked.blue &&
//       isSizeChecked.L &&
//       isSizeChecked.M &&
//       isSizeChecked.S
//     ) {
//       return (
//         (pants.color === "green" || pants.color === "blue") &&
//         (pants.size === "L" || pants.size === "M" || pants.size === "S")
//       );
//     }

//     if (
//       isColorChecked.black &&
//       isColorChecked.blue &&
//       isSizeChecked.L &&
//       isSizeChecked.M &&
//       isSizeChecked.S
//     ) {
//       return (
//         (pants.color === "black" || pants.color === "blue") &&
//         (pants.size === "L" || pants.size === "M" || pants.size === "S")
//       );
//     }
//     //  2 SIZES L/M  2 COLORS

//     if (
//       isColorChecked.green &&
//       isColorChecked.black &&
//       isSizeChecked.L &&
//       isSizeChecked.M
//     ) {
//       return (
//         (pants.color === "green" || pants.color === "black") &&
//         (pants.size === "L" || pants.size === "M")
//       );
//     }
//     if (
//       isColorChecked.green &&
//       isColorChecked.blue &&
//       isSizeChecked.L &&
//       isSizeChecked.M
//     ) {
//       return (
//         (pants.color === "green" || pants.color === "blue") &&
//         (pants.size === "L" || pants.size === "M")
//       );
//     }

//     if (
//       isColorChecked.black &&
//       isColorChecked.blue &&
//       isSizeChecked.L &&
//       isSizeChecked.M
//     ) {
//       return (
//         (pants.color === "black" || pants.color === "blue") &&
//         (pants.size === "L" || pants.size === "M")
//       );
//     }
//     //

//     if (
//       isColorChecked.green &&
//       isColorChecked.black &&
//       isSizeChecked.L &&
//       isSizeChecked.S
//     ) {
//       return (
//         (pants.color === "green" || pants.color === "black") &&
//         (pants.size === "L" || pants.size === "S")
//       );
//     }

//     if (
//       isColorChecked.green &&
//       isColorChecked.blue &&
//       isSizeChecked.L &&
//       isSizeChecked.S
//     ) {
//       return (
//         (pants.color === "green" || pants.color === "blue") &&
//         (pants.size === "L" || pants.size === "S")
//       );
//     }

//     if (
//       isColorChecked.black &&
//       isColorChecked.blue &&
//       isSizeChecked.L &&
//       isSizeChecked.S
//     ) {
//       return (
//         (pants.color === "black" || pants.color === "blue") &&
//         (pants.size === "L" || pants.size === "S")
//       );
//     }

//     //

//     if (
//       isColorChecked.green &&
//       isColorChecked.black &&
//       isSizeChecked.S &&
//       isSizeChecked.M
//     ) {
//       return (
//         (pants.color === "green" || pants.color === "black") &&
//         (pants.size === "S" || pants.size === "M")
//       );
//     }

//     if (
//       isColorChecked.green &&
//       isColorChecked.blue &&
//       isSizeChecked.S &&
//       isSizeChecked.M
//     ) {
//       return (
//         (pants.color === "green" || pants.color === "blue") &&
//         (pants.size === "S" || pants.size === "M")
//       );
//     }

//     if (
//       isColorChecked.black &&
//       isColorChecked.blue &&
//       isSizeChecked.S &&
//       isSizeChecked.M
//     ) {
//       return (
//         (pants.color === "black" || pants.color === "blue") &&
//         (pants.size === "S" || pants.size === "M")
//       );
//     }
//     //

//     if (isColorChecked.green && isColorChecked.black && isSizeChecked.L) {
//       return (
//         (pants.color === "green" || pants.color === "black") &&
//         pants.size === "L"
//       );
//     }

//     if (isColorChecked.green && isColorChecked.blue && isSizeChecked.L) {
//       return (
//         (pants.color === "green" || pants.color === "blue") &&
//         pants.size === "L"
//       );
//     }

//     if (isColorChecked.black && isColorChecked.blue && isSizeChecked.L) {
//       return (
//         (pants.color === "black" || pants.color === "blue") &&
//         pants.size === "L"
//       );
//     }

//     //
//     if (isColorChecked.green && isColorChecked.black && isSizeChecked.M) {
//       return (
//         (pants.color === "green" || pants.color === "black") &&
//         pants.size === "M"
//       );
//     }

//     if (isColorChecked.green && isColorChecked.blue && isSizeChecked.M) {
//       return (
//         (pants.color === "green" || pants.color === "blue") &&
//         pants.size === "M"
//       );
//     }

//     if (isColorChecked.black && isColorChecked.blue && isSizeChecked.M) {
//       return (
//         (pants.color === "black" || pants.color === "blue") &&
//         pants.size === "M"
//       );
//     }

//     //

//     if (isColorChecked.green && isColorChecked.black && isSizeChecked.S) {
//       return (
//         (pants.color === "green" || pants.color === "black") &&
//         pants.size === "S"
//       );
//     }

//     if (isColorChecked.green && isColorChecked.blue && isSizeChecked.S) {
//       return (
//         (pants.color === "green" || pants.color === "blue") &&
//         pants.size === "S"
//       );
//     }

//     if (isColorChecked.black && isColorChecked.blue && isSizeChecked.S) {
//       return (
//         (pants.color === "black" || pants.color === "blue") &&
//         pants.size === "S"
//       );
//     }
//     //

//     if (isColorChecked.green && isColorChecked.black && isColorChecked.blue) {
//       return (
//         pants.color === "green" ||
//         pants.color === "black" ||
//         pants.color === "blue"
//       );
//     }

//     if (isColorChecked.green && isColorChecked.black) {
//       return pants.color === "green" || pants.color === "black";
//     }

//     if (isColorChecked.green && isColorChecked.blue) {
//       return pants.color === "green" || pants.color === "blue";
//     }

//     if (isColorChecked.black && isColorChecked.blue) {
//       return pants.color === "black" || pants.color === "blue";
//     }

//     //
//     if (
//       isColorChecked.green &&
//       isSizeChecked.L &&
//       isSizeChecked.M &&
//       isSizeChecked.S
//     ) {
//       return (
//         pants.color === "green" &&
//         (pants.size === "L" || pants.size === "M" || pants.size === "S")
//       );
//     }
//     if (
//       isColorChecked.black &&
//       isSizeChecked.L &&
//       isSizeChecked.M &&
//       isSizeChecked.S
//     ) {
//       return (
//         pants.color === "black" &&
//         (pants.size === "L" || pants.size === "M" || pants.size === "S")
//       );
//     }

//     if (
//       isColorChecked.blue &&
//       isSizeChecked.L &&
//       isSizeChecked.M &&
//       isSizeChecked.S
//     ) {
//       return (
//         pants.color === "blue" &&
//         (pants.size === "L" || pants.size === "M" || pants.size === "S")
//       );
//     }

//     //
//     if (isColorChecked.green && isSizeChecked.L && isSizeChecked.M) {
//       return (
//         pants.color === "green" && (pants.size === "L" || pants.size === "M")
//       );
//     }

//     if (isColorChecked.blue && isSizeChecked.L && isSizeChecked.M) {
//       return (
//         pants.color === "blue" && (pants.size === "L" || pants.size === "M")
//       );
//     }

//     if (isColorChecked.black && isSizeChecked.L && isSizeChecked.M) {
//       return (
//         pants.color === "black" && (pants.size === "L" || pants.size === "M")
//       );
//     }
//     //
//     if (isColorChecked.green && isSizeChecked.L && isSizeChecked.S) {
//       return (
//         pants.color === "green" && (pants.size === "L" || pants.size === "S")
//       );
//     }

//     if (isColorChecked.blue && isSizeChecked.L && isSizeChecked.S) {
//       return (
//         pants.color === "blue" && (pants.size === "L" || pants.size === "S")
//       );
//     }

//     if (isColorChecked.black && isSizeChecked.L && isSizeChecked.S) {
//       return (
//         pants.color === "black" && (pants.size === "L" || pants.size === "S")
//       );
//     }

//     //
//     if (isColorChecked.green && isSizeChecked.S && isSizeChecked.M) {
//       return (
//         pants.color === "green" && (pants.size === "S" || pants.size === "M")
//       );
//     }

//     if (isColorChecked.blue && isSizeChecked.S && isSizeChecked.M) {
//       return (
//         pants.color === "blue" && (pants.size === "S" || pants.size === "M")
//       );
//     }

//     if (isColorChecked.black && isSizeChecked.S && isSizeChecked.M) {
//       return (
//         pants.color === "black" && (pants.size === "S" || pants.size === "M")
//       );
//     }

//     //
//     if (isColorChecked.green && isSizeChecked.L) {
//       return pants.color === "green" && pants.size === "L";
//     }

//     if (isColorChecked.blue && isSizeChecked.L) {
//       return pants.color === "blue" && pants.size === "L";
//     }

//     if (isColorChecked.black && isSizeChecked.L) {
//       return pants.color === "black" && pants.size === "L";
//     }

//     //
//     if (isColorChecked.green && isSizeChecked.M) {
//       return pants.color === "green" && pants.size === "M";
//     }

//     if (isColorChecked.blue && isSizeChecked.M) {
//       return pants.color === "blue" && pants.size === "M";
//     }

//     if (isColorChecked.black && isSizeChecked.M) {
//       return pants.color === "black" && pants.size === "M";
//     }
//     //
//     if (isColorChecked.green && isSizeChecked.S) {
//       return pants.color === "green" && pants.size === "S";
//     }

//     if (isColorChecked.blue && isSizeChecked.S) {
//       return pants.color === "blue" && pants.size === "S";
//     }

//     if (isColorChecked.black && isSizeChecked.S) {
//       return pants.color === "black" && pants.size === "S";
//     }

//     if (isColorChecked.green) return pants.color === "green";
//     if (isColorChecked.blue) return pants.color === "blue";
//     if (isColorChecked.black) return pants.color === "black";
//     //

//     if (isSizeChecked.L && isSizeChecked.M && isSizeChecked.S) {
//       return pants.size === "L" || pants.size === "M" || pants.size === "S";
//     }

//     if (isSizeChecked.L && isSizeChecked.M) {
//       return pants.size === "L" || pants.size === "M";
//     }
//     if (isSizeChecked.L && isSizeChecked.S) {
//       return pants.size === "L" || pants.size === "S";
//     }
//     if (isSizeChecked.S && isSizeChecked.M) {
//       return pants.size === "S" || pants.size === "M";
//     }
//     //
//     if (isSizeChecked.L) return pants.size === "L";
//     if (isSizeChecked.M) return pants.size === "M";
//     if (isSizeChecked.S) return pants.size === "S";

//     return pants;
//   });
//   return {
//     filteredArray,
//     isSizeChecked,
//     isColorChecked,
//     setIsColorChecked,
//     setIsSizeChecked,
//   };
// };

// export default useFilteredArray;
