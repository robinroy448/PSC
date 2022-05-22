function student(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `FT-WEB${b}`;
}
function sub(){
    event.preventDefault()
    let form = document.getElementById("stuid");
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;
    var s1 = new student(name,course,unit,image,batch)
    var data = JSON.parse(localStorage.getItem('students')) || []
    data.push(s1)
    localStorage.setItem('students',JSON.stringify(data))
    console.log(s1)
}
function calculate(){
    let data = JSON.parse(localStorage.getItem('students')) || []
    let obj = {}
    for(let i = 0; i<data.length; i++){
        if(obj[data[i].batch]==undefined)
        obj[data[i].batch] = 1
        else
        obj[data[i].batch] += 1 
    }
    let top = document.getElementById("navbar");
    for(var i in obj){
    let p = document.createElement('p')
    p.append(i,"--",obj[i])
    top.append(p)
     }
}
calculate()
