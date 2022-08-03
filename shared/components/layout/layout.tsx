import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = ({children}: any) => {
	return (
		<div className='p-5 max-w-screen-2xl m-auto'>
			<div className='mt-4'>
				<Header />
				{children}
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
