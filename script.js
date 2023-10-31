const input1 = document.getElementById('in');
const output1 = document.getElementById('out');
const name1 = document.getElementById('name');

let data = {
    169 : 'Ayush',
    170 : 'Priyanshu',
    172 : 'Satyam',
    174 : 'Adarsh',
    178 : 'Aditya',
    179 : 'Abhishek',
    184 : 'Ashish',
    189 : 'Sudhanshu',
    191 : 'Sonu',
    194 : 'Sakshi',
    201 : 'Suryansh',
    202 : 'Suryansh(Jannu)',
    203 : 'Ashutosh',
    205 : 'Tanu',
    206 : 'Suruchi',
    208 : 'Aditya(Sikku)'
};

output1.addEventListener('click',()=>{
    
    let i1 = parseInt(input1.value);
    if(data[i1]!==undefined && !isNaN(i1)){
        name1.innerHTML =  `Welcome ${data[i1]}...`
        input1.value = '';
        document.body.style.backgroundColor = 'pink';
    }
    else{
        name1.innerHTML = "User Not Found..."
        input1.value = '';
        document.body.style.backgroundColor = 'red';
    }
    // input1.value = '  ';
});

input1.addEventListener('keydown',(e)=>{
    
    let i1 = parseInt(input1.value);
    if(e.key === 'Enter'){
        if(data[i1]!==undefined && !isNaN(i1)){
            name1.innerHTML =  `Welcome ${data[i1]}...`
            input1.value = '';
            document.body.style.backgroundColor = 'pink';
        }
        else{
            name1.innerHTML = "User Not Found..."
            input1.value = '';
            document.body.style.backgroundColor = 'red';
        }
    }
    // input1.value = '  ';
});