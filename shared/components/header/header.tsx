import Link from 'next/link';
import Image from 'next/image';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faUser, faShoppingBag} from '@fortawesome/free-solid-svg-icons';

import Logo from '../../../public/logo.png';

const Header = () => {
	return (
		<div className='items-center flex justify-between list-none h-16 border-y border-solid'>
			<div className='hidden xl:flex flex-row'>
				<li className='mx-1 md:mx-4'>
					<Link href='/'>
						<a className='text-slate-500 font-semibold text-xs md:text-base'>Women</a>
					</Link>
				</li>
				<li className='mx-1 md:mx-4'>
					<Link
						href={{
							pathname: '/shop/t-shirt/[slug]',
							query: {slug: 'french-connection-men-black-printed-slim-fit-pure-cotton-t-shirt'},
						}}
					>
						<a className='text-slate-500 font-semibold text-xs md:text-base'>Men</a>
					</Link>
				</li>
				<li className='mx-1 md:mx-4'>
					<Link href='/'>
						<a className='text-slate-500 font-semibold text-xs md:text-base'>Company</a>
					</Link>
				</li>
				<li className='mx-1 md:mx-4'>
					<Link href='/'>
						<a className='text-slate-500 font-semibold text-xs md:text-base'>Stores</a>
					</Link>
				</li>
			</div>
			<Link
				href={{
					pathname: '/shop/t-shirt/[slug]',
					query: {slug: 'arrow-men-blue-pure-cotton-t-shirt'},
				}}
			>
				<div className='h-10 w-10'>
					<Image src={Logo} className='cursor-pointer' alt='image' />
				</div>
			</Link>
			<div className='hidden xl:flex items-center'>
				<div className='mx-4'>
					<FontAwesomeIcon icon={faSearch} color='gray' className='text-slate-500 text-xl cursor-pointer' />
				</div>
				<div className='mx-4'>
					<FontAwesomeIcon icon={faUser} color='gray' className='text-slate-500 text-xl cursor-pointer' />
				</div>
				<div className='flex mx-4 items-center'>
					<FontAwesomeIcon icon={faShoppingBag} color='gray' className='text-slate-500 text-xl cursor-pointer' />
					<span className='ml-2'>0</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
