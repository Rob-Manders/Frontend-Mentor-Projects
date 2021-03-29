
export default async function useAPI() {
	const url = 'https://raw.githubusercontent.com/Rob-Manders/Frontend-Mentor-Projects/main/Crowdfunding-Product-Page/data/monitor_riser.json'

	const response = await fetch(url)
	const data = await response.json()

	return data
}