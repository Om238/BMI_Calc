// const hei = document.querySelector('p')
window.onload = () =>{
    const button=document.getElementById('btn');
    button.addEventListener('click',calculateBmi)


}

function calculateBmi(){
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const res= document.getElementsByClassName("calc")[0];
    console.log(height);
    if(!height || isNaN(height)||height<0){
        alert("You put the invalid data")
        res.innerHTML= "<h2>Invalid Input<h2>"
    }else if(!weight || isNaN(weight)||weight<0){
        alert("You put the invalid data")
        res.innerHTML= "<h2>Invalid Input<h2>"
    
    }
    else{
        const bmi= (weight/ ((height *height)/10000)).toFixed(2);
        if(bmi<18.5){
            res.innerHTML=`Under Weight: ${bmi} bmi`
        }else if(bmi>=18.5 && bmi<24.9 ){
            res.innerHTML=`Normal Weight: ${bmi}bmi `

        }else if(bmi>=25 && bmi<29.9 ){
            res.innerHTML=` Over Weight: ${bmi}bmi`

        }else if(bmi>=30 && bmi<34.9 ){
            res.innerHTML=`Obesity Weight: ${bmi}bmi`

        }
        else if(bmi>=35.5 && bmi<39.9 ){
            res.innerHTML=`Extreme Weight: ${bmi}bmi`

        }
        else{
            res.innerHTML = " Abe Jakar Running kar";
            res.style.color='red'
        }
    }
    

}