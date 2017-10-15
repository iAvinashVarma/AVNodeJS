var avi = {
    name: "India",
    printFirstName:function(){
        console.log("My name is Avinash.");
        console.log(this === avi);
    }
}

// 'this' is a reference to whatever the things it's calling in.
// It can be an explicit object (Here example is avi object)
// Or we can call it through our main program, which means global program (Example doGlobalCall)
function doExplicitCall(){
    console.log("Comparing 'this' with explicit object.");
    console.log(this === avi);
}

// The default calling context is global.
function doGlobalCall(){
    console.log("Comparing 'this' with global object.");
    console.log(this === global);
}

avi.printFirstName();
doExplicitCall();
doGlobalCall();
console.log(avi.name);