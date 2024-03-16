
![HMAC Image](https://raw.githubusercontent.com/arlsurya/angular-hmac/master/src/assets/hmac.jpeg)

## HMAC in Angular to Verify Signature of Body Data

### Overview

HMAC (Hash-based Message Authentication Code) is used to verify the integrity and authenticity of a message using a cryptographic hash function and a secret key. By generating HMAC for the body data along with a random string, we can ensure that the data transmitted between the client and server has not been tampered with during transit.

### Implementation Steps

1. **Generate a Secret Key**: Both the client and server need to share a secret key. This key is used to generate the HMAC.

2. **Generate a Random String**: Along with the body data, generate a random string to ensure a unique signature for each request.

3. **Calculate HMAC**: On the client-side, concatenate the body data with the random string and calculate the HMAC using the shared secret key.

4. **Send Data with HMAC**: Send the body data along with the calculated HMAC and the random string to the server.

5. **Verify Signature on Server**: On the server-side, calculate the HMAC for the received body data using the shared secret key and the random string received from the client. Compare the calculated HMAC with the HMAC received from the client. If they match, the signature of the body data is verified, indicating that the data integrity is intact.

### Implementation Steps
**Install Crypto Library**: Install the `crypto-js` library, which provides cryptographic functions for generating HMAC.

   ```bash
   npm install --save-dev @types/crypto-js



