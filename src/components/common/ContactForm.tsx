import Link from "next/link";
import React from "react";
import FormFields from "./FormFields";
import ImageLoader from "@/utils/ImageLoader";

const ContactForm = ({
	formData,
	className,
	social_links,
}: {
	formData: any;
	className?: String;
	social_links: any;
}) => {
	console.log(social_links);
	return (
		<div className={`w-full lg:w-1/2 ${className ? className : ""}`}>
			<div
				className={`p-[52px_16px_32px] md:p-[57px_40px_75px] bg-[#191B35] rounded-[8px] overflow-hidden relative`}>
				<span
					className={`absolute w-full h-[15px] top-0 right-0 left-0 bg-[linear-gradient(91.94deg,_#F98DD3_0%,_#EDD453_100%)]`}
				/>
				<h4
					className={`text-[32px] leading-[40px] font-[400] text-primaryLight text-center lg:text-[40px] lg:leading-[48px] mb-[16px] lg:mb-[40px]`}>
					{formData?.title}
				</h4>
				<div
					className={`flex flex-col-reverse lg:flex-row items-center justify-center`}>
					{social_links?.length > 0 && (
						<div className="flex items-center justify-center gap-[15px] max-lg:mt-[15px] md:mr-[20px] lg:mr-[32px]">
							{social_links.map((item: any, index: number) => (
								<Link
									key={index}
									href={`${item?.link}`}
									target="_blank"
									className="max-w-[38px] max-h-[38px] md:max-w-[24px] md:max-h-[24px]">
									<ImageLoader
										src={item?.icon}
										alt="social icon"
										className=""
										width={30}
										height={30}
									/>
								</Link>
							))}
						</div>
					)}

					{formData?.contact_email && (
						<Link
							href={`mailto:${formData?.contact_email}`}
							className={`inline-flex items-center justify-center text-[24px] leading-[28px] md:text-[20px] md:leading-[24px] text-primaryLight font-[400]`}>
							<span className="mr-[8px] max-w-[42px] max-h-[42px] md:max-w-[30px] md:max-h-[30px]">
								<svg
									width="40"
									height="40"
									viewBox="0 0 48 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="w-full h-full">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M38.5635 31.572C38.925 29.754 39 27.384 39 24C39 20.616 38.925 18.246 38.5635 16.428C38.2395 14.763 37.764 14.0625 37.2675 13.6485C36.6915 13.1685 35.6265 12.687 33.372 12.3825C31.0755 12.069 28.089 12 24 12C19.9125 12 16.9245 12.069 14.628 12.3825C12.3735 12.687 11.3085 13.1685 10.7325 13.6485C10.236 14.0625 9.7605 14.763 9.4365 16.428C9.075 18.246 9 20.616 9 24C9 27.384 9.075 29.754 9.4365 31.572C9.7605 33.237 10.236 33.9375 10.7325 34.3515C11.3085 34.8315 12.3735 35.313 14.628 35.616C16.9245 35.931 19.9125 36 24 36C28.089 36 31.0755 35.931 33.372 35.616C35.6265 35.313 36.6915 34.8315 37.2675 34.3515C37.764 33.9375 38.2395 33.237 38.5635 31.572ZM24 39C40.5 39 42 37.7505 42 24C42 10.2495 40.5 9 24 9C7.5 9 6 10.2495 6 24C6 37.7505 7.5 39 24 39ZM11.0235 16.839C11.64 16.323 12.558 16.4055 13.0725 17.025C15.075 19.4265 21.498 25.002 24 26.913C26.544 24.969 32.8965 19.4685 34.9275 17.025C35.442 16.4055 36.36 16.323 36.9765 16.839C37.5945 17.355 37.677 18.2745 37.1625 18.894C36.12 20.151 34.1325 22.0875 32.019 24C34.1325 25.9125 36.12 27.849 37.1625 29.106C37.677 29.724 37.5945 30.645 36.9765 31.161C36.36 31.677 35.442 31.5945 34.9275 30.975C33.9345 29.778 31.905 27.8505 29.7945 25.9665C28.1415 27.3915 26.589 28.65 25.533 29.403C25.08 29.7225 24.567 30 24 30C23.433 30 22.92 29.7225 22.4685 29.403C21.432 28.665 19.8765 27.4005 18.216 25.965C16.095 27.861 14.0535 29.799 13.0725 30.975C12.558 31.5945 11.64 31.677 11.0235 31.161C10.407 30.645 10.323 29.7255 10.8375 29.106L10.839 29.1045C11.8635 27.8715 13.866 25.926 15.993 24C13.866 22.074 11.8635 20.127 10.839 18.8955L10.8375 18.894C10.323 18.2745 10.407 17.355 11.0235 16.839Z"
										fill="#F4F4F4"
									/>
								</svg>
							</span>
							{formData?.contact_email}
						</Link>
					)}
				</div>
				<p
					className={`text-center text-[24px] leading-[28px] font-[400] text-primaryLight relative z-[2] before:absolute before:inset-0 before:w-full before:h-[1px] before:bg-[#F4F4F4] before:opacity-20 before:left-1/2 before:right-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-[1] before:top-1/2 mt-[10px] lg:mt-[20px] 2xl:mt-[32px]`}>
					<span className="bg-[#191B35] px-[15px] 2xl:px-[30px] transition-all duration-300 ease-linear z-[2] relative">
						or
					</span>
				</p>
				<FormFields />
			</div>
		</div>
	);
};

export default ContactForm;
