import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export async function getUsers() {
    try {
        const response = await axios({
            url: `${baseUrl}/azur/users`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}