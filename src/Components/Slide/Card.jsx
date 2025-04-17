import { FaStar } from "react-icons/fa";

const Card = ({title,image,rate})=>{
    return (
        <div className="w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 items-center'>
            <div className=' col-span-3 order-2 lg:order-1'>
                <p className='mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]'>
                   {title}
                </p>
                <div className=' flex items-center mt-6'>
                   <StarRating rating={rate}/>
                </div>
                <h2 className=' text-xl font-semibold mt-8'>{title}</h2>
            </div>
            <div className=' col-span-2 mx-auto order-1 lg:order-2 '>
                <img src={image} alt= {title} width={250} height={120} className=' rounded-full'/>
            </div>
        </div>
        </div>
    )
}

export const StarRating = ({rating})=>{
    const stars = Array.from({length : rating}).map((_,index)=>(
        <FaStar
        key={index} 
        className={`w-6 h-6 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        />
    ))
    return <div className='flex items-center mt-6'>{stars}</div>;
}

export default Card