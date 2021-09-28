import { FC } from 'react'
import styles from './Layout.module.css'
// components 
import Navbar from '@components/Navbar/Navbar'

const Layout: FC = ({ children }) => {
	return (
		<main 
			// className='container'
			className={styles.container}
		>
			<Navbar />
			{children}
			<footer>
				This is the Footer
			</footer>
			{/* otra forma */}
			{/* <style jsx>
				{`
					.container {
						background-color: salmon
					}
				`}
			</style> */}
		</main>
	)
}

export default Layout
