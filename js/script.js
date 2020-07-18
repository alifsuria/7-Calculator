$(document).ready(function(){
  let screen = document.querySelector(".screen");
  let button = $(".button");
  let btnClear = $(".btn-clear");
  let btnEqual = $(".btn-equal");

  button.each(function(item){
    $(this).click(function(e){
      let value = e.target.dataset.num; // same as $(e).attr("data-num");
      screen.value += value; // in jquery  ????
    })
  })

  btnEqual.on("click",function(){
    if(screen.value === ""){
      screen.value = "Enter Value";
      console.log(this)
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  })

  btnClear.click(function(){
    screen.value = "";
  })
})
