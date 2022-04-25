$(document).ready( function() {
    let color;
    let x = parseInt(prompt("Please enter square size in px"));
    let maxElementsInRow;
    let maxElementsInCol;
  
    function checkInput(input){
      if( input <= 0 || isNaN(input)){
        alert ("Enter the correct number");
        x = parseInt(prompt("Please enter square size in px"));
      }
    }checkInput(x);
  
    function setSquare(a) {
      let color;
      let s = "";
      
       let maxElementsInRow = parseInt($(window).height() / x);
       let maxElementsInCol = parseInt($(window).width() / x);
       
       for (let row = 0; row <= maxElementsInRow - 1; row++){
        for (let col = 0; col <= maxElementsInCol - 1; col++){
          s += "<div class='square' data-col='"+col+"' data-row='"+row+"' style='width:"+a+"px; height:"+a+"px;'></div>";
        }   
      }
  
      $(".result").empty().append(s); 
    };
  
    $('#set_color').on("click", function(){
      color = $('.inp').val();
    });
  
     function changeColorSquare () {
      $(".square").on("click", function(){
        const row = +event.target.getAttribute("data-row");
        const col = +event.target.getAttribute("data-col");
        
       let maxElementsInRow = parseInt($(window).height() / x);
       let maxElementsInCol = parseInt($(window).width() / x);
        

       $(this).css('background-color', color);
  
      let coordinates = {
        left: {
          x: col - 1 > 0 ? col - 1 : 0,
          y: row
        },
        right: {
          x: col + 1 < maxElementsInCol ? col + 1 : 0,
          y: row
        },
        top: {
          x: col,
          y: row - 1 > 0 ? row - 1 : 0
        },
        bottom: {
          x: col,
          y: row + 1 < maxElementsInRow ? row + 1 : 0
        },
        topLeftDiagonal: {    
          x: col - 1 > 0 ? col - 1 : 0,
          y: row - 1 > 0 ? row - 1 : 0  
        },
        topRightDiagonal: {
          x: col + 1 < maxElementsInCol ? col + 1 : 0,
          y: row - 1 > 0 ? row - 1 : 0
        },
        bottomLeftDiagonal: {    
          x: col - 1 > 0 ? col - 1 : 0,
          y: row + 1 < maxElementsInRow ? row + 1 : 0  
        },
        bottomRightDiagonal: {    
          x: col + 1 < maxElementsInCol ? col + 1 : 0,
          y: row + 1 < maxElementsInRow ? row + 1 : 0  
        }
      }
      
      let coordinates1 = Object.values(coordinates);
  
      for (let coordinate of coordinates1) {
        $(`[data-row="${coordinate.y}"][data-col="${coordinate.x}"]`).css('background-color', color);
      }
  
      for (let x1 = (coordinates.right.x + 1), timeout = 500; x1 <= maxElementsInCol; x1++, timeout += 500) {
        setTimeout(function () { 
          $(`[data-row="${this.y}"][data-col="${this.x}"]`).css('background-color', this.color);
        }.bind({'y': coordinates.right.y, 'x': x1, 'color': color}), timeout);
      }

      for (let x2 = (coordinates.left.x - 1), timeout = 500; x2 >= 0; x2--, timeout += 500) {
        setTimeout(function () { 
          $(`[data-row="${this.y}"][data-col="${this.x}"]`).css('background-color', this.color);
        }.bind({'y': coordinates.right.y, 'x': x2, 'color': color}), timeout);
      }

      for (let y3 = (coordinates.top.y - 1), timeout = 500; y3 >= 0; y3--, timeout += 500) {
        setTimeout(function () { 
          $(`[data-row="${this.y}"][data-col="${this.x}"]`).css('background-color', this.color);
        }.bind({'y': y3, 'x': coordinates.top.x, 'color': color}), timeout);
      }

      for (let y4 = (coordinates.bottom.y + 1), timeout = 500; y4 <= maxElementsInRow; y4++, timeout += 500) {
        setTimeout(function () { 
          $(`[data-row="${this.y}"][data-col="${this.x}"]`).css('background-color', this.color);
        }.bind({'y': y4, 'x': coordinates.bottom.x, 'color': color}), timeout);
      }
  
      for (let y5 = (coordinates.topRightDiagonal.y - 1), x5 = (coordinates.topRightDiagonal.x + 1), timeout = 500; y5 >= 0 && x5 <= maxElementsInCol; y5--, x5++, timeout += 500) {
          setTimeout(function () {        
            $(`[data-row="${this.y}"][data-col="${this.x}"]`).css('background-color', this.color);
          }.bind({'y': y5, 'x': x5, 'color': color}), timeout);
      }

      for (let y6 = (coordinates.topLeftDiagonal.y - 1), x6 = (coordinates.topLeftDiagonal.x - 1), timeout = 500; y6 >= 0 && x6 >= 0; y6--, x6--, timeout += 500) {
        setTimeout(function () {        
          $(`[data-row="${this.y}"][data-col="${this.x}"]`).css('background-color', this.color);
        }.bind({'y': y6, 'x': x6, 'color': color}), timeout);
    }

    for (let y7 = (coordinates.bottomRightDiagonal.y + 1), x7 = (coordinates.bottomRightDiagonal.x + 1), timeout = 500; y7 <= maxElementsInRow && x7 <= maxElementsInCol; y7++, x7++, timeout += 500) {
        setTimeout(function () {        
          $(`[data-row="${this.y}"][data-col="${this.x}"]`).css('background-color', this.color);
        }.bind({'y': y7, 'x': x7, 'color': color}), timeout);
    }

    for (let y8 = (coordinates.bottomLeftDiagonal.y + 1), x8 = (coordinates.bottomLeftDiagonal.x - 1), timeout = 500; y8 <= maxElementsInRow && x8 >= 0; y8++, x8--, timeout += 500) {
        setTimeout(function () {        
          $(`[data-row="${this.y}"][data-col="${this.x}"]`).css('background-color', this.color);
        }.bind({'y': y8, 'x': x8, 'color': color}), timeout);
    }

    for (let x9 = (coordinates.right.x + 1), y9 = (coordinates.right.y + 1), timeout = 500; x9 <= maxElementsInCol; x9++, y9, timeout += 500) {
      setTimeout(function () { 
        $(`[data-row="${this.y}"][data-col="${this.x}"]`).css('background-color', this.color);
      }.bind({'y': y9, 'x': x9, 'color': color}), timeout);
    }

    for (let x10 = (coordinates.right.x + 1), y10 = (coordinates.right.y - 1), timeout = 500; x10 <= maxElementsInCol; x10++, y10, timeout += 500) {
      setTimeout(function () { 
        $(`[data-row="${this.y}"][data-col="${this.x}"]`).css('background-color', this.color);
      }.bind({'y': y10, 'x': x10, 'color': color}), timeout);
    }

    // for (let x11 = (coordinates.left.x + 1), y11 = (coordinates.left.y + 1), timeout = 500; x11 >= 0; x11++, y11, timeout += 500) {
    //   setTimeout(function () { 
    //     $(`[data-row="${this.y}"][data-col="${this.x}"]`).css('background-color', this.color);
    //   }.bind({'y': y11, 'x': x11, 'color': color}), timeout);
    // }

    // for (let x12 = (coordinates.left.x + 1), y12 = (coordinates.left.y - 1), timeout = 500; x12 >= 0; x12++, y12, timeout += 500) {
    //   setTimeout(function () { 
    //     $(`[data-row="${this.y}"][data-col="${this.x}"]`).css('background-color', this.color);
    //   }.bind({'y': y12, 'x': x12, 'color': color}), timeout);
    // }

     });
    };
  
     function removeColorSquare() {
      $('#restart').on('click', function(){
        $('.square').remove('background-color', color);
        $('.square').css('background-color', 'grey');
      });
     }
  
    $('#set_size').on("click", function() {
      let q = parseInt(prompt("Please enter square size in px"));
      checkInput(q);
      $('#set_square').click( function(){
        setSquare(q);
        changeColorSquare();
        removeColorSquare();
      });  
    });
  
    $('#set_square').on("click", function(){
      setSquare(x);
      changeColorSquare();
      removeColorSquare();
    });
  
  
  } );