//File System:
// 1.Read File ----> it reads the file in our devices.

// var fs = require('fs');
// fs.readFile('./mynewfile1.txt',function(err,data){
//     if (err){
//         return console.log(err);
//     } else{
//       console.log(data.toString());
//     }
// });

// 2.Create File ----> methods -----> (i)-Append (ii)-write (iii)-open:

//Append File ---> it will create a  new file 

// var fs = require('fs');
// fs.appendFile('./salma.txt', 'I am Salma Shaik',function(err,data){
//     if (err) {
//         return console.log(err);
//     }
//     else{
//         console.log("File is Created and Saved!...")
//     }
// });

//Open File --->here it takes flag as a second argument to read write both etc...

var fs = require('fs');
fs.open('./salma.txt','r+',function(err,file){
    if (err) {
        return console.log("error");
    }
    else{
        console.log("File is Opened");
    }
});


//Write File ----> it writes a  content in a file...

var fs = require('fs');
fs.writeFile('./salma.txt','Hello Salma how are you?....',function(err,data){
    if (err) {
        return console.log('error');
    }
    else{
        console.log('Content is Write in File!...');
    }
});

//3.Update File ---> for updating the files in node

//4.Delete File ---> for deleting the files a files we use unlink() method

var fs = require('fs');
fs.unlink('./salma.txt',function(err,data){
    if (err){
        return console.log('error');
    }
    else{
        console.log('File is deleted Successfully....');
    }
});

//5.Rename File ---> it will rename the file name

var fs = require('fs');
fs.rename('./mynewfile1.txt','Index.txt',function(err,data){
    if (err){
        return console.log('error');
    }
    else{
        console.log('File is Renamed !...');
    }
});



              
