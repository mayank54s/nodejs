var rect={
    perimeter:(x,y)=>(2*(x+y)),
    area: (x,y)=> (x*y)
}

function solveRect(l,b){
    console.log("Solving for rectangle with l="+ l +"and b="+b);
    if(l<=0||b<=0){
        console.log("Rectangle dimensions should be greater then zero: l="+l+"b="+b);
    }
    else{
        console.log("Area of the rectangle is"+rect.area(l,b));
        console.log("Perimeter of the rectangle is"+rect.perimeter(l,b));
    }
}
solveRect(2,4);
solveRect(-3,-5);
solveRect(0,1);
solveRect(40,15);