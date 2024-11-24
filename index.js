async function sayHello() {
	chrome.runtime.sendMessage({ action: 'executeScript' })
}

document.getElementById('click-me').addEventListener('click', sayHello)
