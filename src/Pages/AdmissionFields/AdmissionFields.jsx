import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";

const AdmissionFields = () => {
    const data = useLoaderData();
    const {college_image, college_name, admission_dates } = data;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = (data) => {
        const college = {college_name: college_name, college_image: college_image};
        const admissionInfo = {...data, ...college};
        fetch('https://collage-admission-server-six.vercel.app/admission', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admissionInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Successfully Added',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
    }
    return (
        <div>
            <div className="hero h-40 bg-fixed" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Submit Your Info To Us</h1>
                    </div>
                </div>
            </div>
            <div className="w-9/12 mx-auto border-dashed border-2 border-[#004e96] p-10 my-10">
                <h1 className="text-center text-3xl my-6 font-semibold text-[#004e96]">Submit Your Information</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid lg:grid-cols-2 gap-8'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Candidate Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="class name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text"  {...register("subject", { required: true })} name="subject" placeholder="subject" className="input input-bordered" />
                            {errors.subject && <span className="text-red-600">This field is required</span>}
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-8'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Candidate Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} {...register("email", { required: true })} name="email" placeholder="candidate Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Candidate Phone number</span>
                            </label>
                            <input type="number"{...register("phone", { required: true })} name="phone" placeholder="phone" className="input input-bordered" />
                            {errors.phone && <span className="text-red-600">This field is required</span>}
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-8'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text"{...register("address", { required: true })} name="address" placeholder="address" className="input input-bordered" />
                            {errors.address && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date of birth</span>
                            </label>
                            <input type="text" {...register("date_of_birth", { required: true })} name="date_of_birth" placeholder="date of birth" className="input input-bordered" />
                            {errors.date_of_birth && <span className="text-red-600">This field is required</span>}
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-1'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text"  {...register("image", { required: true })} name="image" placeholder="image" className="input input-bordered" />
                            {errors.image && <span className="text-red-600">This field is required</span>}
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary text-white" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionFields;