"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useEffect, ChangeEvent, useState } from "react";

const FormFields = () => {
	const [state, handleSubmit] = useForm(`mwkgrnba`);

	const [errors, setErrors] = useState({
		fullName: "",
		email: "",
	});
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
	});

	const [isValid, setIsValid] = useState(false);

	const validateEmail = (email: any) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		// Validation checks
		if (name === "fullName" && (value === null || value === "")) {
			setErrors((prevErrors) => ({
				...prevErrors,
				[name]: "Enter valid name",
			}));
			return;
		}

		if (
			name === "email" &&
			(!validateEmail(value) || value === "" || value === null)
		) {
			setErrors((prevErrors) => ({
				...prevErrors,
				[name]: "Enter a valid email address",
			}));
			return;
		}

		// Clear the error if the value is valid
		setFormData((preValue) => ({ ...preValue, [name]: value }));
		setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
	};

	useEffect(() => {
		if (
			errors.fullName == "" &&
			errors.email == "" &&
			formData.fullName != "" &&
			formData.email != ""
		) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}, [errors]);

	if (state.succeeded) {
		return (
			<p className="block rounded-[16px] bg-lime p-[20px] text-center text-[18px] leading-[24px] font-[600] text-primaryDark">
				Our team will contact you soon.
			</p>
		);
	}

	const inputWrap = `w-full relative mb-[12px]`;
	const inputField = `w-full h-full rounded-[16px] border border-white/[0.08] bg-primaryDark/60 px-[20px] py-[16px] text-[16px] leading-[24px] text-primaryLight placeholder:text-primaryLight/35 outline-none transition-colors duration-300 focus:border-lime/60`;
	const errorMsg = `mt-[6px] pl-[4px] text-[13px] leading-[18px] text-[#FF7A7A] font-[500]`;
	const submitBtn = `mt-[8px] inline-flex h-[56px] w-full items-center justify-center gap-[10px] rounded-full text-[16px] font-[600] transition-all duration-300 ease-expo`;

	// http://www.egov.local/wp-json/contact-form-7/v1/contact-forms/12/feedback/

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="">
				<div className={`${inputWrap}`}>
					<input
						id="fullName"
						type="text"
						name="fullName"
						className={`${inputField}`}
						placeholder="Full Name"
						onChange={handleChange}
					/>
					<ValidationError
						prefix="FullName"
						field="fullName"
						errors={state.errors}
					/>
					{errors.fullName && (
						<p className={`${errorMsg}`}>{errors.fullName}</p>
					)}
				</div>
				<div className={`${inputWrap}`}>
					<input
						id="email"
						type="email"
						name="email"
						className={`${inputField}`}
						placeholder="Email"
						onChange={handleChange}
					/>
					<ValidationError
						prefix="Email"
						field="email"
						errors={state.errors}
					/>
					{errors.email && (
						<p className={`${errorMsg}`}>{errors.email}</p>
					)}
				</div>
				<div className={`${inputWrap}`}>
					<textarea
						id="message"
						className={`${inputField} min-h-[132px] resize-none`}
						name="message"
						placeholder="Message"
					/>
				</div>
				{isValid ? (
					<button
						className={`${submitBtn} bg-lime text-primaryDark hover:bg-primaryLight`}
						type="submit"
						disabled={state.submitting}>
						{state.submitting ? "Sending…" : "Send message ↗"}
					</button>
				) : (
					<p className={`${submitBtn} bg-white/[0.06] text-primaryLight/40 cursor-not-allowed`}>
						Send message ↗
					</p>
				)}
			</form>
		</>
	);
};

export default FormFields;
