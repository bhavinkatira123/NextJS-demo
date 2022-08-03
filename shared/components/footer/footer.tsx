import Link from 'next/link';
import {CompanyLinks, CustomerServiceLinks, ProductsLinks} from '../../constants/constants';

const Footer = () => {
	return (
		<div className='mt-10'>
			<div className='list-none text-center md:flex md:justify-between'>
				<div>
					<h1 className='font-medium mb-2'>Products</h1>
					{ProductsLinks.map((product, index) => {
						return (
							<li key={index} className='my-4'>
								<Link href={product.link}>
									<a className='text-gray-400 font-medium'>{product.name}</a>
								</Link>
							</li>
						);
					})}
				</div>
				<div className='mt-10 md:mt-0'>
					<h1 className='font-medium mb-2'>Company</h1>
					{CompanyLinks.map((product, index) => {
						return (
							<li key={index} className='my-4'>
								<Link href={product.link}>
									<a className='text-gray-400 font-medium'>{product.name}</a>
								</Link>
							</li>
						);
					})}
				</div>
				<div className='mt-10 md:mt-0'>
					<h1 className='font-medium mb-2'>Customer Service</h1>
					{CustomerServiceLinks.map((product, index) => {
						return (
							<li key={index} className='my-4'>
								<Link href={product.link}>
									<a className='text-gray-400 font-medium'>{product.name}</a>
								</Link>
							</li>
						);
					})}
				</div>
				<div className='mt-10 md:mt-0'>
					<h1 className='font-medium mb-2'>Sign up for our newsletter</h1>
					<p className='mt-2 text-gray-400 text-sm font-medium'>The latest deals and saving, sent to your inbox weekly.</p>
					<input type='text' className='border-solid border-2 rounded-sm p-2 mt-2' />
					<button className='bg-blue-700 text-white py-2 px-4 mt-3 rounded-md font-medium md:ml-3'>Sign Up</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
