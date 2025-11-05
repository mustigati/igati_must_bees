// src/pages/Signin.tsx
import React, { type FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import FormContainer from "@/components/ui/FormContainer";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/formButton";
import { useAuth } from "@/hooks/useAuth";

/* ---------- TYPES ---------- */
type FormShape = { email: string; password: string };
type FormErrors = Partial<Record<keyof FormShape, string>>;

/* ---------- CONSTANTS ---------- */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signin() {
	const navigate = useNavigate();
	const { login, isLoading, error, clearError } = useAuth();

	/* ---------- STATE ---------- */
	const [form, setForm] = useState<FormShape>({ email: "", password: "" });
	const [errors, setErrors] = useState<FormErrors>({});
	const [showPassword, setShowPassword] = useState(false);

	/* ---------- SIDE-EFFECTS ---------- */
	useEffect(() => {
		if (error) {
			toast.error(error);
			clearError();
		}
	}, [error, clearError]);

	/* ---------- HANDLERS ---------- */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm((s) => ({ ...s, [name]: value }));
		if (errors[name as keyof FormShape])
			setErrors((e) => ({ ...e, [name]: undefined }));
	};

	const validate = (): FormErrors => {
		const e: FormErrors = {};
		if (!form.email) e.email = "Required";
		else if (!EMAIL_REGEX.test(form.email)) e.email = "Invalid email format";
		if (!form.password) e.password = "Required";
		return e;
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length) {
			setErrors(validationErrors);
			return;
		}

		const res = await login(form);
		if (res.success) {
			toast.success("Welcome back!");
			navigate("/", { replace: true });
		}
		// auth store already toasted the exact error via useEffect above
	};

	/* ---------- RENDER ---------- */
	return (
		<FormContainer title="Welcome back" subtitle="Sign in to your account">
			<form onSubmit={handleSubmit} noValidate className="space-y-4">
				<Input
					label="Email"
					name="email"
					type="email"
					placeholder="you@example.com"
					value={form.email}
					onChange={handleChange}
					error={errors.email}
					
					
				/>

				<div className="relative">
					<Input
						label="Password"
						name="password"
						type={showPassword ? "text" : "password"}
						placeholder="••••••••"
						value={form.password}
						onChange={handleChange}
						error={errors.password}
						
					/>
					<button
						type="button"
						aria-label={showPassword ? "Hide password" : "Show password"}
						onClick={() => setShowPassword((s) => !s)}
						className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
					>
						{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
					</button>
				</div>

				<div className="text-right">
					<button
						type="button"
						onClick={() => navigate("/forgot-password")}
						disabled={isLoading}
						className="text-sm text-amber-600 hover:underline disabled:opacity-50"
					>
						Forgot password?
					</button>
				</div>

				<Button type="submit" loading={isLoading} >
					Sign in
				</Button>
			</form>

			<p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
				Don’t have an account?{" "}
				<button
					type="button"
					onClick={() => navigate("/signup")}
					disabled={isLoading}
					className="text-amber-600 font-medium hover:underline disabled:opacity-50"
				>
					Sign up
				</button>
			</p>
		</FormContainer>
	);
}
