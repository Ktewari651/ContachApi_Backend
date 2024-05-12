module.exports = {

    GetUser: (req, res) => {
        return res.status(203).json({ message: "GET DETAILSSSS" })
    },


    PostUser: (req, res) => {
        try {
            const { name, email, phone } = req.body
            if (!name || !email || !phone) {
                res.status(400).json({ message: "Bad request User" })
                throw new Error("All Fields are mandatory")
            }

            return res.status(203).json({ message: "POST METHOD" })
        }
        catch (error) {

        }
    },


    PutUser: (req, res) => {
        return res.status(203).json({ message: "PUT METHOD" })
    },
    DeleteUser: (req, res) => {
        return res.status(203).json({ message: `DELETE METHOD ${req.params.id}` })
    }

}