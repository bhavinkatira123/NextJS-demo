import StarRating from 'react-star-ratings';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruck, faDollar} from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

import ReviewCard from '../../../components/reviewCard';
import SimilarProductCard from '../../../components/similarProductCard';

import {ReviewInfo, SimilarProductInfo} from '../../../shared/interface/interface';
import SEO from '../../../shared/components/seo/seo';
import Head from 'next/head';
import ImageContainer from '../../../components/imageContainer';

function Tshirt({product}: any) {
	const schema = {
		'@context': 'http://schema.org',
		'@type': 'Person',
		name: product.title,
		url: `http://localhost:3000/shop/t-shirt/${product.slug}`,
		jobTitle: 'Editor',
		image: 'https://cdn.realestateview.com.au/illuminate/author-images/1320-au-0-d42cb7513f1700.jpeg',
		worksFor: {
			'@type': 'Organization',
			name: 'Real Estate View',
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `http://localhost:3000/shop/t-shirt/${product.slug}`,
		},
		sameAs: [`http://localhost:3000/shop/t-shirt/${product.slug}`],
	};
	return (
		<div>
			<Head>
				<script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
			</Head>
			<SEO
				title={product.brandName}
				description={product.title}
				type={'website'}
				url={`http://localhost:3000/shop/t-shirt/${product.slug}`}
				keywords={'Tshirts'}
				image={product.images[0]}
			/>
			<div className='mt-5 md:flex md:flex-row'>
				<ImageContainer images={product.images} />
				<div className='md:ml-6 md:w-1/2'>
					<h1 className='font-medium text-xl'>{product.title}</h1>
					<div className='flex items-center justify-between mt-3'>
						<div className='flex'>
							<span>{product.rating}</span>
							<div className='ml-2'>
								<StarRating
									starDimension='21px'
									starSpacing='2px'
									rating={product.rating}
									starRatedColor='#ffd700'
									starHoverColor='#ffd700'
									numberOfStars={5}
									name='rating'
								/>
							</div>
						</div>
						<p className='text-blue-600 font-medium text-sm float-right'>See all {product.reviewCount} reviews</p>
					</div>
					<div className='mt-5'>
						<label className='font-semibold text-slate-500 text-lg'>Color</label>
						<div className='flex mt-1'>
							{product.availableColors.map((color: string, index: number) => {
								return <div key={index} className={`h-8 rounded-2xl w-8 bg-${color}`} />;
							})}
						</div>
					</div>
					<div className='mt-5'>
						<p className='font-semibold text-slate-500 text-lg'>Size</p>
						<div className='mt-4 mb-5 flex overflow-auto pb-5'>
							{product.availableSize.map((ele: {type: string; unit: number}, index: number) => {
								return (
									<button className='rounded-md py-2 px-4 md:px-6 h-10 mr-3 border border-solid' key={index}>
										{ele.type}
									</button>
								);
							})}
						</div>
						<button className='bg-blue-500 text-white py-2 w-full rounded'>Add to cart</button>
						<div className='py-5 border-b border-solid'>
							<label className='font-semibold text-slate-600 text-lg'>Description</label>
							<p className='mt-3 text-gray-500 font-medium'>
								The Basic tee is an honest new take on a classic.The tee uses super soft, pre-shunk cotton for true confirt and a
								dependable fit. The are hand cut and sewn locally, with a special dye technique that gives each tee its own look.
							</p>
							<br />
							<p className='text-gray-500 font-medium'>
								Looking so stock your closer? The basic tee also comes in a 3-pack or 5-pack at a bundle discount.
							</p>
						</div>
						<div className='my-5'>
							<label className='font-semibold text-slate-600 text-lg'>Fabric & Care</label>
							<div className='mt-3 text-gray-500 font-medium'>
								<li>Only the best materials</li>
								<li>Ethically and locally made</li>
								<li>Pre-washed and pre-shunk</li>
								<li>Machine wash cold with similar colors</li>
							</div>
						</div>
						<div className='flex'>
							<div className='bg-gray-100 border-2 border-solid rounded-md w-1/2'>
								<div className='p-3 flex flex-col items-center justify-center'>
									<FontAwesomeIcon icon={faTruck} color='gray' className='text-slate-600' />
									<label className='text-sm my-1 font-semibold text-slate-600'>International delivery</label>
									<p className='text-xs text-gray-500 font-medium'>Get your order in 2 years</p>
								</div>
							</div>
							<div className='bg-gray-100 ml-4 border-2 border-solid rounded-md w-1/2'>
								<div className='p-3 flex flex-col items-center justify-center'>
									<FontAwesomeIcon icon={faDollar} color='gray' className='text-slate-600' />
									<label className='text-sm my-1 font-semibold text-slate-600'>Loyalty rewards</label>
									<p className='text-xs text-gray-500 font-medium'>{`Don't look at other tees`}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-10'>
				<h1 className='font-semibold text-slate-600 text-lg mb-5'>Recent Reviews ({product.reviewCount})</h1>
				{product.reviews.map((review: ReviewInfo, index: number) => (
					<ReviewCard key={index} {...review} />
				))}
			</div>
			<div className='py-16 border-b border-solid'>
				<h1 className='font-semibold text-slate-600 text-lg mb-5'>Customers also Purchased</h1>
				<div className='grid grid-cols-1fr overflow-auto gap-3 border-solid broder-2 md:flex pb-5'>
					{product.relatedProduct.map((product: SimilarProductInfo, index: number) => (
						<SimilarProductCard key={index} {...product} />
					))}
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps(context: any) {
	const slug = context.params.slug;
	const res = await fetch(`http://localhost:3002/products/${slug}`);
	const product = await res.json();
	return {props: {product}};
}

export default Tshirt;
