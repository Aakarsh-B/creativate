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
			<p className="p-[20px_15px] rounded-[6px] bg-primaryBlue text-primaryDark text-[20px] leading-[24px] font-bold text-center block mt-[40px]">
				Our team will contact you soon.
			</p>
		);
	}

	const inputWrap = `w-full lg:max-h-[64px] transition-all duration-300 ease-in-out relative mb-[24px] md:mb-[30px]`;
	const inputField = `bg-[#262849] px-[32px] py-[24px] md:py-[20px] rounded-[8px] w-full h-full text-[20px] leading-[24px] text-primaryLight font-[400]`;
	const errorMsg = `text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-red-600 font-bold transition-all duration-300 ease-in-out`;

	// http://www.egov.local/wp-json/contact-form-7/v1/contact-forms/12/feedback/

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="mt-[10px] md:mt-[20px]">
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
				<div className={`${inputWrap} min-h-[124px]`}>
					<textarea
						id="message"
						className={`${inputField} h-full w-full min-h-[124px]`}
						name="message"
						placeholder="Message"
					/>
				</div>
				{isValid ? (
					<button
						className="text-[24px] leading-[30px] md:text-[26px] md:leading-[32px] font-[400] text-center w-full max-h-[80px] rounded-[8px] px-[15px] py-[10px] md:px-[25px] md:py-[15px] bg-primaryBlue text-primaryLight break-words max-lg:mx-auto"
						type="submit">
						Send
					</button>
				) : (
					<p className="text-[24px] leading-[30px] md:text-[26px] md:leading-[32px] font-[400] text-center w-full max-h-[80px] rounded-[8px] px-[15px] py-[10px] md:px-[25px] md:py-[15px] bg-primaryBlue text-primaryLight break-words max-lg:mx-auto">
						Send
					</p>
				)}
			</form>
		</>
	);
};

export default FormFields;
