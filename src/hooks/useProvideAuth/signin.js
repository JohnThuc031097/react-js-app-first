export default function signin(resolve, reject) {
    return new Promise(() => {
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