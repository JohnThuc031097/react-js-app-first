export default function AuthSignOut(resolve, reject) {
    return new Promise((resolve, reject) => {
        console.log('logging out ...');
        try {
            setTimeout(() => {
                console.log('Logged out !');
                resolve();
            }, 2000);
        } catch (error) {
            reject(error);
        }
    });
}