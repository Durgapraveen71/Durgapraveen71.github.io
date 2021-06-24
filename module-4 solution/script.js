var names=new Array();
names[0]="Durga";
names[1]="Praveen";
names[2]="Prem";
names[3]="manoj";
names[4]="balu";
names[5]="srinivas";
names[6]="harsha";
names[7]="pravee";
names[8]="Shreyas";
names[9]="iyer";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='P'|| names[i].charAt(0)==='p'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}