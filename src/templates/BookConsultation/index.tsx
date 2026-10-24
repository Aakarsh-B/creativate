"use client";

import SectionLayout from "@/templates/SectionLayout";
import React, { useState, useEffect, useCallback } from "react";
import Input from "@/components/Form/Input";
import { FormUtils } from "@/utils/baseUtils";
import { useForm } from "@formspree/react";

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
			<div className="py-[48px] md:pt-[72px] md:pb-[140px]">
				<div className="mx-auto max-w-[760px] rounded-[28px] border border-white/[0.08] bg-surface p-[20px] sm:p-[32px] lg:p-[48px]">
					{state.succeeded ? (
						<p className="block rounded-[16px] bg-lime p-[20px] text-center text-[18px] leading-[24px] font-[600] text-primaryDark">
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
								<div className="relative w-full h-full md:max-w-[100%] mb-[40px]">
									<p
										className={`text-[13px] font-[500] uppercase tracking-[0.14em] text-lime text-center sm:text-left mb-[16px]`}>
										1. What can we help you with ?
									</p>
									<div className="grid sm:grid-cols-2 gap-[10px]">
										{props?.data?.service_provided?.map(
											(item: any, i: any) => (
												<div
													key={i}
													onClick={() =>
														handleClick(item.value)
													}
													className={`cursor-pointer select-none px-[20px] py-[16px] rounded-full border w-full h-full text-[15px] leading-[22px] text-center font-[500] transition-all duration-[0.2s] ease-in ${
														activeItems.includes(
															item.value
														)
															? "bg-lime border-lime text-primaryDark"
															: "bg-primaryDark/60 border-white/[0.08] text-primaryLight/80 hover:border-white/25"
													}`}>
													{item.name}
												</div>
											)
										)}
									</div>
								</div>
								<div className="relative w-full h-full md:max-w-[100%] mb-[30px]">
									<p
										className={`text-[13px] font-[500] uppercase tracking-[0.14em] text-lime text-center sm:text-left mb-[16px]`}>
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
										className="w-full transition-all duration-300 ease-in-out relative mb-[24px]"
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
										className={`text-[13px] font-[500] uppercase tracking-[0.14em] text-lime text-center sm:text-left mb-[16px]`}>
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
										className="w-full transition-all duration-300 ease-in-out relative mb-[24px]"
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
										className="w-full transition-all duration-300 ease-in-out relative mb-[24px]"
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
										className="w-full transition-all duration-300 ease-in-out relative mb-[24px]"
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
										className="w-full transition-all duration-300 ease-in-out relative mb-[24px]"
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
										className="w-full transition-all duration-300 ease-in-out relative mb-[24px]"
										inputClassName=""
									/>
									<div className="flex w-full">
										<label className="relative flex cursor-pointer items-start h-[24px] mr-[10px]">
											<input
												type="checkbox"
												checked={isTermsChecked}
												name="accepted_terms"
												onChange={handleCheckboxChange}
												className="peer cursor-pointer appearance-none relative h-[24px] w-[24px] bg-[#1C1C1F] border border-[#1C1C1F] transition-all checked:border-lime checked:bg-lime rounded-[6px]"
											/>
											<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primaryDark opacity-0 transition-opacity peer-checked:opacity-100">
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
										<p className="text-[13px] leading-[1.5] text-left text-primaryLight/55">
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
												className="text-lime underline"
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
									className={`inline-flex h-[56px] w-full items-center justify-center gap-[10px] rounded-full bg-lime text-[16px] font-[600] text-primaryDark transition-colors duration-300 hover:bg-primaryLight ${
										isSubmitting
											? "pointer-events-none opacity-60"
											: ""
									}`}
									data-target="free-consultation">
									<span className="shrink-0">{isSubmitting ? "Sending…" : "Send enquiry ↗"}</span>
								</button>
								{/* {(loader) && (
								<div className="relative bg-[#23282d] ml-[25px] opacity-[0.75] w-[24px] h-[24px] border-none rounded-[100%] p-0 before:content-[''] before:absolute before:bg-[#fbfbfc] before:top-[4px] before:left-[4px] before:w-[6px] before:h-[6px] before:rounded-[100%] before:animate-spin before:animate-[spin_1000ms_linear_infinite] before:origin-[8px_8px]"></div>
							)} */}
							</div>
							{responseMsg.show && (
								<p
									className={`mt-[24px] rounded-[16px] border px-[16px] py-[12px] text-[15px] ${
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
