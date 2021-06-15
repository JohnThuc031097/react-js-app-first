export default function SignIn(resolve, reject) {
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