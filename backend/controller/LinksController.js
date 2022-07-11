import Links from '../model/LinksModel.js'

export const getLinks = async (req, res) => {
    try {
        const links = await Links.find()
        res.json(links)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}