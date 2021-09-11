function findScholarship(){
    const name= 
    document.getElementById("nameField").value ;

    const cgpa = document.getElementById("cgpaField").value ;

    const semester = document.getElementById("semesterField").value ;

    let text;
    if (cgpa>=3.5 && semester >=7){
    text = `Congratulations ${name}! You are will receive 
    <span style="color: red;"> BDT 200,000/-</span>
     as Scholarship, To confirm your funding call your advisor.`;
    }
    else if (cgpa>=3.0 && semester>=5){
    text = ` Congratulations ${name}! You are eligible for 
    <span style="color: red;"> BDT 50,000</span> 
    as Scholarship, To confirm your funding call your advisor.`;
    }
    else { 
        text =`Hello ${name}, You don't meet scholarship Requirements.`
    }
    document.getElementById("show-details").innerHTML = text ;

    document.getElementById("nameField").value = '' ;
    document.getElementById("cgpaField").value = '' ;
    document.getElementById("semesterField").value = '' ;
}