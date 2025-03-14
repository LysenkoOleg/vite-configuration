const modules = import.meta.glob('/src/utils-js/*.js')

const currentUrlPage = document.location.href
if(currentUrlPage === 'http://localhost:5173/') {
	Object.values(modules).forEach((module) => {
		module().then(() => {})
	})
} else if(currentUrlPage === 'http://localhost:5173/public') {
	console.log('public');
}
