import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "@/components/ui/FormContainer";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/formButton";

interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<SignupForm>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs: Partial<SignupForm> = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters";
    if (form.confirmPassword !== form.password)
      errs.confirmPassword = "Passwords do not match";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      // call your signup API here
      navigate("/login");
    } catch {
      setErrors({ email: "Signup failed. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer title="Create Account" subtitle="Sign up to get started">
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
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
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Choose a password"
          error={errors.password}
        />
        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Repeat password"
          error={errors.confirmPassword}
        />
        <Button type="submit" loading={loading}>
          Sign Up
        </Button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/signin")}
          className="text-amber-600 font-medium hover:underline text-lg"
        >
          Log in
        </button>
      </p>
    </FormContainer>
  );
};

export default Signup;
