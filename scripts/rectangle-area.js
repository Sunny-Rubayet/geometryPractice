function calculateRectangleArea(){

    // base value

    const widthField=document.getElementById('rectangle-field');
    const widthValueText=widthField.value;
    const width=parseFloat(widthValueText);
    widthField.value='';
    console.log(width);

    // Height value

    const lengthField=document.getElementById('length-field');
    const lengthValueText=lengthField.value;
    const length=parseFloat(lengthValueText);
    lengthField.value='';
    console.log(length);

    const area=width*length;
    console.log(area)
    // show area calculation result
    setElementText('area-rectangle',area);

}


// Triangle calculation


function calculateTriangleArea(){
    const baseField=document.getElementById('base-field');
    const baseFieldText=baseField.value;
    const base=parseFloat(baseFieldText);
    baseField.value='';
   

    const heightField=document.getElementById('height-field');
    const heightFieldText=heightField.value;
    const height=parseFloat(heightFieldText);
    heightField.value='';
    

    const area=0.5*base*height;
    console.log(area);


    setElementText('area-triangle',area);

    // const baseField=document.getElementById('base-field');
    // const widthValueText=widthField.value;
    // const width=parseFloat(widthValueText);
    // widthField.value='';
    // console.log(width);
}


// Parallelogram  field

function calculateParallelArea(){

    const base=getInputValue('parallel-base-field');
    

    const height=getInputValue('parallel-height-field');
    

    area=base*height;

    setElementText('area-parallel',area);
    
}


// Ellipse Field


function calculateEllipseArea(){
    const base=getInputValue('ellipse-base-field');
    const height=getInputValue('ellipse-height-field');


    area=3.14*base*height;

    setElementText('area-ellipse',area);
}


// Rhombus Field

function calculateRhombusArea(){
    const diameter1=getInputValue('rhombus-base-field');
    const diameter2=getInputValue('rhombus-height-field');

    area=0.5*diameter1*diameter2;

    setElementText('area-rhombus',area);
}


// reusable input value 


function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const inputFieldText=inputField.value;
    inputField.value='';
    const value=parseFloat(inputFieldText);
    return value;
}



// Area reusable function

function setElementText(elementID,area){
    const element=document.getElementById(elementID);
    element.innerText=area;
}