const stud10={
    name:"Rahul",
    age:18,
    average : function(a,b,c){
        console.log((a+b+c)/2);  
    }
}
const stud12={
    name:"Ramesh",
    age:19,
}

// stud10.average.call(stud12,100,12,912)

// stud10.average.apply(stud12,[1,24,51])

// const ab = stud10.average.bind(stud12,1,324,531)
// ab()

