"use client";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "@/graphql/mutation/user";
const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, { data, loading, error }] = useMutation(SIGN_UP);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp({
        variables: {
          signUpDto: {
            email,
            password,
            image: "",
            name: "Phùng Hữu Đạt",
          },
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        {error && <p>Error: {error.message}</p>}
        {data && <p>Sign Up Successful!</p>}
      </form>
    </div>
  );
};

export default SignUp;
