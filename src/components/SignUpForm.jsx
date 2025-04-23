import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "../api/axiosInstance";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Facebook, Apple, Eye, EyeOff } from "lucide-react";

const SignupForm = () => {
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const history = useHistory();

    // Getting roles from the API
    useEffect(() => {
        axios
            .get("/roles")
            .then((response) => {
                setRoles(response.data);
                const customer = response.data.find((r) => r.code === "customer");
                if (customer) {
                    setSelectedRole(customer);
                    setValue("role_id", customer.id);
                }
            })
            .catch((error) => console.error("Error fetching roles:", error));
    }, [setValue]);

    // Form submission handler
    const onSubmit = async (data) => {
        console.log("Form data:", data);

        data.role_id = parseInt(data.role_id);
        delete data.confirmPassword;
        delete data.terms;
        delete data.subscribe;

        if (selectedRole?.code === "store") {
            data.store = {
                name: data.store_name,
                phone: data.store_phone,
                tax_no: data.store_tax_no,
                bank_account: data.store_bank_account,
            };

            delete data.store_name;
            delete data.store_phone;
            delete data.store_tax_no;
            delete data.store_bank_account;
        }

        console.log("Processed data:", data);


        setLoading(true);
        try {
            const response = await axios.post("/signup", data);
            console.log("Signup response:", response.data);
            toast.warning("You need to click link in email to activate your account!");
            setTimeout(() => {
                history.goBack();
            }, 3000);
        } catch (error) {
            console.error("Signup error:", error.response?.data || error.message);
            console.log("Full error response:", error.response);
            toast.error("An error occurred during sign-up. Please try again later.");
        } finally {
            setLoading(false);
        }
    };


    const handleRoleChange = (e) => {
        const selectedId = parseInt(e.target.value);
        const role = roles.find((r) => r.id === selectedId);
        setSelectedRole(role);
        setValue("role_id", selectedId);
    };

    return (
        <div className="max-w-xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="flex justify-center mb-4">
                <p className="text-sm text-gray-600">
                    Already a member?{" "}
                    <a
                        href="/login"
                        className="text-[#947f5a] hover:text-[#F2D7A7] hover:underline transition-colors duration-300"
                    >
                        Sign in
                    </a>
                </p>
            </div>

            <div className="flex justify-center mb-4">
                <p className="text-3x1 font-semibold text-gray-600">Create an account</p>
            </div>

            <hr className="my-4 border-gray-300" /> {/* Horizontal line */}

            {/* Social Media Links for Small Screens */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-6 mb-6">
                <a
                    href="https://facebook.com" // Temporary link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#e8d7b0] flex items-center justify-center"
                >
                    <Facebook className="w-8 h-8 style={{ verticalAlign: 'middle' }}" />
                </a>
                <a
                    href="https://apple.com" // Temporary link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#e8d7b0] flex items-center justify-center"
                >
                    <Apple className="w-8 h-8 style={{ verticalAlign: 'middle' }}" />
                </a>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                    <input
                        id="name"
                        {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } })}
                        className="input mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && <p className="text-[#b55521] text-sm">{errors.name.message}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register("email", { required: "Email is required", pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message: "Invalid email address" } })}
                        className="input mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && <p className="text-[#b55521] text-sm">{errors.email.message}</p>}
                </div>

                <div className="relative">
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: "Password must be at least 8 characters" },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?`~;:,.\/]).+$/,
                                message: "Password must include numbers, lowercase, uppercase, and special characters",
                            },
                        })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        className="absolute top-9 right-3 text-gray-500"
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    <p className="text-xs text-gray-500 mt-1">
                        Password must include numbers, lowercase, uppercase, and special characters
                        <br />
                        Password must be at least 8 characters long
                    </p>
                    {errors.password && <p className="text-[#b55521] text-sm">{errors.password.message}</p>}
                </div>

                <div className="relative">
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) =>
                                value === watch("password") || "Passwords do not match",
                        })}
                        className="input mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        className="absolute top-9 right-3 text-gray-500"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    {errors.confirmPassword && (
                        <p className="text-[#b55521] text-sm">{errors.confirmPassword.message}</p>
                    )}
                </div>


                <div>
                    <label htmlFor="role_id" className="block text-sm font-semibold text-gray-700">Role</label>
                    <select
                        id="role_id"
                        {...register("role_id", { required: "Role is required" })}
                        value={watch("role_id")}
                        className="input mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleRoleChange}>
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                    {errors.role_id && <p className="text-[#b55521] text-sm">{errors.role_id.message}</p>}
                </div>

                {selectedRole?.code === "store" && (
                    <>
                        <div>
                            <label htmlFor="store_name" className="block text-sm font-semibold text-gray-700">Store Name</label>
                            <input
                                id="store_name"
                                {...register("store_name", { required: "Store Name is required", minLength: { value: 3, message: "Store name must be at least 3 characters" } })}
                                className="input mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.store_name && <p className="text-[#b55521] text-sm">{errors.store_name.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="store_phone" className="block text-sm font-semibold text-gray-700">Store Phone</label>
                            <input
                                id="store_phone"
                                {...register("store_phone", { required: "Phone is required", pattern: { value: /^(\+90)?(\d{10})$/, message: "Invalid phone number" } })}
                                className="input mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.store_phone && <p className="text-[#b55521] text-sm">{errors.store_phone.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="store_tax_no" className="block text-sm font-semibold text-gray-700">Store Tax ID</label>
                            <input
                                id="store_tax_no"
                                {...register("store_tax_no", { required: "Tax ID is required", pattern: { value: /^T\d{4}V\d{6}$/, message: "Invalid tax ID format" } })}
                                className="input mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.store_tax_no && <p className="text-[#b55521] text-sm">{errors.store_tax_no.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="store_bank_account" className="block text-sm font-semibold text-gray-700">Store Bank Account</label>
                            <input
                                id="store_bank_account"
                                {...register("store_bank_account", { required: "Bank Account is required", pattern: { value: /[A-Za-z0-9]{24}/, message: "Invalid IBAN" } })}
                                className="input mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.store_bank_account && <p className="text-[#b55521] text-sm">{errors.store_bank_account.message}</p>}
                        </div>
                    </>
                )}

                <div className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-2">
                        <input
                            type="checkbox"
                            id="terms"
                            {...register("terms", { required: "You must accept the terms and conditions" })}
                            className="mt-1"
                        />
                        <label htmlFor="terms" className="text-sm">
                            By registering, you agree with our{" "}
                            <a href="/terms" target="_blank" className="text-[#947f5a] hover:text-[#F2D7A7] hover:underline transition-colors duration-300">
                                Terms
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" target="_blank" className="text-[#947f5a] hover:text-[#F2D7A7] hover:underline transition-colors duration-300">
                                Privacy Policy
                            </a>.
                        </label>
                    </div>
                    {errors.terms && <p className="text-[#b55521] text-sm">{errors.terms.message}</p>}

                    <div className="flex items-start space-x-2">
                        <input
                            type="checkbox"
                            id="subscribe"
                            {...register("subscribe")}
                            className="mt-1"
                        />
                        <label htmlFor="subscribe" className="text-sm">
                            Subscribe to our newsletter for updates and offers.
                        </label>
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="w-full bg-[#1E1E1E] text-[#F2D7A7] font-semibold py-2 px-4 rounded-lg focus:outline-none hover:bg-[#D0A85C] hover:text-black transition disabled:bg-[#947f5a] disabled:text-[#e8d7b0] disabled:cursor-not-allowed flex items-center justify-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="w-5 h-5 text-white animate-spin"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M4 12a8 8 0 0 1 8-8h0a8 8 0 0 1 8 8"
                                    />
                                </svg>
                                <span>Loading...</span>
                            </div>
                        ) : (
                            "Sign Up"
                        )}
                    </button>

                </div>
            </form>
        </div>
    );
};

export default SignupForm;
