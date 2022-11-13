'use strict';

let clothesType = ['tShirt', 'pants', 'skirt'];
let color = ['blue', 'yellow', 'pink'];
let sex = ['female', 'male'];
let size = ['large', 'small'];

// 반복문을 이용해 모든 product의 배열 생성
// 반복문을 이용해 각 product 배열 안에 요소로 추가
// let product = {
//   clothesType: 'tShirt',
//   color: 'blue',
//   sex: 'female',
//   size: 'large',
// };

// class를 활용하기?
// class Product {
//   // constructor 생성자
//   constructor(clothesType, color, sex, size){
//     // fields
//     this.clothesType = clothesType;
//     this.color = color;
//     this.sex = sex;
//     this.size = size;
//   }
// }

// 2차원배열로 모든 상품 생성
var category = [
  clothesType,
  color,
  sex,
  size
];

var product = [];

for (var a in category[0]) {
  for (var b in category[1]) {
      for (var c in category[2]) {
        for (var d in category[3]) {
          console.log(category[0][a]+', '+category[1][b]+', '+category[2][c]+', '+category[3][d]);
          product.push([category[0][a], category[1][b], category[2][c], category[3][d]]);
        }
      }
  }
}

console.log(category);
console.log(product); //36개 제품

// product 36개 중 skirt(clothesType)는 male(sex)과 함께 매치될 수 없다.
for (let i = 0; i < product.length; i++) {
  if (product[i].includes('skirt') && product[i].includes('male')) {
    product.splice(i, 1);
    i = i - 1;
  }
}

console.log(product); // 30개 제품
