import { FC } from 'react'
// components 
import Navbar from '@components/Navbar/Navbar'

const Layout: FC = ({ children }) => {
	return (
		<main>
			<Navbar />
			{children}
			<footer>
				This is the Footer
			</footer>
		</main>
	)
}

export default Layout
