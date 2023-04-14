const mongoose = require("mongoose");
const moongosePaginate = require("mongoose-paginate");

const NewsletterSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
});

NewsletterSchema.plugin(moongosePaginate);

module.exports = mongoose.model("Newsletter", NewsletterSchema);