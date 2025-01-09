import BlockFormat from "../utils/BlockFormat";

const clubInfo = {
    name: 'clubInfo',
    title: 'Club Information',
    type: 'document',
    options: { singleton: true },
    fields: [
        {
            name: 'name',
            title: 'Club Name',
            type: 'string',
            validation: rule => rule.required()
        },
        {
            name: 'email',
            title: 'E-mail Address',
            type: 'string',
            validation: rule => rule.required()
        },
        {
            name: 'appPassword',
            title: 'App Password',
            type: 'string',
            validation: rule => rule.required()
        },
        {
            name: 'contactEmails',
            title: 'Contact Emails',
            type: 'array',
            of:[{type:'string'}],
            validation: rule => rule.required()
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: rule => rule.required()
        },
        {
            name: 'address',
            title: 'Address',
            type: 'array',
            of: [{type: 'string'}],
            validation: rule => rule.required()
        },
        {
            name: 'about',
            title: 'About',
            type: 'array',
            of: BlockFormat,
            validation: rule => rule.required()
        },
        {
            name: 'socials',
            title: 'Social Media Links',
            type: 'object',
            validation: rule => rule.required(),
            fields: [
                { name: 'instagram', title: 'Instagram URL', type: 'url' },
                { name: 'facebook', title: 'Facebook URL', type: 'url' },
                { name: 'youtube', title: 'Youtube URL', type: 'url' },
            ],
        },
        {
            name: "primaryHeroText",
            title: "Primary Hero Text",
            type: 'string',
            validation: rule => rule.required(),

        },
        {
            name: "secondaryHeroText",
            title: "Secondary Hero Text",
            type: 'array',
            of: BlockFormat,
            validation: rule => rule.required(),

        },
        {
            name: "logoBig",
            title: "LogoBig",
            type: "image",
            options: { hotspot: true },
            validation: rule => rule.required(),
            fields: [
                { name: "alt", title: "Alt", type: "string" },
            ]
        },
        {
            name: "logoSmall",
            title: "LogoSmall",
            type: "image",
            options: { hotspot: true },
            validation: rule => rule.required(),
            fields: [
                { name: "alt", title: "Alt", type: "string" },
            ]
        },
        {
            name: "gallery",
            title: "Gallery",
            type: "array",
            of: [{ type: "image" }]
        }
    ],
};

export default clubInfo;