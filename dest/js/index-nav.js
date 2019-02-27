window.onload = function(){
//利用ajax获取json数据：
   var data = $.ajax({
      type:"get",
      url:"../json/index-nav.json",
      async:true
   })
   //用done方法返回获取的数据：
   data.done(function(json){
      //console.log(json);
      var titleCon = "";
      var produceCon = "";
      //遍历对象：
      for(var attr in json){
         //console.log(json[attr]);
         //给title给一个自定义属性，以便后面通过自定义的属性获取相对应的值。
         titleCon += `<li cname='${attr}'><a href="list.html" id = "shouji">${json[attr].name}</a></li>`;
        // 遍历对象：
          for(var i in json[attr].list){
            //console.log(json[attr].list[i]);
           var pro = json[attr].list[i];
           //console.log(pro.src)
           produceCon += `<a id ="meizunote8" href="details.html"><img src="${pro.src}" alt="图片加载失败"><p>${pro.name}</p><p>  <i class="iconfont5">&#xe6a3;</i>${pro.price}</p></a>`;
          }         
      }
      $('.nav-hid-bottom').html(produceCon); 
      $('.nav-ul').html(titleCon);
                //添加鼠标移入事件：
                $('.nav-ul li:eq(0),.nav-ul li:eq(1),.nav-ul li:eq(2),.nav-ul li:eq(3),.nav-hid-bottom').mouseenter(function(){
                  $('.nav-ul li a').css('color','grey');
                  $('.iconfont1').css('color','deepskyblue');
                  $('.iconfont2').css('color','deepskyblue');
                  $('.iconfont3').css('color','deepskyblue');
                  $('#input').css('border','1px solid grey');
                 
                  //获取自定义属性的值
                     var cname = $(this).attr("cname");
                     //console.log(cname);
                   // console.log( json[cname].list);
                     var moveCon = "";
                     //便利对象：
                      for(var j in json[cname].list){
                        var proo = json[cname].list;
                     // console.log(proo[j]);
                      //console.log(proo[j].src)
                        moveCon += `<a id ="meizunote8" href="details.html"><img src="${proo[j].src}" alt="图片加载失败"><p>${proo[j].name}</p><p>  <i class="iconfont5">&#xe6a3;</i>${proo[j].price}</p></a>`;
                     } 
                     $('.nav-hidden').css('display','block');
                     $('.nav-hid-bottom').html(moveCon); 

                 })
                $('.nav-ul li:eq(0),.nav-ul li:eq(1),.nav-ul li:eq(2),.nav-ul li:eq(3),.nav-hid-bottom').mouseleave(function(){
                  $('.nav-ul li a').css('color','white');
                  $('.iconfont1').css('color','white');
                  $('.iconfont2').css('color','white');
                  $('.iconfont3').css('color','white');
                  $('#input').css('border','1px solid white');

                  //获取自定义属性的值
                     var cname = $(this).attr("cname");
                     //console.log(cname);
                   // console.log( json[cname].list);
                     var moveCon = "";
                     //便利对象：
                      for(var j in json[cname].list){
                        var proo = json[cname].list;
                       //console.log( proo[j]);
                      // console.log(proo[j].name);
                        moveCon += `<a id ="meizunote8" href="details.html"><img src="${proo[j].src}" alt="图片加载失败"><p>${proo[j].name}</p><p>  <i class="iconfont5">&#xe6a3;</i>${proo[j].price}</p></a>`;
                     } 
                     $('.nav-hidden').css('display','none');
                     $('.nav-hid-bottom').html(moveCon); 
                 })          
   })
}
