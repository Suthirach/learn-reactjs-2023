// function Arrow ESC6

fullname=(fname,lname) => fname+lname;
alert(fullname("Suthirach","Tanjanthuek"));

// Object esc6 เดิม 
const custtomer = {
    custtomer : "สุทธิราช",
    age :25,
    add : "BKK"
}

console.log(custtomer);


//  ข้อความ 



let CUS = "ดญ.เบ้นซ์"
const address =
 `ชื่อลูกค้า : ${CUS}
ที่อยู่ : 44523/41
เบอร์โทรศัทพ์ : 0642293508`

console.log(address);

// spread Operator 
const colors = ["red","gree"]
const Allcolors = ["black", "blue",...colors]

const Newcolors = ["bro","green2"]
Allcolors.push(...Newcolors)



Allcolors.push(colors)

console.log(Allcolors);