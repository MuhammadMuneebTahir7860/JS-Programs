const getProperties = () =>{
    const program1InputPro=document.getElementById("program1InputPro").value;
    const program1InputVal=document.getElementById("program1InputVal").value;
    const splitArray=program1InputVal.split(" ");
    const array1=program1InputPro.split(" ");
    var object={};
    for(i=0; i<array1.length; i++){
        const currentIndex=array1[i];
        object[currentIndex]=splitArray[i];
    }
    const getKeys=Object.keys(object);
    var objJson=JSON.stringify(object);
    document.getElementById("program1Output").innerHTML=`Properties of Object ${objJson} = ${getKeys}`;
}

const deleteProperty = () =>{
    const program2InputPro=document.getElementById("program2InputPro").value;
    const program2InputVal=document.getElementById("program2InputVal").value;
    const delPro=document.getElementById("program2IDelPro").value;
    const delArray=delPro.split(" ");
    const splitArray2=program2InputVal.split(" ");
    const array2=program2InputPro.split(" ");
    var object2={};
    for(i=0; i<array2.length; i++){
        const currentIndex=array2[i];
        object2[currentIndex]=splitArray2[i];
    }
    const realObj=JSON.stringify(object2);
    delete object2[delArray];
    const afterDelPro=JSON.stringify(object2);
    document.getElementById("program2Output").innerHTML=`Before Deleting Propert Object = ${realObj} and After Deleting Selected Property Object = ${afterDelPro}`;
}

const getLenght = () =>{
    const program3InputPro=document.getElementById("program3InputPro").value;
    const program3InputVal=document.getElementById("program3InputVal").value;
    const splitArray3=program3InputVal.split(" ");
    const array3=program3InputPro.split(" ");
    var object3={};
    for(i=0; i<array3.length; i++){
        const currentIndex1=array3[i];
        object3[currentIndex1]=splitArray3[i];
    }
    document.getElementById("program3Output").innerHTML=Object.keys(object3).length;
}

const displayStatus = () =>{
    var library = [ 
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title:  'Mockingjay: The Final Book of The Hunger Games', 
            readingStatus: false
        }];

        for(i=0; i<library.length; i++){
            var bookDetails="'" + library[i].title + "'" + "by" + library[i].author + ".";
                if (library[i].readingStatus) {
                    console.log("Already read " + bookDetails);
                    document.getElementById("program4Output").innerHTML="Go to Console For Answer";
                  } else
                  {
                   console.log("You still need to read " + bookDetails);
                  }
  }

}

const calCylinderVolume = () =>{
    function cylinder(height,radius){
        this.height=height;
        this.radius=radius;
    }
    cylinder.prototype.volume = function (){
        var radius=this.radius;
        var height=this.height;
        var formula=Math.PI * radius *radius *height;
        return formula;
    }
    function getElements (){
        const height=parseFloat(document.getElementById("program5InputH").value);
        const radius=parseFloat(document.getElementById("program5InputR").value);
        var myCylinder=new cylinder(height,radius);
        var result=myCylinder.volume();
        return result;
    }
    document.getElementById("program5Output").innerHTML=getElements().toFixed(4);
}

const bubbleSort = () =>{
    const program6Input1=document.getElementById("program6Input").value;
    const program6Input=program6Input1.split(" ");
    for(i=0; i<program6Input.length; i++){
        for(j=i+1; j<program6Input.length; j++){
            if(parseInt(program6Input[i])>parseInt(program6Input[j])){
                var swapper=program6Input[i];
                program6Input[i]=program6Input[j];
                program6Input[j]=swapper;
            }
        }
    }
    document.getElementById("program6Output").innerHTML=program6Input;
}

const findSubset = () =>{
    const program7Input=document.getElementById("program7Input").value;
    var subset=[];
    for(var i=0; i<program7Input.length; i++){
        for(var j=i+1; j<program7Input.length+1; j++){
            subset.push(program7Input.slice(i,j));
        }
    }
    document.getElementById("program7Output").innerHTML=subset;
}

const createClock = () =>{
    function currentTime(){
        this.currentDate=new Date();
        this.hours=this.currentDate.getHours();
        this.mint=this.currentDate.getMinutes();
        this.seconds=this.currentDate.getSeconds();
    }
    currentTime.prototype.run=function (){
        setInterval(this.update.bind(this),1000);
    }
    currentTime.prototype.update=function (){
        this.updatTime(1);
        console.log(this.hours + ":" + this.mint + ":" + this.seconds);
    }
    currentTime.prototype.updatTime=function (sec){
        this.seconds+=sec;
        if(this.seconds>=60){
            this.mint++;
            this.seconds=0;
        }
        if(this.mint>=60){
            this.hours++;
            this.mint=0;
        }
        if(this.hours>=60){
            this.hours=0;
        }
    }
    var clock=new currentTime();
    clock.run();
    document.getElementById("program8Output").innerHTML="Go to Console";
}

const calculateAreaPerimeter = () =>{
    class calculate{
        constructor(radius){
            this.radius=radius;
        }
        area(){
            return Math.PI * this.radius*this.radius;
        }
        perimeter(){
                return 2*Math.PI*this.radius;
        }
    }
    var radiusInput=Number(document.getElementById("program9Input").value);
    var createNew=new calculate(radiusInput);
    console.log();
    console.log();
    document.getElementById("program9Output").innerHTML=`Area = ${createNew.area().toFixed(2)} Perimeter = ${createNew.perimeter().toFixed(2)}`
}

const sortObjectArray = () =>{
    var library = [ 
        {
            title:  'The Road Ahead',
            author: 'Bill Gates',
            libraryID: 1254
        },
        {
            title: 'Walter Isaacson',
            author: 'Steve Jobs',
            libraryID: 4264
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            libraryID: 3245
        }];
        document.getElementById("program10Output").innerHTML="Go to Console";
         var newobj = library.sort();
         newobj.sort(function(a,b){return a.libraryID-b.libraryID});
         console.log(newobj);       
}

const printMethhods = () =>{
    function all_properties(o) {
    return Object.getOwnPropertyNames(o);
}
document.getElementById("program11Output").innerHTML=all_properties(Array)
}


