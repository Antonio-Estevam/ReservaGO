//let imgMenu = document.querySelector('#bt-menu');
//imgMenu.addEventListener('click',alerta());

function alerta(){
    alert();
}



let BtCriaEmp = document.querySelector('#criarEmp');

console.log(BtCriaEmp);

BtCriaEmp.addEventListener('click',()=>{
    window.location.href = "empresa.html";
});
