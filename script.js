// complete the given function

function palindrome(str){
	let newstr=str.toLowerCase();
	let left=0;
	let right=str.length-1;
	while(left<right){
		if(newstr[left]!==newstr[right]) return false;
		left++;
		right--;
	}
	return true;

}
module.exports = palindrome
