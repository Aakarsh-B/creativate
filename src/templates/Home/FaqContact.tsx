import FaqList from "@/components/common/FaqList";
import ContactForm from "@/components/common/ContactForm";
import SectionLayout from "@/templates/SectionLayout";

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
		<section className={`relative bg-primaryDark py-[80px] lg:py-[140px]`}>
			{sectionId && (
				<span
					id={sectionId}
					className="targetCode top-[-45px]"
				/>
			)}
			<SectionLayout className="grid grid-cols-1 gap-[56px] lg:grid-cols-12 lg:gap-[48px]">
				<FaqList
					title={questionsList.title}
					desc={questionsList.description}
					faqList={questionsList.question_answer_list}
					className={`lg:col-span-7`}
				/>
				<ContactForm
					formData={contactForm}
					social_links={social_links}
					className={`lg:col-span-5`}
				/>
			</SectionLayout>
		</section>
	);
};

export default FaqContact;
