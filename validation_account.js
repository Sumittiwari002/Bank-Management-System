function element(record){
    return document.querySelector(record);
}

function elements(record){
    return document.querySelectorAll(record);
}

function set(record, data){
    element(record).value = data;
}

function get(record){
    return element(record).value;
}

function lower(data){
    return data.toLowerCase();
}

function setValue(key, value){
    localStorage.setItem(key,value);
}
function getValue(key){
    return localStorage.getItem(key);
}

function parse(dataset){
    return JSON.parse(dataset);
}

function stringify(dataset){
    return JSON.stringify(dataset);
}

function create(el){
    return document.createElement(el)
}

function setMessage(record,value){
    element(record).innerHTML = value;
}
function empty(record){
    // console.log(record);
    
    let ans = record.filter(val=> val=="");
    // console.log(ans);
    
    return (ans.length>0)?true:false;
}
    // if(ans.length>0){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    // function checkNumber(record){
    //     let ans = record.filter(val=>)
    // }
    function fetchDataUl(record, target, functionName){
        if(record!== null){
            let arr = parse(record);
            // console.log(arr);
        for(let val of arr){
            let liTag = create('li');
            // console.log(liTag);
            liTag.innerHTML = val;

            if(functionName == 'getMessage'){
                liTag.addEventListener('click', getMessage)
            }
            else if(functionName= 'getContact'){
                liTag.addEventListener('click', getContact);
            }
            element(target).append(liTag);
            
        }
            
        }
    }
    function getMessage(){
        console.log('get Message tested');
        
    }
    function getContact(){
        console.log('get contact tested', this.innerText);
        let result = getValue('contactDetails');
        console.log(result);

        if(result !== null)
        {
            result = parse(result);
            console.log(result);
            let valueContact = result.filter(obj => obj.groupName==this.innerText);
            console.log(valueContact);

            element("#all_contact").innerHTML = '';
            for(let val of valueContact){
                let liTag = create('li');
                console.log(liTag);
                liTag.innerHTML = val.name;
                element("#all_contact").append(liTag);
                
            }

        }
        
    }
    function fetchDataOption(name,account,target){
        if(name!==null && account!==null){
            let arrName = parse(name);
            let arrAccount = parse(account);
            // console.log(arr);

            for(let i in arrName){
                let liTag = create('option');
                // console.log(liTag);
                let lastfour = arrAccount[i].slice(-4);
                liTag.innerHTML = `${arrName[i]} - ${lastfour}`;
                liTag.value = arrAccount[i];
                element(target).append(liTag);
                
            }
            
        }
    }
    function checkNumber(record){
        let ans = record.filter(val=> isNaN(val));
        // console.log(ans);
        return (ans.length>0)?true:false;

        // if(ans.length>0){
        //     return true;
        // }
        // else{
        //     return false;
        // } 
    }
    function checkNegative(record){
        let ans = record.filter(val=> val<=0);
        // console.log(ans);
        return (ans.length>0)?true:false;
        
    }
    function validate(data)
    {
        const RegExp = /^[1-9]\d{8,17}$/;

        return RegExp.test(data);
    }

    function isUnique(data){
        let acc_no = parse(getValue('account_no'));
        if(acc_no.includes(data))
            return false;
        else
            return true;
    }

export{
    element,
    elements,
    set,isUnique,
    get,
    lower,
    setValue,
    getValue,
    parse,validate,
    stringify, create, setMessage, empty,fetchDataUl,checkNumber,checkNegative, getMessage,fetchDataOption
}