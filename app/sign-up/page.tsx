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
            image:
              "http://localhost:3000/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLCqQg1srsIG5sC72RI0VxW2gOPmLe1aCEVwn64LcscPJiM7xr2%3Ds96-c&w=96&q=75",
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
