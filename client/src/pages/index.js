import { useEffect, useState } from 'react'


export default function Home() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		;(async () => {
			const resp = await fetch('http://localhost:4000/')
			const data = await resp.json()
			setUsers(data)
		})()
	}, [])

	return (
		<>
			{users.map(({ email, first_name }) => (
				<>
					<p>{first_name}</p>
					<p>{email}</p>
				</>
			))}
		</>
	)
}
