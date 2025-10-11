import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "@/components/ui/FormContainer";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/formButton";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{ type: "error" | "info"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (!email) return setMessage({ type: "error", text: "Email is required" });
    if (!/\S+@\S+\.\S+/.test(email))
      return setMessage({ type: "error", text: "Invalid email" });

    setLoading(true);
    try {
      // API call for password reset
      setMessage({ type: "info", text: "Reset link sent to your email." });
    } catch {
      setMessage({ type: "error", text: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer title="Forgot Password" subtitle="Enter your email to reset password">
      <form onSubmit={handleSubmit}>
        {message && (
          <p
            className={`text-sm mb-4 text-center ${
              message.type === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {message.text}
          </p>
        )}
        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <Button type="submit" loading={loading}>
          Send Reset Link
        </Button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
        Remember your password?{" "}
        <button
          onClick={() => navigate("/signin")}
          className="text-amber-600 font-medium hover:underline"
        >
          Log in
        </button>
      </p>
    </FormContainer>
  );
};

export default ForgotPassword;
