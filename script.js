var input = document.querySelector('#date')
var btn = document.querySelector('.btn')
var rep = document.querySelector('.rep')

var curruntDate = new Date()

btn.addEventListener('click',()=>{
    if(input.value === ''){
        alert("Please enter a date")
    }else{
        let dob = new Date(input.value)

        let d1 = dob.getDate()
        let m1 = dob.getMonth()+1
        let y1 = dob.getFullYear()
        
        let today = new Date()
        
        let d2 = today.getDate()
        let m2 = today.getMonth()+1
        let y2 = today.getFullYear()

        let d3,m3,y3;

        y3 = y2-y1

        if(m2>=m1){
            m3=m2-m1
        }else{
            y3--;
            m3=12+m2-m1
        }
        if (d2>=d1) {
            d3 = d2-d1
        } else {
            m3--;
            d3 = getdayinmonth(m1,y1)+d2-d1;
        }
        if(m3<0){
            m3 = 11
            y3--
        }
        console.log(y3,m3,d3)
        rep.innerHTML = `Your age is ${y3} years ${m3} months and ${d3} days`

    }
    function getdayinmonth(month,year){
        return new Date(year,month,0).getDate()
    }
})