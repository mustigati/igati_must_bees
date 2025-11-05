import React, { type FormEvent, useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { EyeIcon, EyeOff } from "lucide-react";
import FormContainer from "@/components/ui/FormContainer";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/formButton";
import { useAuth } from "@/hooks/useAuth";

/* ---------- TYPES ---------- */
type FormShape = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	phoneNumber: string;
};

type FormErrors = Partial<Record<keyof FormShape, string>>;

/* ---------- CONSTANTS ---------- */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[\d\s\-()]+$/;
const MIN_PASSWORD = 8;

/* ---------- COMPONENT ---------- */
export default function Signup() {
	const navigate = useNavigate();
	const { register, isLoading, error, clearError } = useAuth();

	/* ---------- STATE ---------- */
	const [form, setForm] = useState<FormShape>({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		phoneNumber: "",
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);

	/* ---------- SIDE-EFFECTS ---------- */
	useEffect(() => {
		if (error) {
			toast.error(error);
			clearError();
		}
	}, [error, clearError]);

	/* ---------- DERIVED ---------- */
	const passwordStrength = useMemo(() => {
		const { password } = form;
		if (password.length < MIN_PASSWORD)
			return { label: "Too short", cls: "text-red-500" };
		if (!/[A-Z]/.test(password))
			return { label: "Add uppercase", cls: "text-yellow-500" };
		if (!/[0-9]/.test(password))
			return { label: "Add number", cls: "text-yellow-500" };
		if (!/[^A-Za-z0-9]/.test(password))
			return { label: "Add symbol", cls: "text-yellow-500" };
		return { label: "Strong", cls: "text-green-500" };
	}, [form.password]);

	/* ---------- HANDLERS ---------- */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm((s) => ({ ...s, [name]: value }));
		if (errors[name as keyof FormShape])
			setErrors((e) => ({ ...e, [name]: undefined }));
	};

	const validate = (): FormErrors => {
		const e: FormErrors = {};
		if (!form.name.trim()) e.name = "Full name is required";
		if (!form.email) e.email = "Email is required";
		else if (!EMAIL_REGEX.test(form.email)) e.email = "Invalid email format";
		if (!form.password) e.password = "Password is required";
		else if (form.password.length < MIN_PASSWORD)
			e.password = `Minimum ${MIN_PASSWORD} characters`;
		if (form.confirmPassword !== form.password)
			e.confirmPassword = "Passwords do not match";
		if (!form.phoneNumber) e.phoneNumber = "Phone number is required";
		else if (!PHONE_REGEX.test(form.phoneNumber))
			e.phoneNumber = "Invalid phone format";
		return e;
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length) {
			setErrors(validationErrors);
			return;
		}

		const [firstName, ...rest] = form.name.trim().split(" ");
		const lastName = rest.join(" ") || "";

		const res = await register({
			firstName,
			lastName,
			email: form.email,
			password: form.password,
			phoneNumber: form.phoneNumber,
		});

		if (res.success) {
			toast.success("Account created! Please log in.");
			navigate("/signin", { replace: true });
		}
	};

	/* ---------- RENDER ---------- */
	return (
		<FormContainer title="Create Account" subtitle="Sign up to get started">
			<form onSubmit={handleSubmit} noValidate className="space-y-4">
				<Input
					label="Full Name"
					name="name"
					value={form.name}
					onChange={handleChange}
					placeholder="Jane Doe"
					error={errors.name}
				/>

				<Input
					label="Email"
					name="email"
					type="email"
					value={form.email}
					onChange={handleChange}
					placeholder="you@example.com"
					error={errors.email}
				/>

				<Input
					label="Phone Number"
					name="phoneNumber"
					type="tel"
					value={form.phoneNumber}
					onChange={handleChange}
					placeholder="+1 (555) 123-4567"
					error={errors.phoneNumber}
				/>

				<div className="relative">
					<Input
						label="Password"
						name="password"
						type={showPassword ? "text" : "password"}
						value={form.password}
						onChange={handleChange}
						placeholder="••••••••"
						error={errors.password}
					/>
					<button
						type="button"
						aria-label="Toggle password visibility"
						onClick={() => setShowPassword((s) => !s)}
						className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
					>
						{showPassword ? <EyeOff /> : <EyeIcon />}
					</button>
					<p className={`mt-1 text-xs ${passwordStrength.cls}`}>
						{passwordStrength.label}
					</p>
				</div>

				<div className="relative">
					<Input
						label="Confirm Password"
						name="confirmPassword"
						type={showConfirm ? "text" : "password"}
						value={form.confirmPassword}
						onChange={handleChange}
						placeholder="••••••••"
						error={errors.confirmPassword}
					/>
					<button
						type="button"
						aria-label="Toggle confirm password visibility"
						onClick={() => setShowConfirm((s) => !s)}
						className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
					>
						{showConfirm ? <EyeOff /> : <EyeIcon />}
					</button>
				</div>

				<Button type="submit" loading={isLoading}>
					Create Account
				</Button>
			</form>

			<p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
				Already have an account?{" "}
				<button
					type="button"
					onClick={() => navigate("/signin")}
					disabled={isLoading}
					className="text-amber-600 font-medium hover:underline disabled:opacity-50"
				>
					Log in
				</button>
			</p>
		</FormContainer>
	);
}
