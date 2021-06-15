export default function SignOut(resolve, reject) {
    return new Promise((resolve, reject) => {
        console.log('logging out ...');
        try {
            setTimeout(() => {
                console.log('Logged out !');
                resolve();
            }, 500);
        } catch (error) {
            reject(error);
        }
    });
}