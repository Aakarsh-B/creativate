export type NavItemsParams = {
    route: String,
    menuText: String,
    targetId?: String,
    targetStripe?: Boolean,
    ctaMenu?: Boolean,
    className?: String
    handleClick?: any;
    footer?: Boolean;
}

export type SectionLayoutParams = {
    children: any,
    className?: String,
}

export type SectionTitleParams = {
    children: any,
    className?: String,
}

export type AnimatedTextParams = {
    text: String,
    wrapperClass?: String,
    className?: String,
}

export type CustomerStoryCardProps = {
    content: String;
    name: String;
    designation: String;
    profileImg: String;
    logo: String;
    logoAlt: String;
}

export type faqProps = {
    title: String;
    desc: String;
    faqList: { title: string; desc: string; }[]
    className?: String;
}