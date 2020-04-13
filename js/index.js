$(function () {
  // 暂停音乐
  $('.musicSpan1').on('click', function () {
    $('#bgMusic').get(0).pause()
    $(this).hide().siblings().show()
  })
  //播放音乐
  $('.musicSpan2').on('click', function () {
    $('#bgMusic').get(0).play()
    $(this).hide().siblings().show()

  })
  //点击li 滚动到相应页面
  $('.btn,.navList li:nth-child(1),.xsnavbar .xsUl li:nth-child(1)').on('click', function () {
    $('html,body').animate({ scrollTop: $('#section2').offset().top + 10 }, 800)
    $('.xsUl').hide()
  })
  $('.navList li:nth-child(2),.xsnavbar .xsUl li:nth-child(2)').on('click', function () {
    $('html,body').animate({ scrollTop: $('#section3').offset().top + 10 }, 800)
    $('.xsUl').hide()
  })
  $('.navList li:nth-child(3),.xsnavbar .xsUl li:nth-child(3)').on('click', function () {
    $('html,body').animate({ scrollTop: $('#section4').offset().top + 10 }, 800)
    $('.xsUl').hide()
  })
  $('.navList li:nth-child(4),.xsnavbar .xsUl li:nth-child(4)').on('click', function () {
    $('html,body').animate({ scrollTop: $('#section5').offset().top + 10 }, 800)
    $('.xsUl').hide()
  })
  $('.navList li:nth-child(5),.xsnavbar .xsUl li:nth-child(5)').on('click', function () {
    $('html,body').animate({ scrollTop: $('#section6').offset().top + 10 }, 800)
    $('.xsUl').hide()
  })
  //点击li 添加active 类
  $('.navList li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
  //统计图
  var ctx = $('#myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'Jquery', 'Vue'],
      datasets: [{
        label: '比例',
        data: [90, 90, 85, 80, 80],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            beginAtZero: true,
            // stepSize: 10,
            callback: function (value) {
              return value + '%';
            }
          }
        }]
      }
    }
  });
  //监听滚动 
  $(document).scroll(function () {
    let scroH = $(document).scrollTop();//滚动高度
    var viewH = $(window).height();  //可见高度 
    var contentH = $(document).height();  //内容高度
    let section2H = $('#section2').offset().top
    let section3H = $('#section3').offset().top
    let section4H = $('#section4').offset().top
    let section5H = $('#section5').offset().top
    let section6H = $('#section6').offset().top
    if (scroH > 0) {
      $('.navbar').addClass('navClass')
    } else {
      $('.navbar').removeClass('navClass')
    }
    if (scroH > section2H) {
      $('#backTop').show()
    } else {
      $('#backTop').hide()
    }
    if (scroH < 100) {
      $('.navList ul').children('li').removeClass('active')
    } else if (scroH >= section2H && scroH < section3H) {
      $('.navList li:nth-child(1)').addClass('active').siblings().removeClass('active')
    } else if (scroH >= section3H && scroH < section4H) {
      $('.navList li:nth-child(2)').addClass('active').siblings().removeClass('active')
    } else if (scroH >= section4H && scroH < section5H) {
      $('.navList li:nth-child(3)').addClass('active').siblings().removeClass('active')
    } else if (scroH >= section5H && scroH < section6H) {
      $('.navList li:nth-child(4)').addClass('active').siblings().removeClass('active')
    }
    if (contentH - (scroH + viewH) <= 100) {  //距离底部高度小于100px
      $('.navList li:nth-child(5)').addClass('active').siblings().removeClass('active')
    }
  })
  //回到顶部
  $('#backTop').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 800)
  })
  // 点击btnlist 显示下拉菜单
  $('.btnlist').on('click', function () {
    $('.xsUl').toggle()
  })


})