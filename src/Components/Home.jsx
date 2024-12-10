import React, { useState } from 'react';
import qr from "../assets/dummy.png";
import bg from "../assets/background.jpg";

const InternForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        mobileNo: '',
        college: '',
        degree: '',
        passoutYear: '',
        course: '',
        paymentMode: '',
        referralPersonName: '',
        referralPersonPhone: '',
        referralPersonEmpCode: '',
        dob: '',
        paymentScreenshot: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div
        className="min-h-screen px-4 p-10"
        style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <div className="max-w-2xl w-full bg-white p-6 shadow-lg rounded mt-4 ml-4">
            <h1 className="text-xl font-bold mb-4 text-center">Intern Student Details</h1>

            <form onSubmit={handleSubmit} className="space-y-5 grid grid-cols-3 gap-2">
                
                {/* Email */}
                <div>
                    <label className="block text-sm font-medium mt-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded"
                        required
                    />
                </div>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mt-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="block text-sm font-medium mt-2">Mobile No</label>
                        <input
                            type="tel"
                            name="mobileNo"
                            value={formData.mobileNo}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>

                    {/* College */}
                    <div>
                        <label className="block text-sm font-medium mt-2">College</label>
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Degree */}
                    <div>
                        <label className="block text-sm font-medium mt-2">Degree</label>
                        <input
                            type="text"
                            name="degree"
                            value={formData.degree}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Passout Year */}
                    <div>
                        <label className="block text-sm font-medium mt-2">Passout Year</label>
                        <input
                            type="number"
                            name="passoutYear"
                            value={formData.passoutYear}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Course */}
                    <div>
                        <label className="block text-sm font-medium mt-2">Course</label>
                        <input
                            type="text"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Referral Person Details */}
                    <div>
                        <label className="block text-sm font-medium mt-2">Referral Person Name</label>
                        <input
                            type="text"
                            name="referralPersonName"
                            value={formData.referralPersonName}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                        />
                    </div>

                    {/* QR Code */}
                    <div className="col-span-2 mt-4 flex justify-center items-center">
                        <div className="border p-4 rounded">
                            <img
                                src={qr}
                                alt="Payment QR"
                                className="w-32 h-32 object-contain"
                            />
                            <p className="text-center mt-2 text-gray-600">
                                Scan the QR code to make your payment.
                            </p>
                        </div>
                    </div>

                    {/* Payment Mode */}
                    <div>
                        <label className="block text-sm font-medium mt-2">Payment Mode</label>
                        <select
                            name="paymentMode"
                            value={formData.paymentMode}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        >
                            <option value="">Select</option>
                            <option value="GPay">Online</option>
                            <option value="PhonePe">Offline</option>
                        </select>
                    </div>

                    {/* Payment Screenshot */}
                    <div>
                        <label className="block text-sm font-medium mt-2">Payment Screenshot</label>
                        <input
                            type="file"
                            name="paymentScreenshot"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full mt-1"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-3 mt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InternForm;
