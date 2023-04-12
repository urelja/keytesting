let keyCode = document.querySelector(".keyCode");
let keyElement = document.querySelector(".key");
console.log(keyElement)
let items = document.querySelectorAll(".hitem");
let historyItems = document.querySelector(".historyItems")
let empty = document.querySelector(".empty")

console.log(items);
let historyNum = 0;
let previousKeyCode;
let previousKey;

function addHistory(a,keyCode,key) {
    keyElement.style.visibility = "visible";
    if (a==0) {
        previousKeyCode = keyCode;
        previousKey = key;
        
        return;
    } else if (a<7){
        a = a-1
        empty.style.display = "none";
        historyItems.style.overflowY = "auto"
        items[a].style.visibility = "visible"
        console.log(items[a].children);
        items[a].children[0].textContent = previousKeyCode;
        items[a].children[1].textContent = previousKey;
        previousKeyCode = keyCode;
        previousKey = key;
    } else {
        for (let i = 0;i <= 4;i++) {
            items[i].children[0].textContent = items[i+1].children[0].textContent;
            items[i].children[1].textContent = items[i+1].children[1].textContent
        }
        items[5].children[0].textContent = previousKeyCode;
        items[5].children[1].textContent = previousKey;
        previousKeyCode = keyCode;
        previousKey = key;
    }
}


document.addEventListener("keydown", (e) => {
	keyCode.textContent = e.keyCode;
	keyElement.textContent = e.code;

	addHistory(historyNum,e.keyCode,e.code);
    historyNum += 1;
	

	console.log(historyNum);
});
