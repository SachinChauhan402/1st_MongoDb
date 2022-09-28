// const os = require("os");
// console.log(" the free memory in gb:  ", os.freemem()/1024/1024/1024);
// console.log('total memory in gb:  ', os.totalmem()/1024/1024/1024);
// console.log("version" , os.version());
// console.log('cpu is ', os.cpus());

const fs = require('fs');

// let quote = "hi!!, my name is sachin";

// fs.writeFile('./newfile.html', quote, (err) => 
//         {console.log("file upload comleted")
//     }
// );
// let quote = "new file has been created";
// const [ , , noOFFiles] = process.argv;

// for(let i =0; i<=noOFFiles; i++){
   
//     fs.writeFile(`./backup/text ${i}.html`, quote, (err) =>{
//         console.log("heloo i m the new file, welcome")
//     })

// };



// console.log(process.argv);
// const quote = 'i am the append file'
// fs.appendFile('./newfile.html', '\n'+quote, (err)=>{
//     console.log('append is done')
// })

fs.unlink('./newfile.html', (err)=>{
    if(err){
        console.log('error found')
    } else{
        console.log('deleted successfully')
    }
});


