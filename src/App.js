import './App.css'
import Header from './components/Header'
import Hotbar from './components/Hotbar'
import DashBoard from './components/DashBoard'

// Javscript Object: https://www.w3schools.com/js/js_json_intro.asp

// Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const mockPosts = [
	{
		title: 'My hemoroids be poppin up again',
		body: 'Loremi ipsum гъза ми',
		upvotes: 3,
		downvotes: 0,
		date: new Date(),
	},
	{
		title: 'My hemoroids be poppin up again',
		body: 'Loremi ipsum гъза ми',
		upvotes: 3,
		downvotes: 0,
		date: new Date(),
	},
	{
		title: 'Asldkjaj',
		body: 'aslkja',
		upvotes: 3,
		downvotes: 0,
		date: new Date(),
	},
]

// Component: https://reactjs.org/docs/components-and-props.html
function App() {
	return (
		<div>
			<Header />

			<Hotbar />

			{/* Props:  https://reactjs.org/docs/components-and-props.html*/}
			<DashBoard posts={mockPosts} />
		</div>
	)
}

export default App
