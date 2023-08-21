import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCollegeDetails = () => {
    const data = useLoaderData();
    const { _id, address, college_name, date_of_birth, email, image, name, phone, subject } = data;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const api = import.meta.env.VITE_API_KEY;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${api}`;
    const [url, setUrl] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const formData = new FormData();
        formData.append('image', selectedFile);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imgRes) => {
                if (imgRes.success) {
                    const imgUrl = imgRes.data.display_url;
                    setUrl(imgUrl)
                    // console.log(imgUrl);
                    //   window.location.reload(); 
                }
            })
            .catch((error) => {
                // Handle the error here
                // setError(error);
                console.error('Error while uploading the image:', error);
                // Optionally, you can also show an error message to the user if needed.
            });
    };
    const onSubmit = (data) => {
        console.log(url)
        const img = { image: url };
        const updateInfo = { ...data, ...img }
        console.log(updateInfo)
        fetch(`https://collage-admission-server-6wm8a1k88-tonmoy-org.vercel.app/admission/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Successfully Updated',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    window.location.reload();
                }
            })
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
            <div className="lg:flex justify-center items-center gap-8 lg:mx-28 m-5  border-dashed border-2 border-[#004e96] p-2 py-3">
                <div className="lg:w-8/12 p-10 my-3">
                    <div className="text-center text-3xl my-2 pb-14">
                        <h1 className="font-semibold text-[#004e96]">Update Your Information</h1>
                    </div>
                    <div className="border-b-4 border-indigo-500 mb-10">
                        <h1 className="text-2xl">{college_name}</h1>
                        <p className="text-xl py-2">{subject}</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid lg:grid-cols-2 gap-8'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate Name</span>
                                </label>
                                <input type="text" defaultValue={name} {...register("name", { required: true })} name="name" placeholder="class name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate Email</span>
                                </label>
                                <input type="email" defaultValue={email} {...register("email", { required: true })} name="email" placeholder="candidate Email" className="input input-bordered" />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-8'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" defaultValue={address}  {...register("address", { required: true })} name="address" placeholder="address" className="input input-bordered" />
                                {errors.subject && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate Phone number</span>
                                </label>
                                <input type="number" defaultValue={phone} {...register("phone", { required: true })} name="phone" placeholder="phone" className="input input-bordered" />
                                {errors.phone && <span className="text-red-600">This field is required</span>}
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-8'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date of birth</span>
                                </label>
                                <input type="text" defaultValue={date_of_birth} {...register("date_of_birth", { required: true })} name="date_of_birth" placeholder="date of birth" className="input input-bordered" />
                                {errors.date_of_birth && <span className="text-red-600">This field is required</span>}
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary text-white" type="submit" value="update" />
                        </div>
                    </form>
                </div>
                    <div className="mt-10">
                        <img className="w-80 h-80 mx-auto" src={image} alt="" />
                        <div className="relative mt-4">
                            <label
                                htmlFor="fileInput"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                            >
                                Choose a file
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MyCollegeDetails;