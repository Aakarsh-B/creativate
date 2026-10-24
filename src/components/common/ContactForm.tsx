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
	return (
		<div className={`w-full ${className ? className : ""}`}>
			<div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-surface p-[24px] md:p-[36px] lg:sticky lg:top-[110px]">
				<div className="pointer-events-none absolute -right-[80px] -top-[80px] h-[220px] w-[220px] rounded-full bg-primaryBlue/30 blur-[90px]" />
				<h4 className="relative text-[32px] leading-[1.05] font-[500] tracking-[-0.035em] text-primaryLight lg:text-[40px]">
					{formData?.title}
				</h4>
				<p className="relative mt-[10px] text-[15px] leading-[1.5] text-primaryLight/55">
					Tell us a little about your project and we’ll get back to you.
				</p>

				<div className="relative mt-[24px] flex flex-wrap items-center gap-[8px]">
					{formData?.contact_email && (
						<Link
							href={`mailto:${formData?.contact_email}`}
							className="inline-flex h-[44px] items-center gap-[8px] rounded-full bg-white/[0.06] px-[16px] text-[15px] font-[500] text-primaryLight transition-colors duration-300 hover:bg-lime hover:text-primaryDark">
							<span aria-hidden>✉</span>
							{formData?.contact_email}
						</Link>
					)}
					{social_links?.length > 0 &&
						social_links.map((item: any, index: number) => (
							<Link
								key={index}
								href={`${item?.link}`}
								target="_blank"
								aria-label="Social profile"
								className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/[0.06] transition-colors duration-300 hover:bg-white/[0.14]">
								<ImageLoader
									src={item?.icon}
									alt=""
									width={20}
									height={20}
									className="h-[20px] w-[20px] object-contain"
								/>
							</Link>
						))}
				</div>

				<div className="relative my-[24px] flex items-center gap-[12px] text-[13px] uppercase tracking-[0.14em] text-primaryLight/40">
					<span className="h-px flex-1 bg-white/10" />
					or write to us
					<span className="h-px flex-1 bg-white/10" />
				</div>
				<div className="relative">
					<FormFields />
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
