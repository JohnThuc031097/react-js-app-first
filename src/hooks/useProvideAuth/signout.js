export default function signout(resolve, reject) {
    return new Promise(() => {
        console.log('logging out ...');
        try {
            setTimeout(() => {
                console.log('Logged out !');
            }, 2000);
        } catch (error) {
            reject(error);
        }
    });
}