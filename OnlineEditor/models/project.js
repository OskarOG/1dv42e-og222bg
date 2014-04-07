

module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    return mongoose.model("Project", new Schema({
        projectName: String,
        users: [ { type: Schema.Types.ObjectId, ref: "User" } ],
        folders: [ { type: Schema.Types.ObjectId, ref: "Folder" } ]
    }));
};