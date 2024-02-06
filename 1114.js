function showLoveMessage() {
    document.getElementById('loveButton').style.display = 'none';
    document.getElementById('loveMessage').innerHTML = 'Bom loves Noynha very much na rak fan mak mak EiEi';
    document.getElementById('fireworks').innerHTML = '<img src="fireworks.gif" alt="Fireworks" style="width: 100%; height: 100%;">';
    document.getElementById('hearts').innerHTML = generateHearts(30);
    setTimeout(function() {
      document.getElementById('fireworks').innerHTML = '';
      document.getElementById('hearts').innerHTML = '';
      document.getElementById('responseMessage').innerHTML = 'หมูหน่ารักบอมไหม';
      document.getElementById('loveResponse1').style.display = 'inline-block';
      document.getElementById('loveResponse2').style.display = 'inline-block';
    }, 2000);
  }
  
  function generateHearts(num) {
    let hearts = '';
    for (let i = 0; i < num; i++) {
      let heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 2 + 's';
      hearts += heart.outerHTML;
    }
    return hearts;
  }
  
  function showResponse(response) {
    document.getElementById('responseMessage').innerHTML = response;
    document.querySelectorAll('.responseButton').forEach(function(button) {
      button.style.display = 'none';
    });
    setTimeout(function() {
      document.getElementById('responseMessage').innerHTML = 'อูยหยอกๆ';
    }, 3000);
  }
  