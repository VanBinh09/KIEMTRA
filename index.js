// 1. Nêu các cách khai báo biến.
// var ,let,const
//-------------------------------------------------------
// 2.Các kiểu dữ liệu đã được học (Nêu ví dụ về giá trị của chúng).
// Number= 1,2,3,4,,5,-3
// string : "trang ,bình,anh,linh"
//boolean
//null
//undefined


//-------------------------------------------------------
// 3.Làm sao để quy định kiểu dữ liệu cho 1 biến ?
//sử dụng dấu " = " ggeer gán kiểu dữ liệu cho 1 biến
/*-----------------------------------------------*/
// 4. Có những cách nào để hiển thị chữ hello ra từ JS (kèm ví dụ)
// alert('Hello');More actions
//  document.write('Hello');
//  console.log('Hello');
// <tagname>.innerHTML = 'Hello';
//----------------------------------------------
// 5. Có những cách nào để nhập vào biến a với JS (kèm ví dụ)
// 1- let a = 'Hello';
// 2- let a = prompt('Nhap vao gia tri bien a');
// 3- let a = document.getElementById('#tagid').value;
//----------------------------------------------------------------
// 6, In ra giao diện tương ứng thẻ h1, img, a từ JS (Ví dụ thay 1 link bất kì từ Js cho thẻ a).
// 7. Nhập vào đường dẫn ảnh cho biến một biến bất kì, sau đó in ra ảnh với nguồn ảnh đó.

// const btn = document.getElementById('button');
//  let link = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvkfVc3qX1xVVO0Yu5Vi9L_v5aGy_tZon8uORJ9fetFaOTzdxsavRWhNAnZ2-yhcI2l045q1pM0zKrdInDEZQUow";
//  btn.addEventListener('click', () => {
//     document.write(`<a href=${link} target="_blank"><img src=${link} alt="MTP"></a>`);
//  });





//----------------------------------------------------------------------------------
// 8. Nhập vào tuổi trong biến age, in ra 'Đủ tuổi' nếu age >= 18.
// let age =+prompt();
// if(age>= 18){
//     console.log("đủ tuổi")
// }else{
//     console.log("không đủ tuổi")
// }
// 9. Nhập vào a, b. Nếu a > b in ra tổng, nếu a < b in ra tích, nếu a = b in ra 'a=b'
// let a= +prompt();
// let b = +prompt();
// if(a>b){
//     console.log("tổng là:" + a+b );
// }  else if (a<b){
//     console.log("tích la:" + a*b);
// }else{
//     console.log("a = b");
// }

// 10. Nhập a ,b ,c . In ra số lớn nhất.
// let a= +prompt("nhap so a:");
// let b = +prompt("nhap so b:");
// let c = +prompt("nhap so c:");
// let max = a;
//  if (b > max) max = b;
// if (c > max) max = c;
// console.log("so lon nhat la:"+max);
//---------------------------------------------------------------------------------
// 11. In ra 100 với các lượt lẻ thì in ra 'Hello', và chẵn in ra 'Hi'.
//  for (let i = 1; i <= 100; i++) {
//       if (i % 2 === 1) {
//         console.log(i + ": Hello");
//       } else {
//         console.log(i + ": Hi");
//       }
//     }
//----------------------------------------------
// 12. Nhập vào N từ prompt. In ra N lần chữ 'Hello'.
// let N = +prompt("nhap vao N:")
// for(let i =1;i<=N;i++){  
//     console.log( i  + "  " +"hello "   )
// }
// 13. In ra các số từ a đến b (nâng cao a, b nhập từ input).
// 14. In ra các số từ a đến b,số chẵn trong h2 và số lẻ trong h1.
// let a = +(prompt("Nhập a:"));
// let b = +(prompt("Nhập b:"));

// for (let i = a; i <= b; i++) {
//     if (i % 2 === 0) {
//         document.write(`<h2>${i}</h2>`);
//     } else {
//         document.write(`<h1>${i}</h1>`);
//     }
// }
// 15. Tính trung bình cộng các số chia 5 dư 2 từ a đến b.
// let a = +(prompt("Nhập a:"));
// let b = +(prompt("Nhập b:"));
// let sum = 0, count = 0;

        // for (let i = a; i <= b; i++) {
        //     if (i % 5 == 2) {
        //         sum += i;
        //         count++;
        //     }
        // }

        // if (count > 0) {
        //     console.log("Trung bình cộng: " + (sum / count));
        // } else {
        //    console.log("Không có số nào chia 5 dư 2 trong đoạn này.");
        // }
// 16. Cho 1 mảng bất kì. In ra các phần tử chẵn trong h2, lẻ trong h1 trong mảng.
let arr = [3, 6, 7, 10, 13, 22];

// for (let num of arr) {
//     if (num % 2 === 0) {
//         document.write(`<h2>${num}</h2>`);
//     } else {
//         document.write(`<h1>${num}</h1>`);
//     }
// }
// 17. Tính trung bình cộng các số chia 5 dư 2 các phần tử trong mảng.
// let sum = 0, count = 0;
// for (let num of arr) {
//     if (num % 5 == 2) {
//             sum += num;
//            count++;
//         }
//  }

//  if (count > 0) {
//      console.log("Trung bình cộng: " + (sum / count));
//      } else {
//        console.log("Không có số nào chia 5 dư 2 trong đoạn này.");
//  }

// 18. Cho một mảng bất kì đếm số lượng số nguyên tố có trong mảng.
// let count = 0;
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     let n = arr[i];
//     let isPrime = true;

//     if (n < 2) {
//         isPrime = false;
//     } else {
//         for (let j = 2; j <= Math.sqrt(n); j++) {
//             if (n % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }

//     if (isPrime) {
//         count++;
//     }
// }
// console.log("số lượng số nt trong mảng là:"+  count   )
// 19. Nhập vao a, tìm vị trí của a trong mảng.
// let a=+prompt("nhap so a:");
// console.log(arr);
// let timthay = false;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === a) {
//         console.log("Tìm thấy tại vị trí: " + i);
//         timthay = true;
//     }
// }

// if (!timthay) {
//      console.log("Tìm thấy tại vị trí: " + i );
// }



// Nâng cao:
// 20.Tìm min thứ hai trong mảng.

// 21. Tìm min của các phần tử chẵn trong mảng.
// 22. Tìm các vị trí của min trong mảng.