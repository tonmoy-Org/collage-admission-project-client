import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const Review = () => {
    const data = useLoaderData();
    const { _id, address, college_name, date_of_birth, email, image, name, phone, subject } = data;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
       console.log(data)
    }
    return (
        <div>
            <div className="hero h-40 bg-fixed" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Update Your Info</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-10 lg:mx-28  border-dashed border-2 border-[#004e96] m-5">
                <div className="lg:w-8/12  p-2 my-10">
                    <div className="border-b-4 border-indigo-500 mb-10">
                        <h1 className="text-2xl">{college_name}</h1>
                        <p className="text-xl py-2">{subject}</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid lg:grid-cols-1 gap-8'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Feedback!</span>
                                </label>
                                <textarea className="textarea textarea-info" type="text"  {...register("name", { required: true })} name="name" placeholder="review"></textarea>
                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary text-white" type="submit" value="update" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;