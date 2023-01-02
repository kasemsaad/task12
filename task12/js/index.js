var imgContainer=document.getElementById("x")
var imgChange=document.querySelectorAll(".m")
var show=document.getElementById('show')
var closebtn=document.getElementById("closebtn")
var rightarrow=document.getElementById("rightarrow")
var leftarrow=document.getElementById("leftarrow")
var imglist=Array.from(document.querySelectorAll('.col-md-4 img'))
var currentindex;
for(var i=0;i<imgChange.length;i++){
   imgChange[i].addEventListener('click',function(e){
      var imgsrc=e.target.getAttribute('src')
      imgContainer.setAttribute('src',imgsrc)
      show.classList.add('d-felx')
      show.classList.remove('d-none')
      // var currentimgsrc =e.target.getAttribute('src')
       currentindex = imglist.indexOf(e.target)
      
   })
}


closebtn.addEventListener('click', function close(){
   show.classList.add('d-none')
  })


  rightarrow.addEventListener('click', function rightarrow(){
   currentindex++
   currentindex>=imglist.length?currentindex=0:''
   var newimgsrc=imglist[currentindex].getAttribute('src')
   imgContainer.src=newimgsrc
   }
  )
  leftarrow.addEventListener('click', function leftarrow(){
   currentindex--
   currentindex==-1?currentindex=imglist.length -1:''
   var newimgsrc=imglist[currentindex].getAttribute('src')
   imgContainer.src=newimgsrc
   }
  )