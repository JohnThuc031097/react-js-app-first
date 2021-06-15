export default function AuthSignIn(resolve, reject) {
    return new Promise((resolve, reject) => {
        console.log('Logging ...');
        try {
            setTimeout(() => {
                console.log('Logged !');
                resolve({ username: 'ThucNobita' });
            }, 1000);
        } catch (error) {
            reject(error);
        }
    });
}