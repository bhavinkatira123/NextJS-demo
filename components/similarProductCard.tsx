import Image from 'next/image';

interface Props {
	id: number;
	title: string;
	slug: string;
	brand: string;
	image: string;
	price: number;
}

const SimilarProductCard = (props: Props) => {
	return (
		<div className='p-4 w-max'>
			<Image className='bg-gray-500 rounded-md' height={300} width={250} src={props.image} alt='Image' />
			<div className='flex flex-col mt-3'>
				<div className='flex justify-between'>
					<label className='text-gray-500 font-medium'>{props.title}</label>
					<p className='font-semibold'>${props.price}</p>
				</div>
				{/* <span className='text-gray-400 font-medium'>{props.color}</span> */}
			</div>
		</div>
	);
};

export default SimilarProductCard;
