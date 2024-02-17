import API_INSTANCE from "."

export const signup = async (body) => {
    const res = await API_INSTANCE.post('/register', body)
    return res
}

export const signin = async (body) => {
    try {
        const res = await API_INSTANCE.post('/login', body);
        return res;
    } catch (error) {
        // Handle error
        console.error("Error occurred during login:", error);
        throw error;
    }
}
