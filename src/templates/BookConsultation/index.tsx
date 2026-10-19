"use client";

import SectionLayout from "@/templates/SectionLayout";
import React, { useState, useEffect, useCallback } from "react";
import Input from "@/components/Form/Input";
import { FormUtils } from "@/utils/baseUtils";
import { useForm } from "@formspree/react";
import Styles from "./bookConsultation.module.scss";

const formData = {
	form: {
		budget: {
			type: "select",
			inputName: "budget",
			label: "",
		},
		summary_project: {
			type: "textarea",
			inputName: "summary_project",
			placeholder: "Summary Project *",
			required: true,
			className: "summary-project",
		},
		name: {
			type: "input",
			inputName: "name",
			autoComplete: "name",
			placeholder: "Name *",
			required: true,
			className: "contactus-name",
		},
		email: {
			type: "input",
			inputName: "email",
			placeholder: "Email Address *",
			required: true,
			className: "contactus-email",
		},
		phone_number: {
			type: "input",
			inputName: "phone_number",
			placeholder: "Phone *",
			required: true,
			className: "book-phone",
		},
		bussiness_name: {
			type: "input",
			inputName: "bussiness_name",
			placeholder: "Bussiness Name (optional)",
			required: false,
			className: "bussiness-name",
		},
		website: {
			type: "input",
			inputName: "website",
			placeholder: "Website (optional)",
			required: false,
			className: "website",
		},
		accepted_terms: {
			type: "checkbox",
			inputName: "accepted_terms",
			required: true,
			default: true,
			name: "Accept terms and condition",
		},
	},
};

function createInitialState(formData: any) {
	const initialState: any = {};
	for (const key in formData) {
		initialState[key] = "";
	}
	return initialState;
}

