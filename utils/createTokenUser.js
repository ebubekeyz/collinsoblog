const createTokenUser = (user) => {
    return {name: user.name, email: user.email, userId: user._id, phone: user.phone, image: user.image, facebook: user.facebook, tiktok: user.tiktok, role: user.role}
}

module.exports = createTokenUser