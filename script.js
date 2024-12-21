function shortcut(s1, s2) {
  // your code here
	let size1=s1.length;
	let size2=s2.length;

	if(size1>0 && size2>0){
		let s=s1[0]+s2[0];
		return s;
	}
	else if(size1==0 || size2==0){
		return "";
	}
} 

// Do not change the code below.
const s1 = prompt("Enter s1:"); 
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2)); 
