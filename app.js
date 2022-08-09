// 1.Khởi tạo một biến có tên sản phẩm, 
// chứa một mảng sản phẩm, mỗi sản phẩm có
// tên, giá, thương hiệu, danh mục và màu sắc
let products = [
    {
        Name:"Sony Xperia XZ Premium",
        Brand:"Sony",
        Price:"4428",
        Color:"White",
        Category:"charger",
    },
    {
        Name:"OPPO F3 Plus", 
        Brand:"OPPO",
        Price:"5487",
        Color:"Black",
        Category:"Phone",
    },
    {
        Name:"IPhone 13 Pro max",
        Brand:"Apple",
        Price:"21490",
        Color:"Gray",
        Category:"Phone",
    },
    {
        Name:"Samsung Galaxy S8",  
        Brand:"Samsung",
        Price:"8490",
        Color:"Blue",
        Category:"Phone",
    }
];

// //1.1 In name và price của tất cả các sản phẩm
// for(let i = 0; i < products.length; i++){
//     console.log(`#${i} Name: ${products[i].Name}`);
//     console.log(`Price: ${products[i].Price}`);
//     console.log(`-----------------------`);
// }
// // 1.2 Viết script in / đăng xuất sản phẩm với số của chúng,
// // sau đó in đăng xuất thông tin chi tiết của sản phẩm 
// // với vị trí của sản phẩm do người dùng nhập
// let userInput = Number(prompt("Nhập thông tin sản phẩm muốn tra cứu ở vị trí số"));
//     console.log(`Name : ${products[userInput].Name}`);
//     console.log(`Brand : ${products[userInput].Brand}`);
//     console.log(`Price : ${products[userInput].Price}`);
//     console.log(`Color : ${products[userInput].Color}`);
//     console.log(`Category : ${products[userInput].Category}`);
//     console.log(`-----------------------`);

// 1.3 Viết tập lệnh in các sản phẩm dựa trên danh mục do người dùng nhập
// let userInput1 = prompt("Danh mục do người dùng nhập");
// if(userInput1 === "charger"){
//     products[0].Name = "Sony CP - AB100";
//     console.log(`Name : ${products[0].Name}`);
//     console.log(`Price : ${products[0].Price}`);
//     console.log(`------------------------`);
// }else{
//     for (let j = 0; j < products.length; j++){
//         console.log(`Name : ${products[j+1].Name}`);
//         console.log(`Price : ${products[j+1].Price}`);
//         console.log(`------------------------`);
//     }
// }

// 1.4  Thêm nhà cung cấp vào từng sản phẩm
// products = [
// products[0].Providers = "Phukienso",
// products[1].Providers = "Tgdd",
// products[2].Providers = "Tgdd",
// products[3].Providers = "Tgdd",];
// for(let y = 0; y < products.length; y++){
//     console.log(`#${y} Name : ${products[y].Name}`);
//     console.log(`Price : ${products[y].Price}`);
//     console.log(`Providers : ${products[y].Providers}`);
//     console.log(`-----------------------`);
// }
// 1.5 (Tùy chọn) Tìm kiếm sản phẩm dựa trên nhà cung cấp mong muốn
// do người dùng nhập, nếu bạn cần thêm hướng dẫn, 
// hãy tìm gợi ý ở cuối bài tập này
// products = [
// products[0].Providers = "Phukienso",
// products[1].Providers = "Tgdd",
// products[2].Providers = "Tgdd",
// products[3].Providers = "Tgdd",];
let user = prompt("Nhập các nhà cung cấp");
let tmp = {};
for(let i = 0; i < products.length; i++ ){
}
if(user === "Phukienso"){
    console.log(products[0].Name);
}// }else{
//     for (let j = 0; j < products.length; j++){
//         console.log(`Name : ${products[i+1].Name}`);
//         console.log(`Price : ${products[i+1].Price}`);
//         console.log(`------------------------`);
//     }
// }