const cryptoJs = require('crypto'); 

/**
 * Middleware to verify signatures using HMAC-SHA512 algorithm
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next middleware function
 */
module.exports = (req, res, next) => {
    const { signature, ...rest } = req.body; // Extracting signature and other data from request body
    let hmac = cryptoJs.createHmac('sha512', process.env.SECRET_KEY); // Creating HMAC-SHA512 hash using secret key
    hmac.update(JSON.stringify(rest)); // Updating hash with stringified request body
    const computedSignature = hmac.digest('base64'); // Calculating the computed signature

    // Comparing computed signature with provided signature
    if (signature === computedSignature) {
        return next(); // If signatures match, continue to the next middleware
    } else {
        return res.status(400).json({ message: 'Invalid Signature' }); // If signatures don't match, return error response
    }
};