function BookConsultation(props: any) {
	let _getutils = new FormUtils();
	const [state, sendMail] = useForm(`xpzvonyv`);
	const [childInputData, setChildInputData] = useState<any>({});
	const [errorData, setErrorData] = useState<any>({});
	const [errorTimeOut, setErrorTimeOut] = useState<any>();
	const [loader, setLoader] = useState<boolean>(false);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [userData, setUserData] = useState(createInitialState(formData.form));
	const [isTermsChecked, setIsTermsChecked] = useState(true);

	const [responseMsg, setResponseMsg] = useState<any>({
		show: false,
		status: "",
		message: "",
	});

	const formInputDataKey = {
		name: "name",
		email: "email",
		phone_number: "phone_number",
		summary_project: "summary_project",
		accepted_terms: "accepted_terms",
	};

	const [activeItems, setActiveItems] = useState<any>(["design_branding"]);

	const handleClick = (item: any) => {
		const index: any = activeItems.indexOf(item);
		if (index === -1) {
			setActiveItems([...activeItems, item]); // Add item to activeItems array
		} else {
			setActiveItems(activeItems.filter((i: any) => i !== item)); // Remove item from activeItems array
		}
	};

	const handleCheckboxChange = () => {
		setIsTermsChecked((prev: any) => !prev); // Toggle the isChecked state
	};

	function disableFocus(params: any) {
		// console.log(params);
	}

	useEffect(() => {
		let getChildData = childInputData;
		setErrorData({
			...errorData,
			[getChildData?.storeKey]: {
				show: false,
				msg: "",
			},
		});
		let checkFormDetail = _getutils.handleCommonFormValidation(
			getChildData?.userData,
			getChildData?.formField
		);
		let msg = checkFormDetail.errorData[getChildData?.storeKey] ?? "";
		let storeKeyVal = {};
		if (getChildData?.storeKey) {
			storeKeyVal = {
				[getChildData?.storeKey]:
					getChildData.userData?.[getChildData?.storeKey],
			};
		}
		if (storeKeyVal) {
			setUserData({
				...userData,
				...storeKeyVal,
			});
		}
		if (errorTimeOut) {
			clearTimeout(errorTimeOut);
		}
		setErrorTimeOut(
			setTimeout(() => {
				if (getChildData?.storeKey) {
					if (msg != "") {
						setErrorData({
							...errorData,
							[getChildData?.storeKey]: {
								show: true,
								msg,
							},
						});
					} else {
						setErrorData({
							...errorData,
							[getChildData?.storeKey]: {
								show: false,
								msg: "",
							},
						});
					}
				}
				setResponseMsg({
					show: false,
					status: "",
					message: "",
				});
			}, 1000)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [childInputData]);

	const handleInput = useCallback((childInputData: any) => {
		setChildInputData(childInputData);
	}, []);

	const handleSubmit = async () => {
		setResponseMsg({
			show: false,
			status: "",
			message: "",
		});
		let isFomSubmit = _getutils.handleCommonFormValidation(
			userData,
			formInputDataKey
		);
		if (isFomSubmit.errorCount > 0) {
			let updatedErrorData: any = {};
			let inputField = [
				"name",
				"email",
				"phone_number",
				"summary_project",
				"accepted_terms",
			];
			Object.keys(isFomSubmit.errorData).forEach((val: any) => {
				if (inputField.includes(val)) {
					updatedErrorData[val] = {
						msg: isFomSubmit.errorData[val],
						show:
							isFomSubmit.errorData[val] &&
							isFomSubmit.errorData[val] != ""
								? true
								: false,
					};
				}
			});
			setErrorData({ ...isFomSubmit.errorData, ...updatedErrorData });
		} else {
			// Ready to submit the form
			const filteredItems = props?.data?.service_provided.filter(
				(item: any) => activeItems.includes(item.value)
			);
			const updatedServiceProvided = filteredItems.map(
				(item: any) => item.name
			);
			userData.purpose = updatedServiceProvided.join(", "); // convert array value as string with comma seprated
			userData.accepted_terms = isTermsChecked;
			if (!isSubmitting) {
				setLoader(true);
				setIsSubmitting(true);
				sendMail(userData);
			}
		}
	};

	return (
		<SectionLayout>
			<div className="md:flex md:justify-start md:flex-wrap py-[32px] md:pt-[60px] md:pb-[100px]">
				<div className="max-w-[800px] mx-auto">
					{state.succeeded ? (
						<p className="p-[20px_15px] rounded-[6px] bg-primaryBlue text-primaryDark text-[20px] leading-[24px] font-bold text-center block mt-[40px]">
							Our team will contact you soon.
						</p>
					) : (
						<form
							className={``}
							autoComplete="on"
							onSubmit={(e: any) => {
								e.preventDefault();
								handleSubmit();
							}}>
							<div className="flex flex-col md:flex-row flex-wrap">
								<div className="relative w-full h-full md:max-w-[100%] mb-[50px]">
									<p
										className={`text-[18px] sm:text-[20px] leading-[30px] text-center sm:text-left ${Styles.title} mb-[25px]`}>
										1. What can we help you with ?
									</p>
									<div className="grid sm:grid-cols-2 gap-[20px] sm:gap-[24px]">
										{props?.data?.service_provided?.map(
											(item: any, i: any) => (
												<div
													key={i}
													onClick={() =>
														handleClick(item.value)
													}
													className={`cursor-pointer p-[16px] sm:p-[20px] rounded-[8px] w-full h-full text-[20px] leading-[24px] text-[#F4F4F4] text-center font-[400] transition-all duration-[0.2s] ease-in ${
														activeItems.includes(
															item.value
														)
															? "bg-primaryBlue"
															: "bg-[#262849]"
													}`}>
													{item.name}
												</div>
											)
										)}
									</div>
								</div>
								<div className="relative w-full h-full md:max-w-[100%] mb-[30px]">
									<p
										className={`text-[18px] sm:text-[20px] leading-[30px] text-center sm:text-left ${Styles.title} mb-[25px]`}>
										2. About Your Project
									</p>
									<Input
										errorData={errorData?.budget ?? {}}
										defaultValue={userData.budget}
										disableFocus={disableFocus}
										onChange={handleInput}
										floatingLabel={false}
										editable={true}
										dataPassToParent={disableFocus}
										data={formData.form.budget}
										options={props?.data?.budget_options}
										required={false}
										addPlaceHolder={true}
										className="w-full lg:max-h-[64px] transition-all duration-300 ease-in-out relative mb-[20px] md:mb-[24px]"
										inputClassName=""
									/>
									<Input
										errorData={
											errorData?.summary_project ?? {}
										}
										defaultValue={userData.summary_project}
										disableFocus={disableFocus}
										onChange={handleInput}
										floatingLabel={false}
										editable={true}
										dataPassToParent={disableFocus}
										data={formData.form.summary_project}
										required={false}
										addPlaceHolder={true}
										row={5}
										className="w-full transition-all duration-300 ease-in-out relative"
										inputClassName=""
									/>
								</div>

								<div className="relative w-full h-full md:max-w-[100%] mb-[30px]">
									<p
										className={`text-[18px] sm:text-[20px] leading-[30px] text-center sm:text-left ${Styles.title} mb-[25px]`}>
										3. About You
									</p>
									<Input
										errorData={errorData?.name ?? {}}
										defaultValue={userData.name}
										disableFocus={disableFocus}
										onChange={handleInput}
										floatingLabel={false}
										editable={true}
										dataPassToParent={disableFocus}
										data={formData.form.name}
										required={false}
										addPlaceHolder={true}
										className="w-full lg:max-h-[64px] transition-all duration-300 ease-in-out relative mb-[20px] md:mb-[24px]"
										inputClassName=""
									/>

									<Input
										errorData={errorData?.email ?? {}}
										defaultValue={userData.email}
										disableFocus={disableFocus}
										onChange={handleInput}
										floatingLabel={false}
										editable={true}
										dataPassToParent={disableFocus}
										data={formData.form.email}
										required={false}
										addPlaceHolder={true}
										className="w-full lg:max-h-[64px] transition-all duration-300 ease-in-out relative mb-[20px] md:mb-[24px]"
										inputClassName=""
									/>

									<Input
										errorData={
											errorData?.phone_number ?? {}
										}
										defaultValue={userData.phone_number}
										disableFocus={disableFocus}
										onChange={handleInput}
										floatingLabel={false}
										editable={true}
										dataPassToParent={disableFocus}
										data={formData.form.phone_number}
										required={false}
										addPlaceHolder={true}
										className="w-full lg:max-h-[64px] transition-all duration-300 ease-in-out relative mb-[20px] md:mb-[24px]"
										inputClassName=""
									/>

									<Input
										errorData={
											errorData?.bussiness_name ?? {}
										}
										defaultValue={userData.bussiness_name}
										disableFocus={disableFocus}
										onChange={handleInput}
										floatingLabel={false}
										editable={true}
										dataPassToParent={disableFocus}
										data={formData.form.bussiness_name}
										required={false}
										addPlaceHolder={true}
										className="w-full lg:max-h-[64px] transition-all duration-300 ease-in-out relative mb-[20px] md:mb-[24px]"
										inputClassName=""
									/>

									<Input
										errorData={errorData?.website ?? {}}
										defaultValue={userData.website}
										disableFocus={disableFocus}
										onChange={handleInput}
										floatingLabel={false}
										editable={true}
										dataPassToParent={disableFocus}
										data={formData.form.website}
										required={false}
										addPlaceHolder={true}
										className="w-full lg:max-h-[64px] transition-all duration-300 ease-in-out relative mb-[20px] md:mb-[24px]"
										inputClassName=""
									/>
									<div className="flex w-full">
										<label className="relative flex cursor-pointer items-start h-[24px] mr-[10px]">
											<input
												type="checkbox"
												checked={isTermsChecked}
												name="accepted_terms"
												onChange={handleCheckboxChange}
												className="peer cursor-pointer appearance-none relative h-[24px] w-[24px] bg-[#262849] border border-[#262849] transition-all checked:border-primaryBlue checked:bg-primaryBlue rounded-[6px]"
											/>
											<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-3.5 w-3.5"
													viewBox="0 0 20 20"
													fill="currentColor"
													stroke="currentColor"
													strokeWidth="1">
													<path
														fillRule="evenodd"
														d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
														clipRule="evenodd"></path>
												</svg>
											</div>
										</label>
										<p className="text-[14px] leading-[16px] text-left text-[#f4f4f4]">
											We're all about respecting your
											privacy like it's VIP status! Your
											personal info? It's strictly for
											providing you with the scoop on our
											services - nothing else! Want to be
											part of the inner circle at
											Creativate and snag those insider
											updates? Give that box a little
											check (don't worry, we're not about
											spamming - pinky swear!). Check out
											the{" "}
											<a
												className="text-primaryBlue underline"
												href="/privacy-policy">
												Privacy Policy
											</a>{" "}
											for the nitty-gritty details!
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-center">
								<button
									className={`group cursor-pointer tracking-wide bg-primaryBlue border-[2px] border-solid border-primaryBlue hover:opacity-75 flex items-center justify-center rounded-[8px] text-primaryLight text-center px-[10px] text-[16px] leading-[22px] xl:px-[20px] xl:text-[20px] xl:leading-[24px]  w-full h-[50px] xl:h-[65px] p-[18px] cursor-pointer transition-all duration-300 ease-in-out capitalize ${
										isSubmitting
											? "pointer-events-none"
											: ""
									}`}
									data-target="free-consultation">
									<span className="shrink-0">Send</span>
								</button>
								{/* {(loader) && (
								<div className="relative bg-[#23282d] ml-[25px] opacity-[0.75] w-[24px] h-[24px] border-none rounded-[100%] p-0 before:content-[''] before:absolute before:bg-[#fbfbfc] before:top-[4px] before:left-[4px] before:w-[6px] before:h-[6px] before:rounded-[100%] before:animate-spin before:animate-[spin_1000ms_linear_infinite] before:origin-[8px_8px]"></div>
							)} */}
							</div>
							{responseMsg.show && (
								<p
									className={`border-[2px] mx-[10px] mt-[30px] mb-[15px] px-[15px] py-[5px] ${
										responseMsg.status == "success"
											? "border-[#46b450]"
											: "border-[#f02525]"
									}`}>
									{responseMsg.message}
								</p>
							)}
						</form>
					)}
				</div>
			</div>
		</SectionLayout>
	);
}

export default BookConsultation;
