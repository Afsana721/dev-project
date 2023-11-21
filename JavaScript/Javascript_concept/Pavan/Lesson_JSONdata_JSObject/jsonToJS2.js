let data = '{"name": "mkyong", "age" : 30, "address": {"streetAddress": "88 8nd Street", "city": "New York"}, "phoneNumber": [{"type": "home", "number": "111 111-1111"}, {"type":"fax", "number":"222 222-2222"}]}';


let jsObj = JSON.parse(data);

console.log(jsObj["age"]);
console.log(jsObj["address"].streetAddress);
console.log(jsObj.name, jsObj.address);
console.log(jsObj.phoneNumber[0].type);
console.log(jsObj.phoneNumber[0].number);