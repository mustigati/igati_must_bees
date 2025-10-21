import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "@/components/ui/FormContainer";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/formButton";

interface SigninForm {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<SigninForm>({ email: "", password: "" });
  const [errors, setErrors] = useState<Partial<SigninForm>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Partial<SigninForm> = {};
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    try {
      // API Signin call here
      navigate("/");
    } catch {
      setErrors({ password: "Invalid credentials" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer title="Welcome Back" subtitle="Signin to your account">
      <form onSubmit={handleSubmit}>
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
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={errors.password}
        />

        <div className="text-right mb-4">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-lg text-amber-600 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <Button type="submit" loading={loading}>
          Signin
        </Button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
        Don’t have an account?{" "}
        <button
          onClick={() => navigate("/signup")}
          className="text-amber-600 font-medium hover:underline cursor-pointer text-lg"
        >
          Sign up
        </button>
      </p>
    </FormContainer>
  );
};

export default Signin;
