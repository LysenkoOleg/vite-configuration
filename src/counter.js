const setupCounter = (documentElement) => {
	let counter  = 0;
	documentElement.textContent = `Click to: ${counter}`


	documentElement.addEventListener('click', () => setCount(counter))
	function setCount(prevState) {
		counter = prevState + 1;
		documentElement.textContent = `Click to: ${counter}`
	}
}


export default setupCounter;
