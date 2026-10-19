import FaqList from "@/components/common/FaqList";
import ContactForm from "@/components/common/ContactForm";

const FaqContact = ({
	questionsList,
	contactForm,
	social_links,
	sectionId,
}: {
	sectionId: any;
	questionsList: any;
	contactForm: any;
	social_links: any;
}) => {
	return (
		<section className={`py-[50px] lg:py-[100px] bg-primaryDark relative`}>
			{sectionId && (
				<span
					id={sectionId}
					className="targetCode top-[-45px]"
				/>
			)}
			<div
				className={`sm:w-[88%] max-w-[360px] lg:max-w-[1280px] mx-auto relative faqContact-wrap flex flex-col lg:flex-row justify-between`}>
				<FaqList
					title={questionsList.title}
					desc={questionsList.description}
					faqList={questionsList.question_answer_list}
					className={`faqList-wrap`}
				/>
				<ContactForm
					formData={contactForm}
					social_links={social_links}
					className={`contactForm-wrap mt-[50px] lg:mt-0 lg:pl-[20px] 2xl:pl-[50px] max-lg:pt-[40px] max-lg:mb-[24px] `}
				/>
			</div>
		</section>
	);
};

export default FaqContact;
