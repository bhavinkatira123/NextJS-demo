import Image from 'next/image';

interface Props {
	images: string[];
}

const Imagecontainer = (props: Props) => {
	return (
		<div>
			<div className='w-full'>
				<Image height={1000} width={900} className='rounded-md' src={props.images[0]} alt='image' />
			</div>
			<div className='flex'>
				<div className='w-1/2'>
					<Image className='rounded-md' height={500} width={400} src={props.images[1]} alt='image' />
				</div>
				<div className='w-1/2 ml-3'>
					<Image className='rounded-md' height={500} width={400} src={props.images[2]} alt='image' />
				</div>
			</div>
		</div>
	);
};

export default Imagecontainer;
