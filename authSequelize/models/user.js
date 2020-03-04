var bcrypt = require("bcrypt-nodejs")

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            len: [8]
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            len: [1],
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [8]
        }
    });

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    }

    User.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    });

    //Set your associations here (SQL relationships - User.hasMany)

    return User;
};