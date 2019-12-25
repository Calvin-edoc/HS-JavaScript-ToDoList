var data = JSON.parse(localStorage.getItem('listData')) || [];

var list = document.querySelector('.list');

updateList();

function addData(){
    var txt = document.querySelector('.text').value;
    if (txt == ''){return};
    var insert = {
        content: txt
    }

    data.push(insert);

    updateList();

    localStorage.setItem('listData', JSON.stringify(data));
    document.querySelector('.text').value = '';


};

function updateList(){
    var str = '';
    var strLen = data.length;
    for (var i = 0 ; i < strLen ; i++){
        str += '<li ><a href="#" data-num='+i+'><i class="fas fa-times"></i></a>'+data[i].content+'</li>'
    }

    list.innerHTML = str;
}

function delData(e){
    e.preventDefault();
    var num = e.target.parentNode.dataset.num;
    if (e.target.nodeName !== 'I'){return};
    data.splice(num,1);
    console.log(e.target.nodeName);
    updateList();
    
    
    localStorage.setItem('listData', JSON.stringify(data));

}




var btnAdd = document.querySelector('.btnAdd');

btnAdd.addEventListener('click',addData);

var btnDel = document.querySelector('ul');

btnDel.addEventListener('click',delData);

