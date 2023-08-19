// traiangle 
function traiangleValueById (inputX, inputY) {
     const inputXvalue =  parseFloat(document.getElementById(inputX).value)
     const inputYvalue = parseFloat(document.getElementById(inputY).value)
    //  console.log(typeof(inputXvalue));
     if(isNaN(inputXvalue) || isNaN(inputYvalue)){
        alert("not a number ")
        return;
     }
     else{
        let area = 0;
     area = 0.5 * inputXvalue * inputYvalue;
     return area;
     }
     }
     

document.getElementById('Calculate-btn').addEventListener('click',function () {
     let result = traiangleValueById ('input-x','input-y');
     document.getElementById('output-display').innerText = result + ' Cm';
 })

//  Rectangle

function rectangleArea(inputA ,inputB ){
    let areaOfRectangle = 0;
    areaOfRectangle = inputA * inputB;
    return areaOfRectangle;
}

document.getElementById('Calculate-btn-Rectangle').addEventListener('click', function(){
     const W = getInputValueById('input-x-Rectangle');
     const L = getInputValueById('input-y-Rectangle');
     const totalAreaOfrectangle = rectangleArea(W,L);
     document.getElementById('output-display-Rectangle').innerText = totalAreaOfrectangle;
})

