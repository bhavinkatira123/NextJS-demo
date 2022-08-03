import StarRating from 'react-star-ratings';

interface Props {
	author: string;
	comment: string;
	date: string;
	id: string;
	rating: number;
}

const ReviewCard = (props: Props) => {
	return (
		<div className='py-5 border-y border-solid flex justify-between flex-col md:flex-row'>
			<div className='md:w-1/3'>
				<h2 className='text-slate-600 font-medium'>{props.author}</h2>
				<p className='text-gray-500 font-medium mt-1'>{props.date}</p>
			</div>
			<div className='md:w-1/3 flex content-center'>
				<StarRating
					starDimension='15px'
					starSpacing='1px'
					rating={props.rating}
					starRatedColor='#ffd700'
					starHoverColor='#ffd700'
					numberOfStars={5}
					name='rating'
				/>
				<span className='ml-1 mt-1'>{props.rating}</span>
			</div>
			<div className='mt-5 md:mt-0 md:w-1/3'>
				{/* <h1 className='font-semibold text-slate-600 text-md mb-3'>{props.comment}</h1> */}
				<p>{props.comment}</p>
			</div>
		</div>
	);
};

export default ReviewCard;
