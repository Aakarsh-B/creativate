// Readable network name for a social profile link, used as its accessible label
const socialName = (url = "") => {
	if (/instagram\./i.test(url)) return "Creativate on Instagram";
	if (/facebook\./i.test(url)) return "Creativate on Facebook";
	if (/wa\.me|whatsapp\./i.test(url)) return "Chat with Creativate on WhatsApp";
	if (/linkedin\./i.test(url)) return "Creativate on LinkedIn";
	return "Creativate social profile";
};

export default socialName;
