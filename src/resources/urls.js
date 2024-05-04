import ProjectApi from "./projectapi"

export default {
    /**
     * ElectraMod's normal page
     */
    base: "https://electramod.vercel.app/",

    /**
     * ElectraMod's editor page
     */
    editor: "https://electramod.vercel.app/editor.html",

    /**
     * ElectraMod's credits page
     */
    credits: "https://electramod.vercel.app/credits.html",

    /**
     * ElectraMod's terms of service page
     */
    terms: "/terms",

    /**
     * ElectraMod's privacy policy page
     */
    privacy: "/privacy",

    /**
     * ElectraMod's guideline pages for services
     */
    guidelines: {
        /**
         * ElectraMod's project uploading guidelines
         */
        projects: "https://electramod.vercel.app/PenguinMod-Guidelines/PROJECTS"
    },

    /**
     * Donation pages for sites
     */
    donate: {
        scratch: "https://www.scratchfoundation.org/donate",
        turbowarp: "https://github.com/sponsors/GarboMuffin",
        penguinmod: "https://penguinmod.com/donate"
    },

    /**
     * ElectraMod's project page
     */
    projects: `${ProjectApi.OriginApiUrl}/`,

    /**
     * ElectraMod's my stuff page
     */
    mystuff: `${ProjectApi.OriginApiUrl}/mystuff`,

    /**
     * ElectraMod's home page
     */
    home: "https://electramod-home.vercel.app/",

    /**
     * ElectraMod's packager page
     */
    packager: "https://electramod-packager.vercel.app",

    /**
     * ElectraMod's unofficial wiki
     */
    wiki: "https://penguinmod.fandom.com/wiki/Penguinmod",

    /**
     * ElectraMod's Discord invite
     */
    discord: "https://discord.gg/9TSAK7jEED",

    /**
     * Scratch's website
     */
    scratch: "https://scratch.mit.edu",

    /**
     * TurboWarp's website
     */
    turbowarp: "https://turbowarp.org",

    /**
     * PenguinMod's website
     */
    github: "https://penguinmod.com",
    /**
     * ElectraMod's github page
     */
    github: "https://github.com/ElectraMod/",

    /**
     * ElectraMod's basic API
     */
    basicApi: "https://electra-basic-api.mubi.tech/",

    /**
     * The admin panel for em projects api
     */
    adminPanel: "https://penguinmod.com/panel"
}
