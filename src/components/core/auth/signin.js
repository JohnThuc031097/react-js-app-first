export default function AuthSignIn(resolve, reject) {
    return new Promise((resolve, reject) => {
        console.log('Logging ...');
        try {
            setTimeout(() => {
                console.log('Logged !');
                resolve({ username: 'Admin' });
            }, 2000);
        } catch (error) {
            reject(error);
        }
    });
}