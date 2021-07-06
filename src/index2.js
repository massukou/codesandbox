//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7=[...arr4,...arr5];
// console.log(arr7);

//const nameArr = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name,index) => console.log(`${index}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけえ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const val1 = 1 < 0 ? `trueです` : `falseです`;
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === `number` ? num.toLocaleString() : `数値を入力してください`;
// console.log(formattedNum);

// const checkSum=(num1,num2)=>{
//   return num1+num2>100?`100オーバー`:`許容範囲内`;
// }
// console.log(checkSum(50,60));
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("true");
// }

// if (flag1 && flag2) {
//   console.log("false");
// }

//｜｜は左側がfalseなら右側を返すという意味
// const num = null;
// const fee = num || "金額未設定";
// console.log(fee);

//&&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
